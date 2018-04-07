export function capitalize(str='') {
  return str && str.length
    ? str.split(/\s/g).map(word => word[0].toUpperCase().concat(word.slice(1))).join(' ')
    : ''
}

export function padNum(num, length=2) {
  let numStr = num.toString()
  while (numStr.length < length) {
    numStr = `0${numStr}`
  }
  return numStr
}

export function humanFormatDateTime(str) {
  Date.prototype.isValid = () => this.getTime() === this.getTime()
  const dateStr = new Date(str)
  let hours
  let amPm
  if (dateStr.getHours() > 12) {
    amPm = 'PM'
    hours = dateStr.getHours() - 12
  } else {
    amPm = 'AM'
    hours = dateStr.getHours() || '12'
  }
  return dateStr.isValid
    ? `${dateStr.getMonth()+1}/${dateStr.getDate()}/${dateStr.getFullYear()} @\u00a0${hours}:${padNum(dateStr.getMinutes())}\u00a0${amPm}`
    : 'invalid date'
}
