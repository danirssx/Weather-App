import { API_CURRENT, API_NEXT, DAYFUNCTION, DAYNAME } from "./config.js";

import TimeView from "./Views/timeView.js";

// TEST Api

export const state = {
  weather: {},
  location: {},
  next1: {},
  next2: {},
};

// Objects with the data

const weatherObject = function (data) {
  const weather = data.current;
  return {
    celsius: weather.temp_c,
    fahrenheit: weather.temp_f,
    humidity: weather.humidity,
    updated: weather.last_updated,
    condition: weather.condition.text,
    icon: weather.condition.icon,
  };
};

const locationObject = function (data) {
  const location = data.location;
  return {
    country: location.country,
    time: location.localtime,
    lat: location.lat,
    lon: location.lon,
    city: location.name,
    capital: location.region,
  };
};

const nextObject = function (data, day) {
  const next = data.forecast.forecastday[day];
  return {
    icon: next.day.condition.icon,
    text: next.day.condition.text,
  };
};

// Rendering data

let fetchArr = [];

export const currentFunction = async function (city) {
  try {
    // current weather
    const res = await fetch(`${API_CURRENT(city)}`);

    // Rendering the data
    const current = await res.json();

    // fetchArr.reverse(fetchArr.push(current))

    if (!current) return;

    state.weather = weatherObject(current);
    state.location = locationObject(current);

    if (!res.ok) throw new Error(`${current.message}`);

    const dataTime = state.location.time;
    const [date, time] = dataTime.split(" ");
    const [year, month, day] = date.split("-")
    const [hour, minutes] = time.split(":")

    // For dayName
    let dayDate = new Date(year, (month - 1), day).getDay();

    TimeView.updateDate(DAYFUNCTION(dayDate), month, day, year)
    TimeView.calcDate(hour)

    console.log(state.weather);
    console.log(state.location);
  } catch (err) {
    console.error(err);
  }
};

export const nextFunction = async function (city) {
  try {
    // Getting the next 2 days
    const res = await fetch(`${API_NEXT(city)}`);
    const future = await res.json();

    if (!future) return;

    state.next1 = nextObject(future, 1);
    state.next2 = nextObject(future, 2);

    if (!res.ok) throw new Error(`${future.message}`);
  } catch (err) {
    console.error(err);
  }
};
