const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const dotenv = require('dotenv').config()

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const PORT = process.env.PORT || 7800

async function startServer() {

    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app, path: '/weather'})

    app.use((req, res) => {
        res.send('Weather API by OVERFLOW overflownetwork.vercel.app, use /weather to access the api')
    })
    
    app.listen(PORT, () => console.log('Running on port 4000 today'))
}

startServer()
