import moment from 'moment'

export const weekDay = {
    yesterday: moment().subtract(1, 'day'),
    today: moment(),
    tomorrow: moment().add(1, 'day'),
}

export const momentSettings = {
    sameDay: '[today]',
    nextDay: '[tomorrow]',
    lastDay: '[yesterday]',
    lastWeek: '[ ]',
    nextWeek: '[ ]',
    sameElse: '[ ]',
}

export const dateForBtn = {
    yesterdayDate: moment(weekDay.yesterday).format('DD/MM'),
    todayDate: moment().format('DD/MM'),
    tomorrowDate: moment(weekDay.tomorrow).format('DD/MM'),
}

export const getClassForDay = search => {
    const setClassDay = (selectDate, weekDayDate) =>
        moment(moment(selectDate, 'DD-MM-YYYY')).startOf('day').isSame(weekDayDate.startOf('day'))
            ? 'day selected'
            : 'day'

    const historyDate = new URLSearchParams(search).get('date')

    const yesterdayClass = setClassDay(historyDate, weekDay.yesterday)
    const todayClass = setClassDay(historyDate, weekDay.today)
    const tomorrowClass = setClassDay(historyDate, weekDay.tomorrow)

    return {
        yesterdayClass,
        todayClass,
        tomorrowClass,
    }
}

export const isActiveBtn = (direction, path) =>
    path.includes(direction) ? ` ${direction}-active` : ''

export const setHistoryUrl = (history, searchValue, searchDate) => {
    const { pathname } = history.location

    const direction = pathname === '/' ? '/departures' : pathname

    const historyUrl = searchValue
        ? `${direction}?search=${searchValue}&date=${searchDate}`
        : `${direction}?&date=${searchDate}`

    history.push(historyUrl)
}
