const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
