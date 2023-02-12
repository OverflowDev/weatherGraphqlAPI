const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type WeatherData {
        main: String
        description: String
    }

    type main {
        temp: Float
        feels_like: Float
        pressure: Float
        humidity: Float
    }

    type wind {
        speed: Float
        deg: Float
    }

    type Weather {
        city: String
        weatherData: [WeatherData]
        main: main
        wind: wind
    }

    type Query {
        getCityByName(city: String!): Weather
    }
    
`

module.exports = typeDefs