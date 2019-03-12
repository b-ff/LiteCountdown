export default class LiteCountdown {
  constructor (
    selector = null,
    timeRange = '23:59:59',
    callback = () => {}
  ) {
    this.callback = callback  
      
    if (!selector) {
      LiteCountdown.error('Empty selector given!')
    }

    this.container = document.querySelector(selector)
    
    if (!this.container) {
      LiteCountdown.error('Cannot find element with given selector!')
    }
      
    this.parseTime(timeRange)
    this.startCountdown()
  }
  
  parseTime (timeRange) {
    const [
      seconds,
      minutes,
      hours,
      days,
      months,
      years
    ] = timeRange.split(':').reverse()
    
    this.startTime = new Date(years || 0, months || 0, days || 0, hours || 0, minutes || 0, seconds || 0)
    this.endTime = new Date(0, 0, 0, 0, 0, 0)
    this.currentTimeStamp = this.startTime.getTime()
    
    this.initialValues = [
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    ]
  }
  
  startCountdown () {
    let decreaseCountdown = () => {
      this.drawCountdown()
      this.currentTimeStamp -= 1000
      
      if (this.endTime.getTime() - this.currentTimeStamp > 0) {
        this.finishCountdown()
      } else {
        setTimeout(() => decreaseCountdown(), 1000)
      }
    }
    
    decreaseCountdown()
  }
  
  drawCountdown () {
    const date = new Date(this.currentTimeStamp)
    const timeParts = [
      date.getFullYear() - this.endTime.getFullYear() - 1,
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ]
    
    const output = timeParts
      .filter((part, idx) => !!this.initialValues[idx])
      .map(part => this.toFixedDigits(part))
      .join(':')
    
    this.container.innerHTML = output
  }
  
  toFixedDigits (number) {
    return number >= 10 ? number : `0${number}`
  }
  
  finishCountdown () {
    if (typeof this.callback === 'function') {
      this.callback()
    }
  }
  
  static error (errorMessage = '') {
    throw new Error(errorMessage)
  }
}
