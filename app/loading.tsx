"use client";

import LoadingAnimation from "../components/LoadingAnimation";
import { Box } from "@mui/material";

export default function Loading() {
  return <LoadingAnimation size={150} isGlobal={true} />;
}
