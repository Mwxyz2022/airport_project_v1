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
