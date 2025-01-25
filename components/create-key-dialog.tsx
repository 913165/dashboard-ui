// components/create-key-dialog.tsx
"use client"

import { Button } from "@/components/ui/button"
import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { createApiKey } from "@/lib/api"

export function CreateKeyDialog() {
 const [open, setOpen] = useState(false)
 const [keyName, setKeyName] = useState("")

 async function handleSubmit(e: React.FormEvent) {
   e.preventDefault()
   try {
     await createApiKey(keyName)
     setKeyName("")
     setOpen(false)
     // Optionally trigger a refresh of the API keys list
   } catch (error) {
     console.error(error)
   }
 }

 return (
   <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild>
       <Button>Create New API Key</Button>
     </DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>Create New API Key</DialogTitle>
       </DialogHeader>
       <form onSubmit={handleSubmit} className="space-y-4">
         <Input
           placeholder="Key Name"
           value={keyName}
           onChange={(e) => setKeyName(e.target.value)}
         />
         <Button type="submit">Create</Button>
       </form>
     </DialogContent>
   </Dialog>
 )
}