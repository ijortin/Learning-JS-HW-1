const express = require('express');

let app = express();

let value = 0;

app.get("/add", (req, res) => {
    res.send(++value);
})

app.get("/subtract", (req, res) => {
    res.send(--value);
})

app.listen(3000)