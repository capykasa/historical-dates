import styles from './DateRange.module.scss'

export const DateRange = () => {
  return (
    <section className={`${styles['date-range-wrapper']} container`}>
      <div className={styles['date-range']}>
        <span className={styles['date-range__start']}>2015</span>
        <span className={styles['date-range__end']}>2022</span>
      </div>

      <div className={styles['range-list-wrapper']}>
        <div className={styles['range-list']}></div>
      </div>
    </section>
  )
}
