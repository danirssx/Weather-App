// Rendering all functions
import * as model from "./model.js";
import * as data from "./data.js";
import * as data2 from "./data2.js";

// Views
import SearchView from "./Views/searchView.js";
import TimeView from "./Views/timeView.js";
import MeasureView from './Views/measureView.js'
import ButtonView from './Views/buttonView.js'
import BgView from './Views/bgView.js'

export const grabData = async function (city) {
  try {
    // current weather
    data.currentFunction(city);

    // next days weather
    data.nextFunction(city);
  } catch (err) {
    console.error(err);
  }
};

export const grabBg = async function(e) {
  try {
    data2.getPhoto(e)
  } catch(err) {
    console.error(err)
  }
}

function coordUser() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        grabData(`${latitude},${longitude}`)
      });
}


const init = function () {
  coordUser()
  model.grabInput();

  // SearchView
  SearchView.btnSearch();

  // TimeView
  TimeView.callDate();
  TimeView.time();

  // MeasureView
  MeasureView.changeActive()

  // buttonView
  ButtonView.changeModel()
};

init();
