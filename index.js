const express=require('express');
const app=express();
const cors=require("cors")
const path=require('path')
const auth=require('./Router/auth')
const userRoute=require('./Router/users')
const mailRoute=require('./Router/email');
const appRoute=require('./Router/app')
var session = require('express-session');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(cors())
app.use(express.json());
app.use('/auth',auth)
app.use('/email',mailRoute)
app.use('/',appRoute)
app.use('/users',userRoute)

const port=8080;
app.listen(port,()=>{
    console.log("server is run on port:",port)
})