import Link from "next/link";
import { Flow } from "@/data/flows";
import { categories } from "@/data/flows";

interface FlowCardProps {
  flow: Flow;
}

export default function FlowCard({ flow }: FlowCardProps) {
  const category = categories.find((cat) => cat.id === flow.category);

  return (
    <Link href={`/flows/${flow.id}`}>
      <div className={`group relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
        flow.featured
          ? "border-2 border-amber-400 dark:border-amber-500 ring-4 ring-amber-100/50 dark:ring-amber-900/50 shadow-amber-200/50"
          : "border border-gray-200/50 dark:border-gray-700/50 hover:border-sky-300 dark:hover:border-sky-600"
      }`}>
        {/* Gradient top bar */}
        <div className={`h-1.5 ${flow.featured ? "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" : "bg-gradient-to-r from-sky-400 via-cyan-500 to-emerald-400"}`}></div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-cyan-500/0 to-emerald-500/0 group-hover:from-sky-500/5 group-hover:via-cyan-500/5 group-hover:to-emerald-500/5 transition-all duration-500 rounded-2xl"></div>

        <div className="relative p-8">
          {/* Header section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{flow.icon}</span>
              {flow.featured && (
                <span className="text-2xl animate-pulse">⭐</span>
              )}
            </div>
            <div className="flex flex-col items-end space-y-2">
              {flow.featured && (
                <span className="px-3 py-1.5 text-xs font-black rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30 animate-pulse">
                  ✨ FEATURED
                </span>
              )}
              <span className={`px-3 py-1.5 text-xs font-bold rounded-lg ${category?.color || "bg-gray-500"} text-white shadow-md`}>
                {category?.name || "Other"}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
            {flow.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
            {flow.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-medium">
              <span className="mr-2 text-lg">💡</span>
              <span>Impact</span>
            </div>
            <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-1">Learn more</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500"></div>
      </div>
    </Link>
  );
}
