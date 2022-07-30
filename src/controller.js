// Rendering all functions

import * as model from './model.js'
import * as data from './data.js'
import SearchView from './Views/searchView.js'
import TimeView from './Views/timeView.js'

import { HOUR, MINUTES } from './config.js'

console.log(HOUR, MINUTES)

export const grabData = async function (city) {
    try {
        // current weather
        data.currentFunction(city);

        // next days weather
        data.nextFunction(city);
    } catch (err) {
        console.error(err)
    }
}


const init = function() {
    SearchView.btnSearch()
    model.grabInput()
    TimeView.time()
    // TimeView.calcDate()
}

init()
