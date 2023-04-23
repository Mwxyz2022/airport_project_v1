import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import { useLocation } from 'react-router-dom'

import { useUpdateQueryParam } from '../../hooks/useUpdateQueryParam'

import { dateForBtn, getClassForDay, momentSettings, weekDay } from './dateSelectUtils'

import 'react-calendar/dist/Calendar.css'
import './dateSelect.scss'

moment.locale('en-gb')

const DateSelect = () => {
  const { search } = useLocation()
  const updateQuery = useUpdateQueryParam()
  const queryDate = new URLSearchParams(search).get('date')

  const [showCalendar, setShowCalendar] = useState(false)

  const currentCalendarDate = new Date(moment(queryDate, 'DD-MM-YYYY'))

  const datepickerDate = moment(currentCalendarDate).format('DD/MM')

  const { yesterdayDate, todayDate, tomorrowDate } = dateForBtn
  const { yesterdayClass, todayClass, tomorrowClass } = getClassForDay(queryDate)
  const lineClass = moment(queryDate, 'DD-MM-YYYY').calendar(null, momentSettings)

  const onCalendarHandler = () => {
    setShowCalendar(true)
  }

  const onSelectCalendarHandler = date => {
    const selectDate = moment(date).format('DD-MM-YYYY')
    updateQuery('date', selectDate)
    setShowCalendar(false)
  }

  const onSelectButtonHandler = event => {
    const selectDay = weekDay[event.currentTarget.name]
    const selectDate = moment(selectDay).format('DD-MM-YYYY')
    updateQuery('date', selectDate)
  }

  useEffect(() => {
    const currentDate = moment().format('DD-MM-YYYY')

    if (queryDate === null) {
      updateQuery('date', currentDate)
    }
  }, [search])

  return (
    <section className="date-select">
      <div className="datepicker">
        <label htmlFor="datepick" className="datepicker__container" onClick={onCalendarHandler}>
          <span className="datepicker__date">{datepickerDate}</span>
          <i className="fa-regular fa-calendar datepicker__icon"></i>
        </label>
        {showCalendar && (
          <Calendar
            id="datepick"
            locale="en-gb"
            className="datepicker__calendar"
            onChange={onSelectCalendarHandler}
            value={currentCalendarDate}
          />
        )}
      </div>
      <div className="date">
        <button className={yesterdayClass} name="yesterday" onClick={onSelectButtonHandler}>
          <div className="day__date">{yesterdayDate}</div>
          <div className="day__title">yesterday</div>
        </button>
        <button className={todayClass} name="today" onClick={onSelectButtonHandler}>
          <div className="day__date">{todayDate}</div>
          <div className="day__title">today</div>
        </button>
        <button className={tomorrowClass} name="tomorrow" onClick={onSelectButtonHandler}>
          <div className="day__date">{tomorrowDate}</div>
          <div className="day__title">tomorrow</div>
        </button>
        <div className={`date__line ${lineClass}`}></div>
      </div>
    </section>
  )
}

export default DateSelect
