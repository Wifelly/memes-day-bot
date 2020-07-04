const express = require('express');
const bodyParser = require('body-parser');
const Treatment = require("./classes/treatment");
const daysArray = require('./yearDays');
const app = express();
const port = 3001;

const treatment = new Treatment(daysArray);



app.use(bodyParser.json());

app.post('/month-api', (req, res) => {
    let {month} = req.body;
    res.send(JSON.stringify(treatment.getMonth(month)));
})


app.post('/days-full-api', (req, res) => {
    let {day, month} = req.body;
    let data = treatment.getDaysInCurrentMonth(day, month);

    res.send(JSON.stringify(data));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))