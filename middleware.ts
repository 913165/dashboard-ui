import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get token from localStorage instead of cookies
    const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')

  // Add auth check using localStorage
  if (isDashboardPage) {
    if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/signup']
}