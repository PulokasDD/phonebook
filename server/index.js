const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({status: 'its working'})
})

app.listen(3000, () => {
    console.log('ok with 3000 port')
})
