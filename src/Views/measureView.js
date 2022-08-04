import View from "./View.js";
import { state } from '../data.js'

import cloud from 'url:../../icon white/cloudy.png'
import celsius from 'url:../../icon white/celsius.png'


class measureView extends View {
    _parentEl = document.querySelector(".temp-container")

    _generateMarkup() {
        return `
        <div class="icon-div">
        <img
          src="${cloud}"
          alt="icon"
          class="temp-icon"
        />
      </div>
      <div class="num-temp">
        <h1 class="temperature">${Math.round(state.weather.celsius)}</h1>
        <img src="${celsius}" alt="f" class="measure" />
      </div>`
    }
}

export default new measureView();