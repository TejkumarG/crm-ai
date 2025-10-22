"use client";

import { useState } from "react";
import TabNavigation from "@/components/TabNavigation";
import FlowCard from "@/components/FlowCard";
import { flows } from "@/data/flows";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFlows = activeCategory === "all"
    ? flows
    : activeCategory === "featured"
    ? flows.filter((flow) => flow.featured)
    : flows.filter((flow) => flow.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="relative overflow-hidden glass-effect shadow-2xl border-b border-white/20 dark:border-gray-700/20">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 animate-slide-up">
            <div className="text-6xl animate-float">🤖</div>
            <div>
              <h1 className="text-5xl font-black mb-2">
                <span className="gradient-text">AI CRM Features</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                Enterprise-grade AI solutions powering next-generation customer relationship management
              </p>
            </div>
          </div>
        </div>
        {/* Decorative gradient line */}
        <div className="h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <TabNavigation
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Results count */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-1 bg-gradient-to-b from-sky-500 to-cyan-600 rounded-full"></div>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
              Showing <span className="font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">{filteredFlows.length}</span> {filteredFlows.length === 1 ? 'feature' : 'features'}
            </p>
          </div>
        </div>

        {/* Flow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredFlows.map((flow, index) => (
            <div key={flow.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <FlowCard flow={flow} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFlows.length === 0 && (
          <div className="text-center py-20 animate-scale-in">
            <div className="text-8xl mb-6 animate-float">🔍</div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No features found
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative mt-24 glass-effect border-t border-white/20 dark:border-gray-700/20">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-cyan-500/5 to-emerald-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
              Powered by <span className="gradient-text font-bold">AI Innovation</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              15 cutting-edge features transforming customer relationship management
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500"></div>
      </footer>
    </div>
  );
}
