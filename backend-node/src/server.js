const express = require('express')
const mongoose = require('mongoose')
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const horseRaceRoutes = require('./routes/horseRace');
const horseRoutes = require('./routes/horse');
const bettingRoutes = require('./routes/betting');
const winnerRoutes = require('./routes/winner');

const app = express()
app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/horseRace', horseRaceRoutes);
app.use('/api/horse', horseRoutes);
app.use('/api/betting', bettingRoutes);
app.use('/api/winner', winnerRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

//const url = process.env.DATABASE_URL || 'mongodb+srv://root:root@giflandmongodb.pxyze.mongodb.net/giflandmongodb?retryWrites=true&w=majority';
const url = process.env.DATABASE_URL || 'mongodb+srv://root:root@horseracemongodb.wwmx3.mongodb.net/horseracemongodb?retryWrites=true&w=majority';


mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen((process.env.PORT || 5000), () => console.log(`Server started on PORT`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
