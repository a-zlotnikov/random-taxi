const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    let a = (Math.random() * (38 - 37.3) + 37.3).toFixed(14);
    let b = (Math.random() * (56 - 55.5) + 55.5).toFixed(14);
    res.render("index", {a: a, b: b});
});

module.exports = router;
