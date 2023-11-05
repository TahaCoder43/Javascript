// @ts-nocheck
require("dotenv").config();

const express = require("express");
const app = express();
// const cors = require("cors");

// app.use(
//     cors({
//         origin: "http://localhost:5050",
//     })
// );

// for if apps are on diffferent origins, only cross origin from localhost:5050 will be allowed through
// remember to change server url to client url because if you seperate server and client code than you will need to change the localhost
// depends on how you are configuring stuff
// you may also remov the public page

app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
    [1, { priceInCents: 10000, name: "learn React today" }],
    [2, { priceInCents: 20000, name: "Learn Css Today" }],
]);

app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment", //if you want to sell a subsribtion this would be 'subsription'
            line_items: req.body.items.map((item) => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`,
        });
        res.json({ url: session.url });
    } catch (e) {
        console.log("here");
        console.log(e.message);
        res.status(500).send({ error: e.messsage });
    }
});

// we should keep all of the information inside the web server
// because any information coming from the client side could be manipulated
// so anyone could send a us a price of 0pkr for a bottle of olive oil
// now they will send the id of the item they wanna buy so they can't manipulate it

app.listen(3000);
