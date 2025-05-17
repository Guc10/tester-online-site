const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App working on: ${port}`);
});