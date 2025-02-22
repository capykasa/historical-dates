import styles from './App.module.scss'

export const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles['dates-page']}>
        <h1 className={`${styles['dates-page__header']} container`}>Исторические даты</h1>

        <section className={`${styles['dates-page__date-range']} container`}>
          <div className={styles['date-range']}>
            <span className={styles['date-range__start']}>2015</span>
            <span className={styles['date-range__end']}>2022</span>
          </div>

          <div className={styles['range-list-wrapper']}>
            <div className={styles['range-list']}></div>
          </div>
        </section>

        <section className={`${styles['events']} container`}>
          <div className={styles['events-nav']}>
            <span>06/06</span>
            <div className={styles['events-nav__buttons']}>
              <button className={`${styles['events-nav__button']} btn btn-round btn-nav btn-nav--prev`}></button>
              <button className={`${styles['events-nav__button']} btn btn-round btn-nav btn-nav--next`}></button>
            </div>
          </div>

          <div className={styles['events-list-wrapper']}>
            <ul className={styles['events-list']}>
              <li className={styles['events-item']}>
                <span className={styles['events-item__title']}>2015</span>
                <p className={styles['events-item__desc']}>
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
                </p>
              </li>
              <li className={styles['events-item']}>
                <span className={styles['events-item__title']}>2015</span>
                <p className={styles['events-item__desc']}>
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
                </p>
              </li>
              <li className={styles['events-item']}>
                <span className={styles['events-item__title']}>2015</span>
                <p className={styles['events-item__desc']}>
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
                </p>
              </li>
              <li className={styles['events-item']}>
                <span className={styles['events-item__title']}>2015</span>
                <p className={styles['events-item__desc']}>
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
                </p>
              </li>
            </ul>
            
            <button className={`${styles['events-list__button-next']} btn btn-round btn-nav btn-nav--next`}></button>
          </div>
        </section>
      </div>
    </div>
  )
}
