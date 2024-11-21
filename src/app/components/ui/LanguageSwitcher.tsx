//
// 言語切替ボタン
//
"use client";

import React, { useState } from "react";
import Button from "../../../components/Button";
import { useLocale } from "@/hooks/useLocale";

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
        <Button
          label="日本語"
          size="lg"
          assign="primary"
          onClick={() => handleLanguageChange("ja", "日本語")}
        />
        <Button
          label="English"
          size="md"
          assign="secondary"
          onClick={() => handleLanguageChange("en", "English")}
        />
        <Button
          label="한국어"
          size="sm"
          assign="outline"
          onClick={() => handleLanguageChange("ko", "한국어")}
        />
        <Button
          label="中文"
          size="lg"
          assign="secondary"
          onClick={() => handleLanguageChange("zh", "中文")}
        />
      </div>
    </div>
  );
}
