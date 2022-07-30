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

export function CLOCK(dom) {
  let currentDate = new Date();

  // let result = new Date(currentDate.getTime() + (1*6*60*60*1000));

  let time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.querySelector(".time").textContent = time;

  setTimeout(CLOCK, 1000);
}
