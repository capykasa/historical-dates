import styles from './DateRange.module.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { findDistanceOfArrayItems } from '@/utils'
import { useGSAP } from '@gsap/react'

interface DateRangeProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

const basicRotate = 30

export const DateRange = ({ dates, datePage, setDatePage }: DateRangeProps) => {
  const datePages = Object.keys(dates).map(item => Number(item))
  const degStep = 360 / datePages.length
  const startDeg = basicRotate - degStep * datePage

  const currentEventsPage = dates[datePage]

  const [roundRotate, setRoundRotate] = useState(startDeg)
  const [activePage, setActivePage] = useState(datePage)
  const [dateRangeStart, setDateRangeStart] = useState(currentEventsPage?.events[0].date)
  const [dateRangeEnd, setDateRangeEnd] = useState(currentEventsPage?.events[currentEventsPage.events.length - 1].date)

  const rangeListRef = useRef<HTMLDivElement>(null)
  const dateStartRef = useRef<HTMLSpanElement>(null)
  const dateEndRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    rangeListRef.current.style.rotate = `${startDeg}deg`
  }, [])

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

  useGSAP(() => {
    const pageDiffArr = findDistanceOfArrayItems(datePages, activePage, datePage)

    let deg = degStep * pageDiffArr[1]
    if (pageDiffArr[0]) deg = deg * -1

    gsap.to(rangeListRef.current, {
      rotation: `+=${deg}`,
      onUpdate: () => setActivePage(datePage),
    })

    setRoundRotate(roundRotate + deg)
  }, [datePage])

  return (
    <>
      {dates.length > 0 && (
        <section className={`${styles['date-range-wrapper']} container`}>
          <div className={styles['date-range']}>
            <span className={styles['date-range__start']} ref={dateStartRef}>
              {dateRangeStart}
            </span>
            <span className={styles['date-range__end']} ref={dateEndRef}>
              {dateRangeEnd}
            </span>
          </div>

          <div className={styles['range-list-wrapper']}>
            <div className={styles['range-list']} ref={rangeListRef}>
              {datePages.map((page, i) => (
                <div
                  key={i}
                  className={styles['range-list__button-wrapper']}
                  style={{ rotate: `${(i * 360) / datePages.length}deg` }}
                >
                  <button
                    className={`${styles['range-list__button']} ${
                      datePage === page ? styles['range-list__button--active'] : ''
                    } btn btn-round`}
                    onClick={() => setDatePage(page)}
                  >
                    <div
                      style={{ rotate: `${360 - (i * 360) / datePages.length - roundRotate}deg` }}
                      className={styles['range-list__button-desc']}
                    >
                      <span className={styles['range-list__button-number']}>{page + 1}</span>
                      <span className={styles['range-list__button-title']}>{dates[page].title}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
