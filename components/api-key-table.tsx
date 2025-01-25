// components/api-key-table.tsx
"use client"

import { Table, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { getApiKeys, deleteApiKey } from "@/lib/api"
import type { ApiKey } from "@/types"
import {Button} from "@/components/ui/button";

export function ApiKeyTable() {
 const [keys, setKeys] = useState<ApiKey[]>([])

 useEffect(() => {
   loadKeys()
 }, [])

 async function loadKeys() {
   const data = await getApiKeys()
   setKeys(data)
 }

 async function handleDelete(id: string) {
   await deleteApiKey(id)
   loadKeys()
 }

 return (
   <Table>
     <TableHeader>
       <TableRow>
         <TableCell>Name</TableCell>
         <TableCell>Prefix</TableCell>
         <TableCell>Created</TableCell>
         <TableCell>Actions</TableCell>
       </TableRow>
     </TableHeader>
     <TableBody>
       {keys.map((key) => (
         <TableRow key={key.id}>
           <TableCell>{key.key_name}</TableCell>
           <TableCell>{key.prefix}</TableCell>
           <TableCell>{new Date(key.created_at).toLocaleDateString()}</TableCell>
           <TableCell>
             <Button variant="destructive" onClick={() => handleDelete(key.id)}>
               Delete
             </Button>
           </TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 )
}