import { API_CURRENT, API_NEXT } from "./config";

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

export const currentFunction = async function (city) {
  try {
    // current weather
    const res = await fetch(`${API_CURRENT(city)}`);

    // Rendering the data
    const current = await res.json();

    state.weather = weatherObject(current);
    state.location = locationObject(current);

    if (!res.ok) throw new Error(`${current.message}`);
  } catch (err) {
    console.error(err);
  }
};

export const nextFunction = async function (city) {
  try {
    // Getting the next 2 days
    const res = await fetch(`${API_NEXT(city)}`);
    const future = await res.json();

    state.next1 = nextObject(future, 1)
    state.next2 = nextObject(future, 2)

    if (!res.ok) throw new Error(`${future.message}`);
  } catch (err) {
    console.error(err);
  }
};