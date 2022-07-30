import View from './View.js'
import { CLOCK, GLOBALDATE, HOUR, NEWCLOCK } from '../config.js'
class TimeView extends View {
    _parentEl = document.querySelector(".date-time")
    iflocation = true;

    time() {
        CLOCK()
    }

    calcDate(date) {
        this.iflocation = false;
        let calc = date - HOUR;
        return NEWCLOCK(calc);
    }
} 

export default new TimeView();