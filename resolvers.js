const axios = require('axios')

const resolvers = {

    Query: {
        getCityByName: async (_, {city}) => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.WEATHER_API}`)
                const res = response.data
                return {
                    city: res.name,
                    weatherData: res.weather.map(item => ({
                        main: item.main,
                        description: item.description
                      })),
                    main: {
                        temp: res.main.temp,
                        feels_like: res.main.feels_like,
                        pressure: res.main.pressure,
                        humidity: res.main.humidity,
                      },
                      wind: {
                        speed: res.wind.speed,
                        deg: res.wind.deg,
                      }
            
                    // temperature: res.main.temp,
                    // description: res.weather[0].description
                }

            } catch (error) {
                console.error("Error:", error)
                return { error: error.message }
            }
        }
    }
}

module.exports = resolvers