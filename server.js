const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let pushupData = {
    counter: 0,
    history: [],
};

app.use(express.json());

app.get('/api/getPushupData', (req, res) => {
    res.json(pushupData);
});

app.post('/api/saveCounter', (req, res) => {
    pushupData.counter = req.body.counter;
    res.sendStatus(200);
});

app.post('/api/saveHistory', (req, res) => {
    pushupData.history = req.body.history;
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
