
# Corban Technologies Website

A modern, responsive corporate website built with React, TypeScript, and Tailwind CSS, showcasing software development services and portfolio.

## Features

- Modern responsive design
- Service showcase
- Portfolio/Case studies
- Career opportunities
- Contact form
- Blog section
- FAQ section

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui Components
  - Wouter (routing)
  - Framer Motion (animations)

- **Backend:**
  - Express.js
  - Node.js
  - PostgreSQL (with Drizzle ORM)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://0.0.0.0:5000`

## Project Structure

```
├── client/             # Frontend React application
│   ├── public/         # Static assets
│   └── src/           
│       ├── components/ # React components
│       ├── lib/        # Utility functions
│       └── App.tsx     # Root component
├── server/             # Backend Express application
│   ├── routes.ts      # API routes
│   └── index.ts       # Server entry point
└── shared/            # Shared types and utilities
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Update database schema

## Deployment

The application can be deployed directly on Replit. Use the Deployments tool to publish your changes.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT License
