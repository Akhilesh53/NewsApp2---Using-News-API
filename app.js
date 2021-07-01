var express = require('express')
var app = express()

const moment = require('moment')
app.locals.moment = moment;

var bodyParser = require('body-parser')

var port = 5000

//#region  Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/images',express.static(__dirname + 'public/images'))
app.use('/js',express.static(__dirname + 'public/js'))
//#endregion

//#region  Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')
//#endregion

app.use(bodyParser.urlencoded({extended : true}))

const newsRouter = require('./src/routes/news')


app.use('/',newsRouter)

//Listening to port
app.listen(port , ()=> console.log(`Listing on port Localhost:${port}`))