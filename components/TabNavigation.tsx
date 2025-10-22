"use client";

import { useState } from "react";
import { categories } from "@/data/flows";

interface TabNavigationProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function TabNavigation({ activeCategory, onCategoryChange }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
      <nav className="flex space-x-2 overflow-x-auto pb-2" aria-label="Tabs">
        <button
          onClick={() => onCategoryChange("all")}
          className={`whitespace-nowrap px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
            activeCategory === "all"
              ? "bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          All Features
        </button>
        <button
          onClick={() => onCategoryChange("featured")}
          className={`whitespace-nowrap px-4 py-3 text-sm font-bold rounded-t-lg transition-colors ${
            activeCategory === "featured"
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md"
              : "text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
          }`}
        >
          ⭐ Featured
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`whitespace-nowrap px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
              activeCategory === category.id
                ? `${category.color} text-white`
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
