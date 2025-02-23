import styles from './DateRange.module.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'

interface DateRangeProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

export const DateRange = ({ dates, datePage, setDatePage }: DateRangeProps) => {
  return (
    <>
      {dates.length > 0 && (
        <section className={`${styles['date-range-wrapper']} container`}>
          <div className={styles['date-range']}>
            <span className={styles['date-range__start']}>2015</span>
            <span className={styles['date-range__end']}>2022</span>
          </div>

          <div className={styles['range-list-wrapper']}>
            <div className={styles['range-list']}></div>
          </div>
        </section>
      )}
    </>
  )
}
