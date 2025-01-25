# API Key Management System

## Project Overview
A full-stack API Key Management application built with Next.js (frontend) and FastAPI (backend), featuring user authentication and API key generation.

## Project Structure
```
.
├── frontend/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── ...
│   │   ├── api-key-table.tsx
│   │   ├── create-key-dialog.tsx
│   │   └── login-form.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
└── backend/
    ├── app/
    │   ├── api/
    │   │   ├── deps.py
    │   │   └── v1/
    │   │       └── endpoints/
    │   ├── core/
    │   │   └── security.py
    │   ├── db/
    │   │   ├── base.py
    │   │   └── session.py
    │   ├── models/
    │   │   ├── user.py
    │   │   └── api_key.py
    │   └── schemas/
    │       ├── user.py
    │       └── api_key.py
    ├── alembic/
    │   ├── versions/
    │   └── env.py
    ├── requirements.txt
    └── main.py
```

## Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- PostgreSQL

## Backend Setup
1. Create virtual environment
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Database Configuration
- Create PostgreSQL database
- Update database connection in `backend/app/core/config.py`

4. Run Migrations
```bash
alembic upgrade head
```

5. Start Backend Server
```bash
uvicorn app.main:app --reload
```

## Frontend Setup
1. Install dependencies
```bash
npm install
```

2. Run Development Server
```bash
npm run dev
```

## Features
- User Authentication
- API Key Generation
- API Key Management
- Secure Token-based Authentication

## Environment Variables
Create `.env` files in both frontend and backend:

### Backend `.env`
```
DATABASE_URL=postgresql://user:password@localhost/api_key_manager
SECRET_KEY=your_secret_key
ALGORITHM=HS256
```

### Frontend `.env`
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## Authentication Flow
1. User logs in with email/password
2. Backend generates JWT token
3. Token stored in localStorage
4. Protected routes require valid token

## Technologies
- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: FastAPI, SQLAlchemy, Alembic
- Database: PostgreSQL
- Authentication: JWT

## Security Considerations
- Password hashing
- JWT token authentication
- CORS configuration
- Environment-based configuration

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
MIT License
```
