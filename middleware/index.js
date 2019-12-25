module.exports = function(app) {
    const express = require('express');
    const path = require('path');
    const hbs = require('hbs');

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use(express.static(path.join(__dirname, "..", 'public')));

    app.set("views", path.join(__dirname, '..', "views"));
    app.set("view engine", "hbs");
};
