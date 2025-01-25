// app/dashboard/page.tsx
"use client"

import {ApiKeyTable} from "@/components/api-key-table"
import {CreateKeyDialog} from "@/components/create-key-dialog"
import {useEffect} from "react"
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"

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
                <h1 className="text-3xl font-bold">API Keys</h1>
                <div className="space-x-4">
                    <CreateKeyDialog/>
                    <Button className="text-black" variant="outline" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
            <ApiKeyTable/>
        </div>
    )
}