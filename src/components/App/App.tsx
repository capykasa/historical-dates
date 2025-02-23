import { DateRange } from '../DateRange/DateRange'
import { Events } from '../Events/Events'
import styles from './App.module.scss'

export const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles['dates-page']}>
        <h1 className={`${styles['dates-page__header']} container`}>Исторические даты</h1>

        <DateRange />

        <Events />
      </div>
    </div>
  )
}
