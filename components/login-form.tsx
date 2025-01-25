// components/login-form.tsx
"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card} from "@/components/ui/card"
import {useRouter} from "next/navigation"
import {useState} from "react"

export function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/v1/auth/token', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `username=${email}&password=${password}`
            })

            if (!response.ok) {
                throw new Error('Invalid username or password')
            }

            const data = await response.json()
            localStorage.setItem('token', data.access_token)
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                console.error(error);
                alert(error.message); // Display error message to the user
            } else {
                console.error('An unknown error occurred');
                alert('An unknown error occurred');
            }
        }
    }

    return (
        <Card className="w-[350px] p-6">
            <form onSubmit={onSubmit} className="space-y-4">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="w-full">Login</Button>
            </form>
        </Card>
    )
}