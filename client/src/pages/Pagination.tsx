"use client"
import React from "react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const nextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const getVisiblePages = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
      }
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
      <Button
        variant="outline"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {visiblePages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-gray-500 select-none">
            ...
          </span>
        ) : (
          <Button
            key={index}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => onPageChange(page as number)}
            className="w-10"
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="outline"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
