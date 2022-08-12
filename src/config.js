import TimeView from "./Views/timeView.js";

// Current API
export const API_CURRENT = function (city) {
  return `https://api.weatherapi.com/v1/current.json?key=473dc8a0e83946559b942237221207&q=${city}&aqi=no
  `;
};

// Next days API
export const API_NEXT = function (city) {
  return `https://api.weatherapi.com/v1/forecast.json?key=473dc8a0e83946559b942237221207&q=${city}&days=3&aqi=no&alerts=no
  `
};


// Getting hour

export const GLOBALDATE = new Date();

export let RESULT;

export const YEAR = GLOBALDATE.getFullYear();
export const MONTH = GLOBALDATE.getMonth() + 1;
export const DAY = GLOBALDATE.getDate();
export const DAYNAME = GLOBALDATE.getDay();

export const HOUR = GLOBALDATE.getHours();
export const MINUTES =
  Number(GLOBALDATE.getMinutes() < 10 ? "0" : "") + GLOBALDATE.getMinutes();

export let TIMER = null;

export function DATA(result) {
  let time = result.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: '2-digit'
  });

  return time;
}

export function CLOCK(hour) {
  let currentDate = new Date()
  let calc = hour;
  
  RESULT = new Date(currentDate.getTime() + (1*calc*60*60*1000));
  
  TimeView.dateDom()

  TIMER = setTimeout(() => {
    RESULT;
    CLOCK(calc)
  }, 1 * 1000);

  return TIMER;
}

export function DAYFUNCTION(i) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if(i === 7) {
    return days[0]
  }

  if(i === 8) {
    return days[1]
  }
  
  return days[i];
}

