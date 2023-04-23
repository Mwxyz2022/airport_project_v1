import moment from 'moment'

export const terminalStyles = terminal => {
  const greenStyle = { color: '#63c745', border: '1px solid #63c745' }
  const blueStyle = { color: '#1eb7ee', border: '1px solid #1eb7ee' }

  if (terminal === 'A') return greenStyle
  if (terminal === 'B') return greenStyle
  if (terminal === 'D') return blueStyle
}

export const getFlightStatus = (status, time) => {
  if (status === 'PL') return 'Planned'
  if (status === 'CL') return 'Canceled'
  if (status === 'AR') return `Landed ${moment(time).format('H:mm')}`
  if (status === 'DP' && !time) return `Registration is open`
  if (status === 'DP') return `Departed at ${moment(time).format('H:mm')}`

  return `has no status`
}
