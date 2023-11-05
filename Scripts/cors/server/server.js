const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

// you can allow all origins with {origin:"*"}

app.get("/get", (req, res) => {
    res.status(200).send({ message: "scrolling social medias is for losers" });
});

app.listen(8000);
