'use client';
import { DataTable } from "@/components/dash/data-table"

import data from "../data.json"
export default function TablePage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <DataTable data={data} />
    </div>
  )
}