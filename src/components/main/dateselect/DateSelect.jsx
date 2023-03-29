import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import moment from 'moment'

import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './dateselect.scss'

import * as flightsActions from '../../../gateway/actions'

import {
    weekDay,
    momentSettings,
    setHistoryUrl,
    getClassForDay,
    dateForBtn,
} from '../../../utils/utils'

moment.locale('en-gb')

const DateSelect = ({ getFlightsList, setSearchValue, historyDate }) => {
    const { search } = useLocation()
    const history = useHistory()

    const searchValue = new URLSearchParams(search).get('search') || ''

    const [showCalendar, setShowCalendar] = useState(false)

    const currentCalendarDate = new Date(moment(historyDate, 'DD-MM-YYYY'))
    const datepickerDate = moment(currentCalendarDate).format('DD/MM')
    const { yesterdayDate, todayDate, tomorrowDate } = dateForBtn

    const { yesterdayClass, todayClass, tomorrowClass } = getClassForDay(search)
    const lineClass = moment(historyDate, 'DD-MM-YYYY').calendar(null, momentSettings)

    const onCalendarHandler = () => {
        setShowCalendar(true)
    }

    const onSelectCalendarHandler = date => {
        const searchDate = moment(date).format('DD-MM-YYYY')

        setHistoryUrl(history, searchValue, searchDate)
        getFlightsList(searchValue, searchDate)
        setShowCalendar(false)
    }

    const onSelectButtonHandler = event => {
        const selectDate = weekDay[event.currentTarget.name]
        const searchDate = moment(selectDate).format('DD-MM-YYYY')

        setHistoryUrl(history, searchValue, searchDate)
        getFlightsList(searchValue, searchDate)
    }

    useEffect(() => {
        setSearchValue(searchValue)
        getFlightsList(searchValue, historyDate)
    }, [])

    return (
        <section className="date-select">
            <div className="datepicker">
                <label
                    htmlFor="datepick"
                    className="datepicker__container"
                    onClick={onCalendarHandler}
                >
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

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList,
}

export default connect(null, mapDispatch)(DateSelect)
