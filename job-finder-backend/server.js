const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3002
const RAPID_API_KEY = process.env.RAPIDAPI_KEY;

app.get('/api/jobs', async (req, res) => {
    const {query, location } = req.query;

try{
    const jsearchResponse = await axios.get( 'https://jsearch.p.rapidapi.com/search', {
        params:{ query:{query}, location: {location} },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            query,
            location
        }
    });

    res.json(jsearchResponse.data);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching job data.' });
}

});
