'use client';

import { useState, useRef, useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onChange: (dates: { start: string; end: string }) => void;
}

export default function DateRangePicker({ startDate, endDate, onChange }: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(startDate),
    to: new Date(endDate)
  });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (range: DateRange | undefined) => {
    setRange(range);
    if (range?.from && range?.to) {
      onChange({
        start: format(range.from, 'yyyy-MM-dd'),
        end: format(range.to, 'yyyy-MM-dd')
      });
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-72 text-primary"
      >
        <span>
          {range?.from ? (
            range.to ? (
              <>
                {format(range.from, 'yyyy年MM月dd日')} 至{' '}
                {format(range.to, 'yyyy年MM月dd日')}
              </>
            ) : (
              format(range.from, 'yyyy年MM月dd日')
            )
          ) : (
            '选择日期范围'
          )}
        </span>
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 rounded-lg shadow-lg border border-gray-200 bg-gray-50">
          <style jsx global>{`
            .rdp {
              margin: 0;
              background-color: #add6ff;
              border-radius: 0.5rem;
            }
            .rdp-months {
              background-color: #add6ff;
              padding: 1rem;
            }
            .rdp-month {
              background-color: #add6ff;
            }
            .rdp-day {
              color: #1a1a1a;
              font-weight: 500;
              width: 40px;
              height: 40px;
              border-radius: 9999px;
            }
            .rdp-day_today {
              background-color: #0070f3;
              color: white;
              font-weight: 600;
            }
            .rdp-day_selected,
            .rdp-day_range_start, 
            .rdp-day_range_end {
              background-color: #0070f3 !important;
              color: white !important;
              font-weight: 600;
            }
            .rdp-day_range_middle:not(.rdp-day_range_start):not(.rdp-day_range_end) {
              background-color: #5b9dff !important;
              color: white !important;
              border-radius: 9999px;
            }
            .rdp-head_cell {
              color: #4b5563;
              font-weight: 500;
            }
            .rdp-caption {
              color: #1a1a1a;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }
            .rdp-nav {
              margin-bottom: 0.5rem;
            }
            .rdp-table {
              margin: 0;
            }
          `}</style>
          <DayPicker
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={handleSelect}
            locale={zhCN}
            numberOfMonths={2}
            footer={
              <div className="text-sm text-primary p-3 text-center border-t bg-white">
                {range?.from ? (
                  range.to ? (
                    '已选择日期范围'
                  ) : (
                    '请选择结束日期'
                  )
                ) : (
                  '请选择开始日期'
                )}
              </div>
            }
          />
        </div>
      )}
    </div>
  );
} 