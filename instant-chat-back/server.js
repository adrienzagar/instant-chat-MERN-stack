// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js';
import Pusher from "pusher";


// app config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1071484',
    key: '1e365354b100ee866cd1',
    secret: 'e0148edc085b6a1851d7',
    cluster: 'eu',
    encrypted: true
  });

// middleware
app.use(express.json())

// DB config
const connection_url = 'mongodb+srv://admin:iWpn843CI9Iy24Pl@cluster0.gmhqj.mongodb.net/instant-chat-db?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB is connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log(change, "changing");

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',{
                name: messageDetails.user,
                message: messageDetails.message,
            });
        } else {
            console.log("error triggering pusher")
        }
    })
})

// ????

// api routes
app.get("/", (req,res) => res.status(200).send('hello world')); 

app.get("/messages/sync", (req, res) => {
    const dbMessage = req.body

    Messages.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// listener
app.listen(port, ()=>console.log(`Listening on localhost:${port}`));