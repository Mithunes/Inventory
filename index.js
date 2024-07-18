const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
const router = require('./Routes/router')

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


