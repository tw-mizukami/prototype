//
// 言語切替ボタン
//
"use client";

import { useLocale } from "@/context/LocaleContext";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

export default function LanguageSettings() {
  const { locale, switchLanguage } = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState("日本語"); // デフォルト言語を日本語に設定

  const handleLanguageChange = (newLocale: string, label: string) => {
    switchLanguage(newLocale);  // 言語を切り替え
    setSelectedLanguage(label);  // 表示ラベルも更新
  };

  return (
    <div className="ml-10 mt-12 flex flex-col space-y-4 self-auto">
      <p>現在の言語：{selectedLanguage}</p>
      
      <div className="ml-2 mt-12 flex flex-row space-x-2 self-auto">
        <CustomButton
          label="日本語"
          colorScheme="blue"
          onClick={() => handleLanguageChange("ja", "日本語")}
        />
        <CustomButton
          label="English"
          colorScheme="green"
          onClick={() => handleLanguageChange("en", "English")}
        />
        <CustomButton
          label="한국어"
          colorScheme="yellow"
          onClick={() => handleLanguageChange("ko", "한국어")}
        />
        <CustomButton
          label="中文"
          colorScheme="red"
          onClick={() => handleLanguageChange("zh", "中文")}
        />
      </div>
    </div>
  );
}
