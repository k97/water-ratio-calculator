"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container, Box } from "@mui/material";
import { ingredients, Ingredient } from "../data/ingredients";
import AppHeader from "../components/AppHeader";
import Calculator from "../components/Calculator";
import CookingResults from "../components/CookingResults";
import AppFooter from "../components/AppFooter";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);
  const [portions, setPortions] = useState<number>(1);
  const [cupSize, setCupSize] = useState<number>(1);
  const [measurementMode, setMeasurementMode] = useState<"portion" | "cupSize">(
    "cupSize"
  );

  // Load ingredient from URL on mount
  useEffect(() => {
    const ingredientParam = searchParams.get("ingredient");
    if (ingredientParam) {
      const ingredient = ingredients.find((ing) => ing.id === ingredientParam);
      if (ingredient) {
        setSelectedIngredient(ingredient);
      }
    }
  }, [searchParams]);

  // Update URL when ingredient changes
  const updateURL = (ingredientId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (ingredientId) {
      params.set("ingredient", ingredientId);
    } else {
      params.delete("ingredient");
    }
    const newURL = params.toString() ? `?${params.toString()}` : "/";
    router.replace(newURL, { scroll: false });
  };

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "") {
      setSelectedIngredient(null);
      updateURL(null);
    } else {
      const selected = ingredients.find((ing) => ing.id === event.target.value);
      if (selected) {
        setSelectedIngredient(selected);
        updateURL(selected.id);
      }
    }
  };

  const handlePortionIncrease = () => {
    setPortions((prev) => prev + 1);
  };

  const handlePortionDecrease = () => {
    if (portions > 1) {
      setPortions((prev) => prev - 1);
    }
  };

  const handleCupSizeIncrease = () => {
    setCupSize((prev) => prev + 0.5);
  };

  const handleCupSizeDecrease = () => {
    if (cupSize > 0.5) {
      setCupSize((prev) => prev - 0.5);
    }
  };

  const handleMeasurementToggle = () => {
    setMeasurementMode((prev) => (prev === "portion" ? "cupSize" : "portion"));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        p: 1.5,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FED9FE",
          borderRadius: 8,
          p: 2,
        }}
      >
        <AppHeader />

        <Calculator
          selectedIngredient={selectedIngredient}
          portions={portions}
          cupSize={cupSize}
          measurementMode={measurementMode}
          onIngredientChange={handleIngredientChange}
          onPortionIncrease={handlePortionIncrease}
          onPortionDecrease={handlePortionDecrease}
          onCupSizeIncrease={handleCupSizeIncrease}
          onCupSizeDecrease={handleCupSizeDecrease}
          onMeasurementToggle={handleMeasurementToggle}
        />
      </Container>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          p: 0,
          flexDirection: "column",
        }}
      >
        {selectedIngredient && (
          <Box sx={{ mt: 4, p: 0 }}>
            <CookingResults
              ingredient={selectedIngredient}
              portions={portions}
              cupSize={cupSize}
              measurementMode={measurementMode}
            />
          </Box>
        )}
        <AppFooter />
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
