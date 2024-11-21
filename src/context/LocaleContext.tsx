"use client";

import React, { createContext, useState, ReactNode } from "react";
import en from "@/app/locales/en";
import ja from "@/app/locales/ja";
import ko from "@/app/locales/ko";
import zh from "@/app/locales/zh";

type LocaleContextType = {
  locale: string;
  t: typeof ja;
  switchLanguage: (locale: string) => void;
};

// Contextの作成
export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Providerの定義
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
