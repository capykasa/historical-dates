import styles from './Events.module.scss'

export const Events = () => {
  return (
    <section className={`${styles['events-wrapper']} container`}>
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
  )
}
