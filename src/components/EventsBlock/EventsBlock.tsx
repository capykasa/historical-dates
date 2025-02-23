import styles from './EventsBlock.module.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'
import { getPageNumberView } from '@/utils'

interface EventsBlockProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

export const EventsBlock = ({ dates, datePage, setDatePage }: EventsBlockProps) => {
  const currentEventsPage = dates[datePage]

  const changePage = (pageNumber: number) => {
    if (dates[pageNumber]) setDatePage(pageNumber)
  }

  return (
    <>
      {dates.length > 0 && (
        <section className={`${styles['events-section']} container`}>
          <span className={styles['events-title']}>{currentEventsPage?.title}</span>

          <div className={styles['events-wrapper']}>
            <div className={styles['events-nav']}>
              <span className={styles['events-nav__pages']}>
                {getPageNumberView(datePage + 1)}/{getPageNumberView(dates.length)}
              </span>
              <div className={styles['events-nav__buttons']}>
                <button
                  className={`${styles['events-nav__button']} btn btn-round btn-nav btn-nav--prev`}
                  onClick={() => changePage(datePage - 1)}
                  disabled={datePage === 0}
                />
                <button
                  className={`${styles['events-nav__button']} btn btn-round btn-nav btn-nav--next`}
                  onClick={() => changePage(datePage + 1)}
                  disabled={datePage === dates.length - 1}
                />
              </div>
            </div>

            {currentEventsPage.events && (
              <div className={styles['events-list-wrapper']}>
                <button
                  className={`${styles['events-list__button-prev']} btn btn-round btn-nav btn-nav--prev`}
                ></button>

                <ul className={styles['events-list']}>
                  {currentEventsPage.events.map(({ date, event }, index) => (
                    <li key={index} className={styles['events-item']}>
                      <span className={styles['events-item__title']}>{date}</span>
                      <p className={styles['events-item__desc']}>{event}</p>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles['events-list__button-next']} btn btn-round btn-nav btn-nav--next`}
                ></button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
