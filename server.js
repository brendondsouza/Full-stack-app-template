const express = require('express')
const app = express()
const  cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
  
let db,
    dbConnectionString = process.env.DB_STRING, 
    dbName = 'sample_mflix',
    collection 

MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection = db.collection('movies')
  })
//SETTING MIDDLEWARE
app.set('view engine', 'ejs')                   //allows us to use ejs as a templating language
app.use(express.static('public'))               //allows all files in the public folder to be accessed when called
app.use(express.urlencoded({extended: true}))   //helping us parse urls
app.use(express.json())                         //parse json data
app.use(cors())                                 //allows cross origin requests

app.listen(process.env.PORT || PORT, _ => {
  console.log(`Server is running on PORT`)
})