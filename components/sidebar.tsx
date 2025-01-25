'use client'
import Link from 'next/link'
import {
  LayoutDashboard,
  Key,
  Settings,
  Users,
  CreditCard
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sidebarNavItems = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard"
  },
  {
    href: "/api-keys",
    icon: Key,
    label: "API Keys"
  },
  {
    href: "/dashboard/billing",
    icon: CreditCard,
    label: "Billing"
  },
  {
    href: "/dashboard/team",
    icon: Users,
    label: "Team"
  },
  {
    href: "/dashboard/settings",
    icon: Settings,
    label: "Settings"
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:block w-64 bg-gray-100 dark:bg-blue-800 border-r dark:border-gray-700 h-screen fixed left-0 top-0 pt-16">
      <nav className="p-4">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700",
              pathname === item.href
                ? "bg-primary/10 text-primary dark:bg-primary/20"
                : "text-gray-600 dark:text-gray-300"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}