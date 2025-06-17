"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container, Box, useTheme as useMuiTheme } from "@mui/material";
import { useTheme } from "../lib/theme-context";
import { ingredients, Ingredient } from "../data/ingredients";
import AppHeader from "../components/AppHeader";
import Calculator from "../components/Calculator";
import CookingResults from "../components/CookingResults";
import AppFooter from "../components/AppFooter";
import LoadingAnimation from "../components/LoadingAnimation";
import ThemeApplier from "../components/ThemeApplier";
import { trackIngredientSelection, trackCalculation, trackMeasurementToggle } from "../lib/analytics";

// Loading fallback component
const PageLoader = () => <LoadingAnimation isGlobal={true} />;

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const muiTheme = useMuiTheme();
  const { theme } = useTheme();

  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);
  const [portions, setPortions] = useState<number>(1);
  const [cupSize, setCupSize] = useState<number>(1);
  const [measurementMode, setMeasurementMode] = useState<"portion" | "cupSize">(
    "cupSize"
  );
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Ensure client-side hydration
  useEffect(() => {
    setIsClient(true);
    setIsLoading(false); // No delay, show content immediately
  }, []);

  // Load ingredient from URL on mount
  useEffect(() => {
    if (!isClient) return;
    
    const ingredientParam = searchParams.get("ingredient");
    if (ingredientParam) {
      const ingredient = ingredients.find((ing) => ing.id === ingredientParam);
      if (ingredient) {
        setSelectedIngredient(ingredient);
      }
    }
  }, [searchParams, isClient]);

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
        // Track ingredient selection
        trackIngredientSelection(selected.name);
      }
    }
  };

  const handlePortionIncrease = () => {
    setPortions((prev) => {
      const newValue = prev + 1;
      // Track calculation change
      if (selectedIngredient) {
        trackCalculation(selectedIngredient.name, newValue, cupSize, measurementMode);
      }
      return newValue;
    });
  };

  const handlePortionDecrease = () => {
    if (portions > 1) {
      setPortions((prev) => {
        const newValue = prev - 1;
        // Track calculation change
        if (selectedIngredient) {
          trackCalculation(selectedIngredient.name, newValue, cupSize, measurementMode);
        }
        return newValue;
      });
    }
  };

  const handleCupSizeIncrease = () => {
    setCupSize((prev) => {
      const newValue = prev + 0.5;
      // Track calculation change
      if (selectedIngredient) {
        trackCalculation(selectedIngredient.name, portions, newValue, measurementMode);
      }
      return newValue;
    });
  };

  const handleCupSizeDecrease = () => {
    if (cupSize > 0.5) {
      setCupSize((prev) => {
        const newValue = prev - 0.5;
        // Track calculation change
        if (selectedIngredient) {
          trackCalculation(selectedIngredient.name, portions, newValue, measurementMode);
        }
        return newValue;
      });
    }
  };

  const handleMeasurementToggle = () => {
    setMeasurementMode((prev) => {
      const newMode = prev === "portion" ? "cupSize" : "portion";
      // Track measurement mode toggle
      trackMeasurementToggle(newMode);
      return newMode;
    });
  };

  // If still loading, show the loading animation
  if (isLoading) {
    return <LoadingAnimation isGlobal={true} forceShow={true} />;
  }

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
          backgroundColor: theme === 'dark' ? '#402d4c' : "#FED9FE",
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
    <Suspense fallback={<PageLoader />}>
      <HomeContent />
    </Suspense>
  );
}
