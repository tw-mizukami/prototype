"use client";

import { useContext } from "react";
import { LocaleContext } from "@/context/LocaleContext";

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};