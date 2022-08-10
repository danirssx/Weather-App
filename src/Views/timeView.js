import View from './View.js'
import * as config from '../config.js'
class TimeView extends View {
    _parentEl = document.querySelector(".date-time")

    stopTimeout() {
        clearTimeout(config.TIMER)
    }

    time() {
        config.CLOCK(0)
    }

    calcDate(date) {
        // this.iflocation = false;
        let calc = date - config.HOUR;
        this.stopTimeout()
        config.CLOCK(calc);
    }

    updateDate(dayName, month, day, year) {
        return document.querySelector(".date").textContent = `${dayName} - ${month}/${day}/${year}`
    }

    callDate() {
        this.updateDate(config.DAYFUNCTION(config.DAYNAME), config.MONTH, config.DAY, config.YEAR)
    }

    dateDom() {
        document.querySelector(".time").textContent = config.DATA(config.RESULT);
    }
} 

export default new TimeView();