"use client"

import { useMemo } from "react"
import { DayPicker } from "react-day-picker"
import { ptBR } from "date-fns/locale"
import { startOfWeek, endOfWeek, isWithinInterval } from "date-fns"
import "react-day-picker/style.css"

interface MiniCalendarProps {
  selectedWeekStart: Date
  onWeekChange: (weekStart: Date, weekEnd: Date) => void
  month?: Date
  onMonthChange?: (m: Date) => void
}

export function MiniCalendar({ selectedWeekStart, onWeekChange, month, onMonthChange }: MiniCalendarProps) {
  const weekRange = useMemo(() => ({
    start: startOfWeek(selectedWeekStart, { weekStartsOn: 0 }),
    end: endOfWeek(selectedWeekStart, { weekStartsOn: 0 }),
  }), [selectedWeekStart])

  const isInSelectedWeek = (d: Date) => isWithinInterval(d, weekRange)

  return (
    <div className="e-views-mini-calendar">
      <DayPicker
        mode="single"
        locale={ptBR}
        month={month}
        onMonthChange={onMonthChange}
        selected={selectedWeekStart}
        onSelect={(d) => {
          if (!d) return
          const ws = startOfWeek(d, { weekStartsOn: 0 })
          const we = endOfWeek(d, { weekStartsOn: 0 })
          onWeekChange(ws, we)
        }}
        modifiers={{ inWeek: isInSelectedWeek }}
        modifiersClassNames={{
          inWeek: "e-views-week-day",
          selected: "e-views-week-day-selected",
          today: "e-views-today",
        }}
        showOutsideDays
        weekStartsOn={0}
      />
      <style jsx global>{`
        .e-views-mini-calendar .rdp-root {
          --rdp-accent-color: #C8102E;
          --rdp-accent-background-color: rgba(250, 204, 21, 0.15);
          --rdp-day_button-width: 32px;
          --rdp-day_button-height: 32px;
          --rdp-day-width: 32px;
          --rdp-day-height: 32px;
          color: rgb(228 228 231);
          font-size: 13px;
        }
        .e-views-mini-calendar .rdp-month_caption {
          color: rgb(244 244 245);
          font-weight: 600;
        }
        .e-views-mini-calendar .rdp-weekday {
          color: rgb(113 113 122);
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 500;
        }
        .e-views-mini-calendar .rdp-day {
          color: rgb(212 212 216);
        }
        .e-views-mini-calendar .rdp-day_button:hover:not([disabled]) {
          background: rgba(250, 204, 21, 0.12);
          color: #C8102E;
        }
        .e-views-mini-calendar .e-views-week-day .rdp-day_button {
          background: rgba(250, 204, 21, 0.18);
          color: #fde68a;
        }
        .e-views-mini-calendar .e-views-week-day-selected .rdp-day_button {
          background: #C8102E !important;
          color: #18181b !important;
          font-weight: 700;
        }
        .e-views-mini-calendar .e-views-today .rdp-day_button {
          outline: 1px solid rgba(250, 204, 21, 0.5);
        }
        .e-views-mini-calendar .rdp-outside .rdp-day_button {
          color: rgb(82 82 91);
        }
        .e-views-mini-calendar .rdp-button_previous,
        .e-views-mini-calendar .rdp-button_next {
          color: rgb(212 212 216);
        }
        .e-views-mini-calendar .rdp-button_previous:hover,
        .e-views-mini-calendar .rdp-button_next:hover {
          background: rgba(250, 204, 21, 0.12);
          color: #C8102E;
        }
      `}</style>
    </div>
  )
}
