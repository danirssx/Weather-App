// Current API
export const API_CURRENT = function(city) {
    return `http://api.weatherapi.com/v1/current.json?key=473dc8a0e83946559b942237221207&q=${city}&aqi=no`
}

// Next days API
export const API_NEXT = function(city) {
    return `http://api.weatherapi.com/v1/forecast.json?key=473dc8a0e83946559b942237221207&q=${city}&days=3&aqi=no&alerts=no`
}

