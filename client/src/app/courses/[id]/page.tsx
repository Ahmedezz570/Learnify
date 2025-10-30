"use client"
import React, { useState } from "react"
import { useParams } from "next/navigation"
import { Loading } from "@/components/Loading"
import NotFound from "@/components/not-found"
import { allCourses } from "@/data/AllCourses"
import VideoPlayer from "@/components/VideoPlayer"
import PaymentModal from "@/components/PaymentModal"
import { Button } from "@/components/ui/button"

const CardDetails = () => {
  const params = useParams() as { id: string }
  const { id } = params
  const courseId = Number(id)

  const [isPaymentOpen, setIsPaymentOpen] = useState(false)

  const course = allCourses.find((course) => course.id === courseId)

  if (!course) {
    return <NotFound />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-10 text-center">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-500">المدرب: {course.instructor}</p>

      <VideoPlayer src={"/test.mp4"} title={course.title} />

      <p className="text-lg font-semibold">السعر: ${course.price}</p>

      <Button onClick={() => setIsPaymentOpen(true)}>فتح نافذة الدفع</Button>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        course={{
          id: String(course.id),
          title: course.title,
          price: course.price,
          instructor: course.instructor,
        }}
        userId={"13"}
        onSuccess={() => {
          console.log("✅ Payment Successful")
          setIsPaymentOpen(false)
        }}
      />
    </div>
  )
}

export default CardDetails
