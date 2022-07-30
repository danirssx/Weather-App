import View from './View.js'
import { CLOCK, GLOBALDATE, HOUR, MINUTES } from '../config.js'

class TimeView extends View {
    _parentEl = document.querySelector(".date-time")

    time() {
        return CLOCK()
    }

    calcDate() {
    }
} 

export default new TimeView();