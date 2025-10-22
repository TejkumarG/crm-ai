# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js application** showcasing AI-powered CRM features. The application displays a list of AI workflow flows that users can click to view detailed content about each feature.

**Key Characteristics:**
- Next.js application with backend support (API routes allowed)
- No database - all data from static files or in-memory
- No authentication required
- Tab-based navigation interface
- List view of flows/features
- Detail view for individual flows

## Project Requirements

### Architecture
- Use Next.js with App Router (app directory)
- Backend API routes are allowed for dynamic functionality
- All content loaded from static data files (JSON or markdown)
- No database - use file system or in-memory data only
- Client-side and server-side routing supported

### UI Structure
- Multi-tab interface for organizing flows by category
- List page showing all flows with preview information
- Detail page displaying full content when a flow is clicked
- Responsive design for mobile and desktop

### Content Source
The `plan.txt` file contains 10 AI CRM features that should be displayed as flows:
1. Predictive Ordering and Demand Forecasting
2. Route Optimization
3. Personalized Recommendations
4. Customer Sentiment Analysis
5. Automated Customer Support with AI Chatbots
6. Loyalty and Retention Analysis
7. Dynamic Pricing Optimization
8. Automated Follow-Up and Engagement
9. Customer Lifetime Value Prediction
10. Workflow Automation

## Development Commands

### Initial Setup
```bash
# Initialize Next.js project (if not already done)
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Install dependencies
npm install
```

### Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Testing
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Implementation Guidance

### Data Structure
Create a data file (e.g., `data/flows.json` or `data/flows.ts`) containing:
- Flow ID
- Title
- Short description (for list view)
- Full description (for detail view)
- Category/tab assignment
- Optional: icons, images, tags

### Key Pages/Routes
- `/` - Home page with tab navigation and flow list
- `/flows/[id]` - Dynamic route for individual flow details
- `/api/*` - API routes for any backend processing needs (optional)

### State Management
- No complex state management needed
- Use URL parameters and Next.js routing for navigation
- Client components only where interactivity is needed (tabs, navigation)

### Styling
- Use Tailwind CSS for styling
- Create reusable components for flow cards, tabs, and detail layouts
- Ensure mobile-responsive design

## Custom Agents Available

This project has specialized Claude Code agents configured:
- **nextjs-architect**: For generating Next.js code, components, and architecture
- **diagram-workflow-architect**: For visualizing flows and UI layouts

Use these agents when:
- Creating Next.js pages, components, or routes
- Designing the application architecture
- Visualizing the flow structure or user journeys

## Important Notes

- **No authentication/authorization** - this is a public site
- **No database** - all data from static files (JSON/markdown) or in-memory only
- **Backend allowed** - API routes can be used for processing, but no persistent storage
- Data sources: file system reads, static JSON/TypeScript files, or in-memory structures
- All images and assets should be optimized for performance
