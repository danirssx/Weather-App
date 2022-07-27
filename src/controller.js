// Rendering all functions

import * as data from './data.js'
import searchView from './Views/searchView.js';
import SearchView from './Views/searchView.js'

const grabData = async function (city) {
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
    // grabData('caracas')
    SearchView.btnSearch()
    SearchView.getInput()
    searchView.test()
}

init()
