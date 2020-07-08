const express = require('express');
const bodyParser = require('body-parser');
const Treatment = require("./classes/treatment");
const daysArray = require('./yearDays');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
let GAU = 0;

const treatment = new Treatment(daysArray);


app.use(cors());
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));

app.post('/month-api', (req, res) => {
    let {month} = req.body;
    res.send(JSON.stringify(treatment.getMonth(month)));
})


app.post('/days-full-api', (req, res) => {
    GAU++;
    console.log(req.body)
    let {day, month} = req.body;
    console.log(day, month)
    let data = treatment.getDaysInCurrentMonth(day, month);
    console.log(data);
    res.send('hello');
})

app.get('/api-gau', (req, res)=>{
    let gau = String(GAU);
    res.send(gau);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}, gooooooooooooo`))