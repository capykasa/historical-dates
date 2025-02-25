import './EventsBlock.scss'
import { Dispatcher } from '@/types/Dispatcher'
import { HistoricalDate } from '@/types/HistoricalDate'
import { getPageNumberView } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface EventsBlockProps {
  dates: HistoricalDate[]
  datePage: number
  setDatePage: Dispatcher<number>
}

export const EventsBlock = ({ dates, datePage, setDatePage }: EventsBlockProps) => {
  const [loading, setLoading] = useState(true)

  const currentEventsPage = dates[datePage]

  const changePage = (pageNumber: number) => {
    if (dates[pageNumber]) setDatePage(pageNumber)
  }

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => setLoading(false), 600)

    return () => {
      clearTimeout(timer)
    }
  }, [datePage])

  return (
    <>
      {dates.length > 0 && (
        <section className="events-section container">
          <span className="events-title">{currentEventsPage?.title}</span>

          <div className="events-wrapper">
            <div className="events-nav">
              <span className="events-nav__pages">
                {getPageNumberView(datePage + 1)}/{getPageNumberView(dates.length)}
              </span>
              <div className="events-nav__buttons">
                <button
                  className="events-nav__button btn btn-round btn-nav btn-nav--prev"
                  onClick={() => changePage(datePage - 1)}
                  disabled={datePage === 0}
                />
                <button
                  className="events-nav__button btn btn-round btn-nav btn-nav--next"
                  onClick={() => changePage(datePage + 1)}
                  disabled={datePage === dates.length - 1}
                />
              </div>
            </div>

            {currentEventsPage.events && (
              <>
                <button className="events-slider-button events-slider-button--prev btn btn-round btn-nav btn-nav--prev" />
                <Swiper
                  modules={[Navigation]}
                  className={`events ${!loading ? ' events--show' : ''}`}
                  spaceBetween={25}
                  slidesPerView={1.5}
                  navigation={{
                    prevEl: '.events-slider-button--prev',
                    nextEl: '.events-slider-button--next',
                  }}
                  breakpoints={{
                    769: {
                      slidesPerView: 3,
                      spaceBetween: 80,
                    },
                    1025: {
                      slidesPerView: 3,
                      spaceBetween: 80,
                    },
                  }}
                  pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
                  scrollbar={{ draggable: true }}
                >
                  {currentEventsPage.events.map(({ date, event }, index) => (
                    <SwiperSlide key={index} className="events-item">
                      <span className="events-item__title">{date}</span>
                      <p className="events-item__desc">{event}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="events-slider-button events-slider-button--next btn btn-round btn-nav btn-nav--next" />
                <div className="swiper-pagination"></div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}
