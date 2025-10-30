"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button" 

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-4">
      <h1 className="text-4xl font-bold text-red-600">Not Found</h1>
      <p className="text-gray-500">This page can be deleted , please try again later    </p>
      <Button onClick={() => router.push("/")} className="mt-4">
        Back to Home
      </Button>
    </div>
  )
}
