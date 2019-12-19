const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('static'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});

animal_questions = [
    {
        'question': 'Какой тигр самый крупный?',
        'variants': ["Амурский", 'Малазийский', 'Индийский', 'Сумматранский'],
        'answer': 'Амурский'
    },
    {
        'question': 'Что говорит кошечка?',
        'variants': ["Мяу", 'Гав', 'Кукареку', 'Хрю'],
        'answer': 'Мяу'
    },
    {
        'question': 'Что говорит собачка?',
        'variants': ["Мяу", 'Гав', 'Кукареку', 'Хрю'],
        'answer': 'Гав'
    }
];

app.get('/quiz/animals', (request, response) => {
    const to_send = [];
    for (const item of animal_questions) {
        to_send.push({
            'question': item['question'],
            'variants': item['variants']
        })
    }
    response.json(to_send);
});

app.get('/orgsList', (request, response) => {
    response.json(ORGS_LIST);
});