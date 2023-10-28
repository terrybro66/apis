const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data: ' + error.message);
    }
});


    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));