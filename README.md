# Faktura System

Swedish SaaS invoicing system with Skatteverket compliance.

## Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- npm or yarn

### Installation

1. Clone the repository
2. Start databases: `docker-compose up -d`
3. Backend: `cd faktura-backend && npm install && npm run start:dev`
4. Frontend: `cd faktura-frontend && npm install && npm run dev`

### Development

- Backend: http://localhost:3000
- Frontend: http://localhost:3001
- PostgreSQL: localhost:5432
- Redis: localhost:6379
