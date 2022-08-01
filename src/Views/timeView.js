import View from './View.js'
import { CLOCK, HOUR, TIMER } from '../config.js'
class TimeView extends View {
    _parentEl = document.querySelector(".date-time")

    stopTimeout() {
        clearTimeout(TIMER)
    }

    time() {
        CLOCK(0)
    }

    calcDate(date) {
        // this.iflocation = false;
        let calc = date - HOUR;
        this.stopTimeout()
        CLOCK(calc);
    }
} 

export default new TimeView();