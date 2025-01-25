// app/dashboard/page.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/')
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('token')
        router.push('/')
    }

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Button className="text-black" variant="outline" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="space-y-4">
                <p>Welcome to the API Key Manager Dashboard!</p>
                <p>Here you can find general information about your account and usage statistics.</p>
                <ul className="list-disc pl-5">
                    <li>Account Name: John Doe</li>
                    <li>Email: john.doe@example.com</li>
                    <li>API Keys Created: 5</li>
                    <li>Last Login: 2023-10-01</li>
                </ul>
            </div>
        </div>
    )
}