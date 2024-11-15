//
// 言語切替
//
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/app/locales/en";
import ja from "@/app/locales/ja";
import ko from "@/app/locales/ko";
import zh from "@/app/locales/zh";

type LocaleContextType = {
  locale: string;
  t: typeof ja;
  switchLanguage: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState("ja");
  const t = locale === "en" ? en : locale === "zh" ? zh : locale === "ko" ? ko : ja;

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, switchLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
