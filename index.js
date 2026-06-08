const express = require("express");
const app = express();

let totalExecut = 0;

app.post("/run", (req, res) => {
    totalExecut++;

    res.json({
        "Total Execut": totalExecut,
        "by": "Nova X Hub",
        "status": "success"
    });
});

app.get("/", (req, res) => {
    res.json({
        "Total Execut": totalExecut,
        "by": "Nova X Hub",
        "status": "success"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
