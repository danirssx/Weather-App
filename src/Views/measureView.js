import View from "./View.js";
import { state } from '../data.js'

import cloud from 'url:../../icon white/cloudy.png'
import celsius from 'url:../../icon white/celsius.png'


class measureView extends View {
    _parentEl = document.querySelector(".temp-container")

    _changeClass(old, newest) {
      old.classList.remove('btn-measure-active');
      newest.classList.add('btn-measure-active')

      old.addEventListener('click', function() {
        if (old.classList.contains('btn-measure-active')) {
          console.log(old)
          this._changeClass(old, newest)
        }
      })
    }

    changeActive() {
      let btnCelsius = document.getElementById('btn-celsius')
      let btnFahrenheit = document.getElementById('btn-fahrenheit')

      btnCelsius.addEventListener('click', this._changeClass.bind(this, btnFahrenheit, btnCelsius))
      btnFahrenheit.addEventListener('click', this._changeClass.bind(this, btnCelsius, btnFahrenheit))
    }

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