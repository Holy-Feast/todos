const express = require('express')

const mongoose = require('mongoose')

const exhbs = require('express-handlebars')

const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exhbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true}))

app.use(todoRoutes)

async function start(){
  try{
    await mongoose.connect('mongodb+srv://alexsh:5336shellydb@cluster0.s5ru8.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false
    })


    app.listen(PORT, () => {
      console.log('server has been started...')
    })
  }catch(e){
    console.log(e)
  }
}

start()
