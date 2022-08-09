import View from "./View.js";
import { state } from '../data.js'

// icons
import cloud from 'url:../../icon white/cloudy.png'
import celsiusIcon from 'url:../../icon white/celsius.png'
import fahrenheitIcon from 'url:../../icon white/fahrenheit.png'

class measureView extends View {
    _parentEl = document.querySelector(".temp-container")
    celsiusDOM = document.getElementById('btn-celsius')
    fahrenheitDOM = document.getElementById('btn-fahrenheit')

    _changeClass(old, newest, render) {
      old.classList.remove('btn-measure-active');
      newest.classList.add('btn-measure-active')

      this.render()

      if(!old.classList.contains('btn-measure-active')) return;
    }

    changeActive() {
      let btnCelsius = this.celsiusDOM;
      let btnFahrenheit = this.fahrenheitDOM;

      btnCelsius.addEventListener('click', this._changeClass.bind(this, btnFahrenheit, btnCelsius))
      btnFahrenheit.addEventListener('click', this._changeClass.bind(this, btnCelsius, btnFahrenheit))
    }

    _changeMeasure() {
      if(this.celsiusDOM.classList.contains('btn-measure-active')) {
        return state.weather.celsius
      } else {
        return state.weather.fahrenheit
      }
    }

    _changeIcon() {
      if(this.celsiusDOM.classList.contains('btn-measure-active')) {
        return celsiusIcon
      } else {
        return fahrenheitIcon
      }
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
        <h1 class="temperature">${Math.round(this._changeMeasure())}</h1>
        <img src="${this._changeIcon()}" alt="f" class="measure" />
      </div>`
    }
}

export default new measureView();