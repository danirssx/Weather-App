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

export const YEAR = GLOBALDATE.getFullYear();
export const MONTH = GLOBALDATE.getMonth() + 1;
export const DAY = GLOBALDATE.getDate();
export const DAYNAME = GLOBALDATE.getDay();
console.log(YEAR, MONTH, DAY)

export const HOUR = GLOBALDATE.getHours();
export const MINUTES =
  Number(GLOBALDATE.getMinutes() < 10 ? "0" : "") + GLOBALDATE.getMinutes();

export let TIMER = null;
// export let RESULT;

function data(result) {
  let time = result.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: '2-digit'
  });

  return time;
}

export function OLDCLOCK(hour) {
  let currentDate = new Date();

  document.querySelector(".time").textContent = data(currentDate);
}

export function CLOCK(hour) {
  let currentDate = new Date();
  let calc = hour;

  let result = new Date(currentDate.getTime() + (1*calc*60*60*1000));

  document.querySelector(".time").textContent = data(result);

  TIMER = setTimeout(() => {
    CLOCK(calc)
  }, 1 * 1000);

  // console.log(result)

  return TIMER;
}

export function DAYFUNCTION(i) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[i];
}

