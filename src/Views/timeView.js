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
    
    updateDate(dayName, month, day, year) {
        return document.querySelector(".date").textContent = `${dayName} - ${month}/${day}/${year}`
    }

    callDate() {
        this.updateDate(config.DAYFUNCTION(config.DAYNAME), config.MONTH, config.DAY, config.YEAR)
    }

    calcDate(date) {
        // this.iflocation = false;
        let calc = date - config.HOUR;
        this.stopTimeout()
        console.log(date, config.HOUR)
        config.CLOCK(calc);
    }
} 

export default new TimeView();