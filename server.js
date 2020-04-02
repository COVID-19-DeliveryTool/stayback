process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const authenticationRoutes = require('./routes/authenticationRoutes')
const orderRoutes = require('./routes/orderRoutes.js')
const passport = require('passport')
const SamlStrategy = require('passport-saml').Strategy
const session = require('express-session')
const path = require('path')
const express = require('express')
const https = require('https')
const http = require('http')
const cors = require('cors')
const sanitizer = require('express-sanitizer')
const morgan = require('morgan')
const body_parser = require('body-parser')
const cookie_parser = require('cookie-parser')
const fs = require('fs')
var sequelize = require('./models');

//Utilities
const {isSessionAuthenticated} = require('./util/utilities')

//Routes
const apiRouter = require('./apiRouter')

const server = (async () => {
    try {
        console.log('Starting server...')
        // const db = await mongodb({connectionString: `mongodb://${'longhorn'}:${encodeURIComponent('T@3!mA)-Pc')}@${'localhost'}:${'27017'}/${'longhorn'}`, connectionOptions: {
        //     useUnifiedTopology: true,
        //     auth: { "authSource": "admin" },
        //     user: 'longhorn',
        //     pass: 'T@3!mA)-Pc',
        //     ssl:true,
        //     useNewUrlParser:true
        // }})
        //console.log('Database connection acquired...')

        //Intialize Server
        const app = express()
        app.use(cookie_parser())
        app.use(body_parser.json())
        app.use(body_parser.urlencoded({extended: true}))
        app.use(sanitizer())
        
        //TODO: CORS Config
        //app.use(cors({origin: ['https://localhost:3000', 'http://localhost:3000'], credentials: 'include'}))
        
        //Add api route logging for request/response
        app.use(morgan('tiny'))
        
        //initialize sequelize models
        sequelize.sync();

        http.createServer(app).listen(3001)
        console.log('Server listening on port 3001')


        //TODO: analyze use with auth provider, is necessary?
        app.use(session({
            secret: 'patrick',
            resave: true,
            saveUninitialized: false,
            rolling: true,
            proxy: true,
            //store: db,
            cookie: {
                maxAge: 3600000,
                httpOnly: false,
                secure: false
            },
            name: "accessToken",
            unset: "destroy"
        }));
        console.log('User session function established...')

        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new SamlStrategy({path: '/login/callback', entryPoint: 'www.espn.com',issuer: 'passport-saml'}, {}))
        passport.serializeUser(function(user, done) {done(null, user)})
        passport.deserializeUser(function(user, done) {done(null, user)})
        console.log('User auth strategy established...')

        //Check for login, logout, and authentication callbacks
        //authenticationRoutes(app)

        //Check session authentication status
        app.use(isSessionAuthenticated)

        //Check user authorization for requested HTTP endpoint

        //API Routes
        apiRouter(app)
        orderRoutes(app)

        //Serves our web application if no other routes match
        app.get('*', (req, res) => res.send('YayNeighbor'))

    } catch(e) {
        console.log(e.toString())
        process.exit()
    }
})()