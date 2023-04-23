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

export const getClassForDay = date => {
  const setClassDay = (selectDate, weekDayDate) =>
    moment(moment(selectDate, 'DD-MM-YYYY')).startOf('day').isSame(weekDayDate.startOf('day'))
      ? 'day selected'
      : 'day'

  const yesterdayClass = setClassDay(date, weekDay.yesterday)
  const todayClass = setClassDay(date, weekDay.today)
  const tomorrowClass = setClassDay(date, weekDay.tomorrow)

  return {
    yesterdayClass,
    todayClass,
    tomorrowClass,
  }
}
