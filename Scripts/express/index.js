const express = require("express");
const app = express();
const PORT = 8080;

app.use( express.json() ) //midleware: right now this middleware will convert every request to json


// req => middleware => res

app.get("/duck", (req /* incoming data*/, res /*outgoing data*/) => { //does thigns on get request
    res.status(200 /*HTML response codes i.e (404)*/).send({ //send some json data with ti
        duck:"🦆",
        cute:true
    })
}) //route

app.listen( //basic listening port
    PORT,
    () => {console.log("This baby is running on https://localhost:" + PORT.toString())} //runs when the api is ready
)

app.post("/duck/:id", (req, res) => { //normally this would take the data and add a record to the duck database
    const { id } = req.params;
    const { color } = req.body // body = {color:value, ...}

    if (!color) {
        res.status(418).send({ message: "We need a color!"})
    }
    res.send({ //I am not sure but I don't think you need to specify the status
        duck: `🦆 with the color ${color}`,
    })
})