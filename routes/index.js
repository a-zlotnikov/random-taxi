const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    let a = (Math.random() * (38 - 37 + 1) + 37).toFixed(14);
    let b = (Math.random() * (56 - 55 + 1) + 55 ).toFixed(14);
    res.render("index", {a: a, b: b});
});

module.exports = router;
