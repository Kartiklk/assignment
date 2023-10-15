const express = require('express');
const AppError = require('./utils/appError');
const mongosanitize = require('express-mongo-sanitize');
const rolerouter = require('./routes/roleroute');
const userrouter = require('./routes/userroute');
const morgan = require('morgan');
const xss =require('xss-clean');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const commuroute = require('./routes/commuroute');
const memberroute = require('./routes/memberroute')


const app = express();

app.use(helmet());


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use(mongosanitize());

app.use(xss());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.cookies);
    next();
  });

app.use('/v1/role', rolerouter);
app.use('/v1/member', userrouter);
app.use('/v1/community', commuroute);
app.use('/v1/member', memberroute);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
module.exports = app;