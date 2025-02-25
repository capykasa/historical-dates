import './RangeList.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'
import { useEffect, useRef, useState } from 'react'
import { findDistanceOfArrayItems } from '@/utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface DateRangeProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

const basicRotate = 30

export const RangeList = ({ dates, datePage, setDatePage }: DateRangeProps) => {
  const datePages = Object.keys(dates).map(item => Number(item))
  const degStep = 360 / datePages.length
  const startDeg = basicRotate - degStep * datePage

  const [roundRotate, setRoundRotate] = useState(startDeg)
  const [activePage, setActivePage] = useState(datePage)
  
  const rangeListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rangeListRef.current.style.rotate = `${startDeg}deg`
  }, [])

  useGSAP(() => {
    const pageDiffArr = findDistanceOfArrayItems(datePages, activePage, datePage)

    let deg = degStep * pageDiffArr[1]
    if (pageDiffArr[0]) deg = deg * -1

    gsap.to(rangeListRef.current, {
      rotation: `${roundRotate + deg}`,
      onUpdate: () => setActivePage(datePage),
    })

    setRoundRotate(roundRotate + deg)
  }, [datePage])

  return (
    <div className="range-list-wrapper">
      <div className="range-list" ref={rangeListRef}>
        {datePages.map((page, i) => (
          <div key={i} className="range-list__button-wrapper" style={{ rotate: `${(i * 360) / datePages.length}deg` }}>
            <button
              className={`range-list__button ${datePage === page ? ' range-list__button--active' : ''} btn btn-round`}
              onClick={() => setDatePage(page)}
            >
              <div
                style={{ rotate: `${360 - (i * 360) / datePages.length - roundRotate}deg` }}
                className="range-list__button-desc"
              >
                <span className="range-list__button-number">{page + 1}</span>
                <span className="range-list__button-title">{dates[page].title}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
