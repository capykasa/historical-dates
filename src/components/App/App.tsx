import styles from './App.module.scss'
import { historicalDates } from '@/constants/dates'
import { DateRange } from '../DateRange/DateRange'
import { EventsBlock } from '../EventsBlock/EventsBlock'
import { HistoricalDate } from '@/types/HistoricalDate'
import { useState } from 'react'

export const App = () => {
  const dates: HistoricalDate[] = historicalDates
  const [datePage, setDatePage] = useState(0)

  return (
    <div className={styles.main}>
      <div className={styles['dates-page']}>
        <h1 className={`${styles['dates-page__header']} container`}>Исторические даты</h1>

        <DateRange dates={dates} datePage={datePage} setDatePage={setDatePage} />

        <EventsBlock dates={dates} datePage={datePage} setDatePage={setDatePage} />
      </div>
    </div>
  )
}
