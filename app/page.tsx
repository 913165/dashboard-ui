// app/page.tsx (Login page)
"use client"
import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div>
        <LoginForm />
        <div className="mt-4 text-center">
          <Link href="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/signup'

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/signup']
}