export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Flow {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  impact: string;
  icon: string;
  featured?: boolean;
  workflow?: WorkflowStep[];
  techStack?: string[];
}

export const categories = [
  { id: "sales", name: "Sales & Marketing", color: "bg-blue-500" },
  { id: "customer", name: "Customer Experience", color: "bg-purple-500" },
  { id: "operations", name: "Operations", color: "bg-green-500" },
  { id: "productivity", name: "Productivity", color: "bg-orange-500" },
  { id: "analytics", name: "Analytics", color: "bg-pink-500" },
];

export const flows: Flow[] = [
  // Sales & Marketing
  {
    id: "predictive-lead-scoring",
    title: "Predictive Lead Scoring",
    category: "sales",
    description: "Use AI to rank and prioritize leads based on their likelihood to convert.",
    fullDescription: "Predictive lead scoring uses machine learning algorithms to analyze historical data, customer behavior, and engagement patterns to automatically rank leads. This helps sales teams focus their efforts on high-potential opportunities, improving conversion rates and sales efficiency. The AI model continuously learns from outcomes to refine its predictions over time.",
    impact: "Helps sales teams focus on high-potential opportunities",
    icon: "🎯",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "Lead Data Collection",
        description: "Collect seller information including reviews, product catalogs, customer feedback, and business documents. Data filtered by recency and completeness. Runs weekly/monthly in batch mode.",
        icon: "📊"
      },
      {
        step: 2,
        title: "10-Question Evaluation",
        description: "Analyze each lead through 10 critical questions: Product authenticity, return rates, customer service quality, pricing consistency, delivery performance, and business reliability. Answers processed by specialized AI models.",
        icon: "🔍"
      },
      {
        step: 3,
        title: "Report Generation",
        description: "AI compiles all answers into structured report highlighting strengths and concerns. Generates business profile, risk assessment, and opportunity summary for sales review.",
        icon: "📝"
      },
      {
        step: 4,
        title: "Quality Scoring (1-100)",
        description: "Assign quality score based on evaluation results. 80-100 = Hot leads, 60-79 = Warm leads, Below 60 = Cold leads. Authenticity and customer satisfaction weighted highest.",
        icon: "⭐"
      },
      {
        step: 5,
        title: "Sales Dashboard Delivery",
        description: "API delivers ranked leads to sales team with scores, report summaries, and recommended actions. Sales prioritizes hot leads first for outreach.",
        icon: "🎯"
      }
    ],
    techStack: [
      "Milvus vector database for semantic search",
      "MinIO object storage for files/images",
      "ClickHouse OLAP for analytics queries",
      "Multiple SLMs (Small Language Models) for specialized analysis",
      "Main LLM for aggregation and formatting",
      "Batch processing (weekly/monthly updates)"
    ]
  },
  {
    id: "campaign-optimization",
    title: "Campaign Optimization",
    category: "sales",
    description: "AI analyzes marketing campaign results in real-time and reallocates budget or audiences.",
    fullDescription: "Campaign optimization leverages AI to continuously monitor marketing campaign performance across channels. It automatically adjusts budget allocation, audience targeting, and messaging strategies based on real-time data. The system identifies underperforming campaigns and redirects resources to high-performing ones, maximizing ROI.",
    impact: "Improves ROI and reduces wasted ad spend",
    icon: "📊",
  },
  {
    id: "clv-prediction",
    title: "Customer Lifetime Value (CLV) Prediction",
    category: "sales",
    description: "Estimate the future value of each customer to prioritize high-impact relationships.",
    fullDescription: "CLV prediction uses AI to forecast the total revenue a customer will generate throughout their relationship with your business. This helps identify your most valuable customers and guides strategic decisions about where to invest in support, discounts, loyalty programs, and personalized engagement efforts.",
    impact: "Guides where to invest in support, discounts, and engagement",
    icon: "💎",
  },

  // Customer Experience
  {
    id: "sentiment-analysis",
    title: "Customer Sentiment Analysis",
    category: "customer",
    description: "Analyze emails, chats, and reviews to detect satisfaction or frustration levels.",
    fullDescription: "Customer sentiment analysis uses natural language processing (NLP) to automatically analyze customer communications across emails, chat messages, reviews, and social media. It detects emotional tone, identifies frustrated or at-risk customers, and enables support teams to prioritize responses and improve service quality proactively.",
    impact: "Helps support teams prioritize unhappy customers and improve service quality",
    icon: "😊",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "Feedback Collection",
        description: "Gather customer reviews (text), product images, and videos from multiple sources. Each tagged with product ID, seller ID, and timestamp. Filtered by completeness and recency.",
        icon: "📥"
      },
      {
        step: 2,
        title: "Text & Visual Analysis",
        description: "Text analysis detects sentiment and emotions from reviews. Visual analysis scans images/videos for broken items, damaged packaging, wrong products, or quality issues. Both run in parallel.",
        icon: "🔍"
      },
      {
        step: 3,
        title: "Two-Level Classification",
        description: "Product-level: Tag specific item issues. Seller-level: Track overall seller reputation. Cross-reference to identify patterns like repeat product problems or problematic sellers.",
        icon: "🎯"
      },
      {
        step: 4,
        title: "Priority Routing",
        description: "URGENT (broken items, safety issues, fraud) → Immediate seller alert. STANDARD (negative reviews, minor issues) → Sales team queue. Multiple complaints escalate urgency.",
        icon: "🚨"
      },
      {
        step: 5,
        title: "Resolution & Recovery",
        description: "Urgent: Instant seller notification with deadline. Non-urgent: Sales outreach with complaint summary and compensation options. All actions logged, repeat offenders flagged.",
        icon: "🤝"
      }
    ],
    techStack: [
      "Milvus vector database for text sentiment storage and semantic search",
      "MinIO object storage for images and videos with path tracking",
      "NLP models for text sentiment analysis",
      "Computer vision models for image quality and anomaly detection",
      "Two-level sentiment tracking: Product + Seller/Lead",
      "Alert routing system for urgent vs. standard cases"
    ]
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Virtual Assistants",
    category: "customer",
    description: "Automate customer queries, lead capture, and appointment booking using LLM-powered chatbots.",
    fullDescription: "AI-powered chatbots leverage large language models (LLMs) to provide intelligent, conversational support 24/7. They can handle common queries, capture lead information, schedule appointments, and escalate complex issues to human agents when needed. The chatbots learn from interactions to continuously improve their responses.",
    impact: "Provides 24/7 instant support and reduces agent workload",
    icon: "🤖",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "Question Input",
        description: "User asks question via chat. System classifies type (General, Category-specific, or Access-related) and captures user ID and session for personalization and security.",
        icon: "💬"
      },
      {
        step: 2,
        title: "Three-Source Search",
        description: "Search across: (1) Common FAQs, (2) Open details (public info), (3) User's personal data (orders, permissions, access). Semantic matching finds relevant answers. Permission filters applied.",
        icon: "🔍"
      },
      {
        step: 3,
        title: "Context Ranking",
        description: "Rank results by relevance, recency, and permissions. Select top 3-5 matches. Security filters ensure user sees only authorized information. Cross-reference multi-category questions.",
        icon: "📚"
      },
      {
        step: 4,
        title: "Response Generation",
        description: "AI generates conversational answer using question and context. Includes direct answer, source references, and follow-up suggestions. Tone adjusted based on question type.",
        icon: "✨"
      },
      {
        step: 5,
        title: "Delivery & Learning",
        description: "Send answer instantly with 'Was this helpful?' feedback. Log interaction for improvement. Low-rated responses flagged for FAQ updates. Track trends to identify knowledge gaps.",
        icon: "✅"
      }
    ],
    techStack: [
      "Milvus vector database for semantic search and embeddings",
      "Embedding model for question and FAQ vectorization",
      "Single LLM for response generation (no SLMs)",
      "FAQ database with common questions",
      "User access/permissions database",
      "Open details/public information database"
    ]
  },
  {
    id: "personalized-recommendations",
    title: "Personalized Recommendations",
    category: "customer",
    description: "Recommend products or services based on behavior, history, or similarity to other users.",
    fullDescription: "Personalized recommendation engines analyze customer purchase history, browsing behavior, and preferences to suggest relevant products or services. Using collaborative filtering and machine learning, the system identifies patterns and suggests items that similar customers enjoyed, increasing upsell, cross-sell, and repeat purchase rates.",
    impact: "Increases upsell, cross-sell, and repeat purchase rates",
    icon: "✨",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "User Behavior Tracking",
        description: "Capture user actions: product views, search queries, cart additions, purchases, time spent on items. Track clicks, wishlists, and abandoned carts. Store with timestamps and user ID.",
        icon: "👁️"
      },
      {
        step: 2,
        title: "User & Product Profiling",
        description: "Build user profile: purchase history, preferred categories, price range, brands. Create product profiles: category, attributes, popularity, ratings. Generate embeddings for semantic similarity.",
        icon: "👤"
      },
      {
        step: 3,
        title: "Collaborative Filtering",
        description: "Find similar users based on purchase and behavior patterns. Identify 'users who bought X also bought Y' patterns. Calculate user-user and item-item similarity scores using cosine similarity.",
        icon: "🔗"
      },
      {
        step: 4,
        title: "ML Recommendation Scoring",
        description: "ML model scores each product for the user based on: personal history, similar user preferences, product popularity, trending items. Combines collaborative and content-based filtering. Outputs top 20 products.",
        icon: "🎯"
      },
      {
        step: 5,
        title: "Personalization & Ranking",
        description: "Apply business rules: exclude out-of-stock items, boost new arrivals, prioritize high-margin products. Personalize by context (time of day, device, season). Re-rank final recommendations.",
        icon: "⭐"
      },
      {
        step: 6,
        title: "Real-Time Delivery & Learning",
        description: "Display top 5-10 recommendations on homepage, product pages, or emails. Track clicks and conversions. Feed interaction data back to retrain model. A/B test recommendation strategies.",
        icon: "📦"
      }
    ],
    techStack: [
      "Milvus vector database for product and user embeddings",
      "ClickHouse for user behavior analytics and event tracking",
      "Collaborative filtering algorithms (User-based, Item-based)",
      "ML models: Matrix Factorization, Neural Collaborative Filtering",
      "Embedding models for semantic product similarity",
      "Real-time inference engine for instant recommendations",
      "Redis cache for frequently accessed recommendations",
      "A/B testing framework for strategy optimization",
      "Event streaming (Kafka) for real-time behavior tracking"
    ]
  },

  // Operations
  {
    id: "route-optimization",
    title: "Route Optimization",
    category: "operations",
    description: "Plan the most efficient routes for field agents or deliveries using AI.",
    fullDescription: "Route optimization uses AI algorithms to calculate the most efficient delivery routes considering multiple factors: traffic patterns, delivery windows, vehicle capacity, driver schedules, and fuel costs. This reduces travel time, saves on operational costs, and improves on-time delivery performance.",
    impact: "Saves time, fuel, and improves on-time performance",
    icon: "🚚",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "Order & Data Collection",
        description: "Gather delivery orders with addresses, time windows, and requirements. Collect driver availability, vehicle capacity, and fuel tank levels. Pull previous route performance data.",
        icon: "📦"
      },
      {
        step: 2,
        title: "Third-Party API Integration",
        description: "Call Google Maps API for base routes and distances. Fetch live traffic from Waze/TomTom. Get weather forecasts from OpenWeather. Check road closures from government APIs. All run in parallel.",
        icon: "🌐"
      },
      {
        step: 3,
        title: "AI Road Analysis",
        description: "AI analyzes historical accident data, construction zones, and traffic patterns. Predicts congestion at delivery times. Scores road quality and safety. Cross-references real-time incidents with planned routes.",
        icon: "🧠"
      },
      {
        step: 4,
        title: "External Calculations",
        description: "Calculate fuel costs per route using current prices and vehicle efficiency. Estimate time per segment considering speed limits and traffic. Compute carbon footprint. Score routes on cost, time, and reliability.",
        icon: "📊"
      },
      {
        step: 5,
        title: "Route Merging & Optimization",
        description: "Merge all data sources: map routes + traffic + weather + AI predictions + calculations. Optimize using constraints (time windows, capacity, fuel). Generate top 3 route options ranked by efficiency.",
        icon: "🗺️"
      },
      {
        step: 6,
        title: "Dynamic Execution & Tracking",
        description: "Push optimal route to driver's mobile app. Real-time tracking with live updates. Re-optimize on incidents or new orders. Log completion times and fuel used for future AI learning.",
        icon: "📱"
      }
    ],
    techStack: [
      "Google Maps API for routing and geocoding",
      "Traffic APIs (Waze, TomTom, HERE) for real-time traffic data",
      "Weather APIs (OpenWeather, WeatherAPI) for forecast integration",
      "Government/municipal APIs for road closures and construction",
      "AI models for traffic prediction and route scoring",
      "ClickHouse for historical route performance analytics",
      "Optimization algorithms (Genetic Algorithm, Simulated Annealing)",
      "Mobile SDK for driver app integration",
      "Real-time tracking with GPS data streaming"
    ]
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    category: "operations",
    description: "Trigger internal tasks automatically — like assigning leads, updating deal stages, or sending reminders.",
    fullDescription: "Workflow automation uses AI to intelligently trigger and execute internal CRM tasks without manual intervention. It automatically assigns leads to the right sales reps, updates deal stages based on customer actions, sends timely reminders, and orchestrates complex multi-step processes, significantly boosting team productivity.",
    impact: "Reduces manual CRM work and boosts productivity",
    icon: "⚙️",
  },
  {
    id: "dynamic-pricing",
    title: "Dynamic Pricing Optimization",
    category: "operations",
    description: "Adjust prices intelligently based on demand, segment, or competition.",
    fullDescription: "Dynamic pricing uses AI to automatically adjust product or service prices based on real-time factors like demand levels, customer segments, competitor pricing, inventory levels, and market conditions. This strategy maximizes revenue while remaining competitive and can adapt to seasonal trends and customer behavior.",
    impact: "Maximizes revenue and market competitiveness",
    icon: "💰",
  },

  // Productivity
  {
    id: "automated-data-entry",
    title: "Automated Data Entry & Enrichment",
    category: "productivity",
    description: "AI extracts and updates CRM data from emails, forms, or documents automatically.",
    fullDescription: "Automated data entry uses AI and OCR technology to extract relevant information from emails, forms, business cards, and documents, then automatically populates CRM fields. It also enriches existing data by pulling information from external sources, keeping your CRM clean, accurate, and up-to-date without manual effort.",
    impact: "Keeps CRM clean and current without manual effort",
    icon: "📝",
  },
  {
    id: "voice-intelligence",
    title: "Voice & Conversation Intelligence",
    category: "productivity",
    description: "Transcribe and analyze sales/support calls to detect keywords, intent, and emotion.",
    fullDescription: "Voice and conversation intelligence automatically transcribes sales and support calls, then uses AI to analyze the content for keywords, customer intent, emotional tone, and compliance issues. This enables coaching opportunities, quality assurance, and the discovery of valuable insights that might otherwise be missed.",
    impact: "Enables coaching, quality assurance, and insight discovery",
    icon: "🎙️",
  },
  {
    id: "ai-sales-assistant",
    title: "AI-Powered Sales Assistant",
    category: "productivity",
    description: "Allow sales reps to talk to the CRM — e.g., 'Show me hot leads this week' or 'Summarize yesterday's calls.'",
    fullDescription: "An AI-powered sales assistant provides a natural language interface to your CRM. Sales reps can ask questions, request reports, and perform actions using conversational language instead of navigating complex menus. The assistant understands context, provides summaries, and helps reps access critical information faster.",
    impact: "Speeds up data access and enhances productivity through natural language",
    icon: "🧠",
  },

  // Analytics
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    category: "analytics",
    description: "Identify customers likely to stop using your service before they do.",
    fullDescription: "Churn prediction uses machine learning to analyze customer behavior patterns, usage metrics, support tickets, and engagement levels to identify customers at risk of leaving. This early warning system enables proactive retention campaigns, targeted loyalty offers, and personalized outreach before it's too late.",
    impact: "Enables proactive retention campaigns and loyalty offers",
    icon: "🚨",
    featured: true,
    workflow: [
      {
        step: 1,
        title: "Multi-Source Data Collection",
        description: "Gather customer transactions, login history, feature usage, support tickets, payment delays, and order frequency. Pull product returns, complaint history, and account age. Runs daily in batch mode.",
        icon: "📊"
      },
      {
        step: 2,
        title: "Feature Engineering",
        description: "Calculate metrics: days since last login, order frequency decline %, support ticket volume trend, payment delay count, feature adoption rate. Create 30-day, 60-day, 90-day rolling averages for trend analysis.",
        icon: "🔧"
      },
      {
        step: 3,
        title: "Sentiment & Engagement Analysis",
        description: "Analyze support ticket sentiment using NLP. Track email open rates and click-through rates. Score satisfaction from feedback surveys. Identify negative sentiment patterns and declining engagement signals.",
        icon: "💬"
      },
      {
        step: 4,
        title: "ML Model Prediction",
        description: "Train ML model (Random Forest, XGBoost) on historical churn data. Score each customer 0-100 for churn probability. Identify top contributing factors (e.g., payment issues 40%, low usage 30%, support complaints 30%).",
        icon: "🧠"
      },
      {
        step: 5,
        title: "Risk Segmentation & Prioritization",
        description: "Segment customers: HIGH risk (score 70+), MEDIUM (40-69), LOW (<40). Tag churn reasons (price sensitivity, product fit, competitor switch). Prioritize high-value customers at risk for immediate action.",
        icon: "🎯"
      },
      {
        step: 6,
        title: "Automated Retention Campaigns",
        description: "HIGH risk: Instant account manager alert + personalized retention offer. MEDIUM: Automated email with discount/upgrade incentive. LOW: Monitor only. Track campaign success to retrain model.",
        icon: "🎁"
      }
    ],
    techStack: [
      "ClickHouse for customer behavior analytics and time-series data",
      "ML models: Random Forest, XGBoost, or Neural Networks for churn prediction",
      "Feature engineering pipeline for metric calculations",
      "NLP models for sentiment analysis on support tickets",
      "Customer engagement tracking (email, login, feature usage)",
      "CRM integration for automated campaign triggers",
      "Model retraining pipeline with feedback loop",
      "Batch processing (daily predictions)",
      "A/B testing framework for retention campaign optimization"
    ]
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting",
    category: "analytics",
    description: "Use AI to predict future revenue, order volumes, or demand trends.",
    fullDescription: "Sales forecasting leverages historical data, seasonal patterns, market trends, and pipeline information to predict future revenue and demand. AI models continuously adjust predictions based on new data, helping businesses make informed decisions about inventory, staffing, resource allocation, and strategic planning.",
    impact: "Improves inventory, staffing, and strategic planning",
    icon: "📈",
  },
  {
    id: "automated-followup",
    title: "Automated Follow-Ups & Engagement",
    category: "analytics",
    description: "Automatically send timely, personalized follow-ups after key events (e.g., delivery, quote request).",
    fullDescription: "Automated follow-up systems use AI to determine the optimal timing and content for customer communications after key events like deliveries, quote requests, or support interactions. The system personalizes messages based on customer behavior and preferences, improving conversion rates and customer retention through consistent, relevant engagement.",
    impact: "Improves conversion rates and customer retention",
    icon: "📧",
  },
];
