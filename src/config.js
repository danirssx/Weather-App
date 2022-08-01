import TimeView from "./Views/timeView.js";

// Current API
export const API_CURRENT = function (city) {
  return `http://api.weatherapi.com/v1/current.json?key=473dc8a0e83946559b942237221207&q=${city}&aqi=no`;
};

// Next days API
export const API_NEXT = function (city) {
  return `http://api.weatherapi.com/v1/forecast.json?key=473dc8a0e83946559b942237221207&q=${city}&days=3&aqi=no&alerts=no`;
};

// Getting hour

export const GLOBALDATE = new Date();

export const HOUR = GLOBALDATE.getHours();
export const MINUTES =
  Number(GLOBALDATE.getMinutes() < 10 ? "0" : "") + GLOBALDATE.getMinutes();

export let TIMER = null;

function data(result) {
  let time = result.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return time;
}

export function CLOCK(hour) {
  let currentDate = new Date();
  let calc = hour;

  let result = new Date(currentDate.getTime() + (1*calc*60*60*1000));

  document.querySelector(".time").textContent = data(result);


  TIMER = setTimeout(() => {
    CLOCK(calc)
  }, 1000);

  return TIMER;
}

