import Link from "next/link";
import { notFound } from "next/navigation";
import { flows, categories } from "@/data/flows";

interface FlowDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FlowDetailPage({ params }: FlowDetailPageProps) {
  const { id } = await params;
  const flow = flows.find((f) => f.id === id);

  if (!flow) {
    notFound();
  }

  const category = categories.find((cat) => cat.id === flow.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 dark:from-slate-950 dark:via-sky-950 dark:to-cyan-950">
      {/* Header */}
      <header className="glass-effect shadow-xl border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-bold text-lg transition-all hover:translate-x-1"
          >
            <span className="mr-3 text-2xl">←</span>
            <span>Back to all features</span>
          </Link>
        </div>
        <div className="h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category and Featured Badges */}
        <div className="mb-8 flex items-center space-x-4 animate-slide-up">
          {flow.featured && (
            <span className="inline-flex items-center px-6 py-3 rounded-xl text-base font-black bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30 animate-pulse">
              ⭐ FEATURED
            </span>
          )}
          <span className={`inline-flex items-center px-6 py-3 rounded-xl text-base font-bold ${category?.color || "bg-gray-500"} text-white shadow-lg`}>
            {category?.name || "Other"}
          </span>
        </div>

        {/* Title and Icon */}
        <div className="flex items-start space-x-6 mb-12 animate-slide-up">
          <span className="text-8xl animate-float">{flow.icon}</span>
          <div className="flex-1">
            <h1 className="text-5xl font-black mb-6 gradient-text leading-tight">
              {flow.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {flow.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-sky-200 via-cyan-200 to-emerald-200 dark:from-sky-800 dark:via-cyan-800 dark:to-emerald-800 rounded-full my-12"></div>

        {/* Impact Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900/40 dark:to-cyan-900/40 rounded-2xl p-10 mb-12 border-2 border-sky-200 dark:border-sky-800 shadow-xl animate-slide-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-transparent rounded-full -mr-32 -mt-32"></div>
          <div className="relative flex items-start space-x-4">
            <span className="text-4xl">💡</span>
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Business Impact
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                {flow.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="glass-effect rounded-2xl shadow-2xl p-10 mb-12 border border-white/20 dark:border-gray-700/20 animate-slide-up">
          <h2 className="text-3xl font-black mb-6 gradient-text">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {flow.fullDescription}
          </p>
        </div>

        {/* Workflow Pipeline - Premium Design */}
        {flow.workflow && flow.workflow.length > 0 && (
          <div className="relative overflow-hidden rounded-3xl mb-12 animate-slide-up">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-emerald-500/10"></div>

            <div className="relative glass-effect border-2 border-sky-200/50 dark:border-sky-700/50 p-12">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 mb-6 shadow-xl shadow-sky-500/30 animate-float">
                  <span className="text-3xl">🔄</span>
                </div>
                <h2 className="text-4xl font-black mb-4 gradient-text">
                  AI Workflow Pipeline
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Step-by-step orchestration showing how AI processes this feature from start to finish
                </p>
              </div>

              {/* Pipeline Steps */}
              <div className="space-y-8">
                {flow.workflow.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Connector Line */}
                    {index < flow.workflow!.length - 1 && (
                      <div className="absolute left-16 top-32 w-1 h-16 bg-gradient-to-b from-sky-400 via-cyan-500 to-emerald-400 dark:from-sky-500 dark:via-cyan-600 dark:to-emerald-500 rounded-full"></div>
                    )}

                    {/* Step Card */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>

                      <div className="relative flex items-start space-x-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 dark:border-sky-900 group-hover:border-sky-300 dark:group-hover:border-sky-600 group-hover:-translate-y-1">
                        {/* Step Number & Icon */}
                        <div className="flex flex-col items-center space-y-4 flex-shrink-0">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>
                          <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{step.icon}</span>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/20 to-transparent rounded-bl-3xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Benefits */}
        <div className="glass-effect rounded-2xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/20 animate-slide-up mb-12">
          <h2 className="text-3xl font-black mb-10 gradient-text">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800">
              <span className="text-3xl">✅</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Automated & Intelligent
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  AI handles complex tasks automatically, learning and improving over time
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Real-Time Insights
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  Get instant analysis and actionable recommendations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <span className="text-3xl">📈</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Scalable Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  Works seamlessly as your business and customer base grows
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Data-Driven Results
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  Make decisions based on AI-powered analytics and predictions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        {flow.techStack && flow.techStack.length > 0 && (
          <div className="glass-effect rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">⚙️</span>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Technical Architecture
              </h3>
            </div>
            <ul className="space-y-3">
              {flow.techStack.map((tech, index) => (
                <li key={index} className="flex items-start space-x-3 text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-sky-500 mt-1 text-xl">▪</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Features */}
        <div className="mt-20 pt-12 border-t-2 border-sky-200 dark:border-sky-800">
          <h2 className="text-3xl font-black mb-10 gradient-text">
            Explore More Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flows
              .filter((f) => f.id !== flow.id && f.category === flow.category)
              .slice(0, 3)
              .map((relatedFlow) => (
                <Link
                  key={relatedFlow.id}
                  href={`/flows/${relatedFlow.id}`}
                  className="group block p-6 glass-effect rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-sky-200 dark:border-sky-800 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{relatedFlow.icon}</span>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {relatedFlow.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {relatedFlow.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
