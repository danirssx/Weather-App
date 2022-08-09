import { state } from "../data.js";
import View from "./View.js";

// icons
import cloudIcon from 'url:../../icon white/cloudy.png'
import humidityIcon from 'url:../../icon white/humidity.png';
import rainIcon from "url:../../icon white/rain.png";

class ButtonView extends View {
  _parentEl = document.querySelector(".weather-info");

  _fewDays = document.querySelector(".btn-few-days");
  _meteoData = document.querySelector(".btn-meteorological");

  _classChange(old, newest) {
    old.classList.toggle("hidden");
    newest.classList.toggle("hidden");

    this.render()
  }

  _generateMarkup() {
    if(!this._fewDays.classList.contains('hidden')) {
        return `
            ${this._generateMarkupMeteo()}
        `
    } else {
        return `
            ${this._generateMarkupNext()}
        `
    }
  }

  changeModel() {
    let meteo = this._meteoData;
    let fewDays = this._fewDays;

    this._fewDays.addEventListener(
      "click",
      this._classChange.bind(this, fewDays, meteo)
    );
    this._meteoData.addEventListener(
      "click",
      this._classChange.bind(this, meteo, fewDays)
    );
  }

  _generateMarkupMeteo() {
    return `
        <div class="days-div-weather meteo-days-1">
        <div class="meteo-line1 meteo-line">
          <h1 class="calc-humidity calc-meteo">${state.weather.humidity}%</h1>
          <img src="${humidityIcon}" alt="f" class="img-meteo" />
        </div>
        <h3 class="text-meteo">Humidity</h3>
      </div>
      <div class="days-div-weather meteo-days-2">
        <div class="meteo-line2 meteo-line">
          <img src="${rainIcon}" alt="f" class="img-meteo" />
          <h1 class="calc-rain calc-meteo">${state.actual.rain}%</h1>
        </div>
        <h3 class="text-meteo">Rain</h3>
      </div>
        `;
  }

  _generateMarkupNext() {
    return `
        <div class="days-div-weather next-days-1">
             <img src="${cloudIcon}" alt="f" class="img-next" />
             <h3 class="text-days">Wed</h3>
        </div>
        <div class="days-div-weather next-days-2">
             <img src="${cloudIcon}" alt="f" class="img-next" />
             <h3 class="text-days">Thur</h3>
      </div>
        `;
  }
}

export default new ButtonView();
