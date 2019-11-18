process.env.NODE_ENV = 'production';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var leitura_geladeiraRouter = require('./routes/leituras-geladeira');
var leitura_hospitalRouter = require('./routes/leituras-hospital');
var leitura_cargoRouter = require('./routes/leituras-cargo');
var leitura_acessaRouter = require('./routes/leituras-acessa');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/geladeiras', leitura_geladeiraRouter);
app.use('/hospital', leitura_hospitalRouter);
app.use('/cargo', leitura_cargoRouter);
app.use('/acessa', leitura_acessaRouter);

module.exports = app;
