import './DateRange.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { RangeList } from '../RangeList/RangeList'

interface DateRangeProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

export const DateRange = ({ dates, datePage, setDatePage }: DateRangeProps) => {
  const currentEventsPage = dates[datePage]

  const [dateRangeStart, setDateRangeStart] = useState(currentEventsPage?.events[0].date)
  const [dateRangeEnd, setDateRangeEnd] = useState(currentEventsPage?.events[currentEventsPage.events.length - 1].date)

  const dateStartRef = useRef<HTMLSpanElement>(null)
  const dateEndRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const newDateStart = dates[datePage].events[0].date
    const newDateEnd = dates[datePage].events[dates[datePage].events.length - 1].date

    gsap.to(dateStartRef.current, {
      textContent: `+=${newDateStart - dateRangeStart}`,
      roundProps: 'textContent',
      onUpdate: () => setDateRangeStart(newDateStart),
    })
    gsap.to(dateEndRef.current, {
      textContent: `+=${newDateEnd - dateRangeEnd}`,
      roundProps: 'textContent',
      onUpdate: () => setDateRangeEnd(newDateEnd),
    })
  }, [datePage])

  return (
    <>
      {dates.length > 0 && (
        <section className='date-range-wrapper container'>
          <div className='date-range'>
            <span className='date-range__start' ref={dateStartRef}>
              {dateRangeStart}
            </span>
            <span className='date-range__end' ref={dateEndRef}>
              {dateRangeEnd}
            </span>
          </div>

          <RangeList dates={dates} datePage={datePage} setDatePage={setDatePage} />
        </section>
      )}
    </>
  )
}
