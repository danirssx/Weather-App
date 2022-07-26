// Fetching long and lat

// TEST Api

const state = {
  weather: {},
  location: {},
};

export const weatherFunction = async function (city) {
  try {
    const res =
      await fetch(`http://api.weatherapi.com/v1/current.json?key=473dc8a0e83946559b942237221207&q=${city}&aqi=no
    `);

    const data = await res.json();

    const weather = data.current;
    const location = data.location;

    state.weather = {
      humidity: weather.humidity,
      updated: weather.last_updated,
      condition: weather.condition.text,
      icon: weather.condition.icon,
    };

    state.location = {
      country: location.country,
      lat: location.lat,
      lon: location.lon,
      city: location.name,
      capital: location.region,
    }

    if (!res.ok) throw new Error(`${data.message}`);

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

weatherFunction("caracas");

setTimeout(() => {
  console.log(state.weather)
  console.log(state.location)
}, 2000);



