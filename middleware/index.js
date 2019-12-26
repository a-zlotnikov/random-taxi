module.exports = function(app) {
    const express = require('express');
    const path = require('path');
    const handlebars = require('express-handlebars');

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use(express.static(path.join(__dirname, "..", 'public')));

    app.set('views', path.join(__dirname, '../views'));
    const hbs = handlebars.create( {
        defaultLayout: './layout',
        extname: 'hbs',
        layoutsDir: path.join(__dirname, '../views'),
        partialsDir: path.join(__dirname, '../views')
    });
    app.engine( 'hbs', hbs.engine );
    app.set('view engine', 'hbs');
};
