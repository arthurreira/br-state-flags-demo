import * as React from "react"
import { ResponsiveContainer } from "recharts"

export function ChartContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
  )
}

export function ChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border px-3 py-2 rounded-lg shadow-xl outline-none">
        <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground mb-1">{label}</p>
        {payload.map((item: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color || item.fill }}
            />
            <p className="text-sm font-bold">{item.name}: <span className="text-primary">{item.value}</span></p>
          </div>
        ))}
      </div>
    )
  }
  return null
}
