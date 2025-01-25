'uaw client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/lib/theme-context'
import { ThemeToggle } from '@/components/theme-toggle'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'API Key Manager',
  description: 'Manage your API keys securely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <main className="md:pl-64 w-full min-h-screen">
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