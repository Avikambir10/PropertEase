const express = require('express');
const cors = require('cors');

const PORT = 9090;

// *** importing routes *** //
const buyRoute = require('./Routes/buy_route');
const sellRoute = require('./Routes/sell_route');

const app = express();

app.use(cors());
app.use(express.json())

app.use('/buy',buyRoute);
app.use('/sell',sellRoute);


app.listen(PORT, (err) => {
    if (err) {
        console.log("error connecting to server");
    } else {
        console.log(`connected to server at port ${PORT}`);
    }
})