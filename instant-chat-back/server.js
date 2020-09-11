import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js';

const app = express();
const port = process.env.PORT || 9000

// importing

// app config

// middleware


// DB config
const connection_url = 'mongodb+srv://admin:iWpn843CI9Iy24Pl@cluster0.gmhqj.mongodb.net/instant-chat-db?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ????

// api routes
app.get("/", (req,res) => res.status(200).send('hello world')); 

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listener
app.listen(port, ()=>console.log(`Listening on localhost:${port}`));