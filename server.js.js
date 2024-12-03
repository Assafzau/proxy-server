const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQ0MzE4OTE2OCwiYWFpIjoxMSwidWlkIjoxNzkxODk1MiwiaWFkIjoiMjAyNC0xMi0wMlQxMDoxNzozOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NjU3MjQzMiwicmduIjoidXNlMSJ9.0lf7048zgetPap46od0GOqjR03nUGMUfsXi8jaZqxPI";

app.post("/monday", async (req, res) => {
    try {
        const response = await axios.post("https://api.monday.com/v2", req.body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: API_TOKEN,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        res.status(500).send(error.response ? error.response.data : error.message);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
