const express = require("express");
const app = express();

app.use(express.json());

let count = 0;

app.post("/run", (req, res) => {
    count++;
    console.log("Executor:", count);
    res.json({ count });
});

app.get("/", (req, res) => {
    res.send(`
    <h1>Owner: Nova X Hub</h1>
    <h2>Executor: ${count}</h2>
    <h2>Status: Work</h2>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
