//
// 標準ボタン
//
import React from 'react';

interface CustomButtonProps {
  label: string;
  colorScheme?: "blue" | "green" | "red" | "yellow"; // カラースキームを指定
  onClick: () => void;
}

const colorSchemes = {
  blue: "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:bg-blue-200 dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20",
  green: "bg-green-100 text-green-800 hover:bg-green-200 focus:bg-green-200 dark:text-green-400 dark:bg-green-800/30 dark:hover:bg-green-800/20 dark:focus:bg-green-800/20",
  red: "bg-red-100 text-red-800 hover:bg-red-200 focus:bg-red-200 dark:text-red-400 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20",
  yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:bg-yellow-200 dark:text-yellow-400 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20",
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  colorScheme = "blue",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`w-20 h-12 py-3 px-4 flex justify-center items-center 
        text-sm font-medium rounded-lg border border-transparent
        disabled:opacity-50 
        disabled:pointer-events-none
        ${colorSchemes[colorScheme]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
