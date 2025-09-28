import { ChartAreaInteractive } from "@/components/dash/chart-area-interactive"
import { DataTable } from "@/components/dash/data-table"
import { SectionCards } from "@/components/dash/section-cards"

import data from "./data.json"

export default function dashPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  )
}
