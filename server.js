const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
require('dotenv').config()

//middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(morgan('tiny'));

//setting up ejs
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//connecting to our database
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Connection Successful!");
//     })
//     .catch((err) => {
//         console.log("Connection Failed!");
//         console.log(err);
//     });

//routes setup
// const newsRoutes = require('./routes/news');
// app.use('/articles', newsRoutes);
// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('App is running at port', 3000);
});
