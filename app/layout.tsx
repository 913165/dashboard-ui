'use client'

import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/lib/theme-context'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import './globals.css'

const Sidebar = dynamic(() => import('@/components/sidebar').then(mod => mod.Sidebar), { ssr: false })
const ThemeToggle = dynamic(() => import('@/components/theme-toggle').then(mod => mod.ThemeToggle), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  // Check if the current path is in the dashboard
  const isDashboardRoute = pathname?.startsWith('/dashboard')

  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <div className="flex">
            {isLoggedIn && isDashboardRoute && <Sidebar />}
            <main className={`w-full min-h-screen ${isLoggedIn && isDashboardRoute ? 'md:pl-64' : ''}`}>
              <header className="p-4 flex justify-end">
                <ThemeToggle />
              </header>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}