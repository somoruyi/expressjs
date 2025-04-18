const express = require('express');
const routes = require('./routes/routes');


// Bring in the database
// require('./models/db');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});



// Use routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});