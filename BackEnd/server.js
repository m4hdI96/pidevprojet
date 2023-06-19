const express = require('express');
const{MongoClient} = require('mongodb');

const mongoose  = require('mongoose')
const app = express();
const port = 3000;
const uri = "mongodb+srv://mahdi123hk:m7mbRu4litnBLbbC@cluster0.tjmxszf.mongodb.net/pidev1?retryWrites=true&w=majority";
const dbName = "pidev1";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const router = require('./routes/index');

app.use(express.json());

//connect to database
async function run() {
    try {
        mongoose 
        .connect(uri, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               })   
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));


    } catch (err) {
        console.error(err);
    }
}


//routes
app.use('/api/v1',router)
//start server
async function start(){
    const db = await run();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

start().catch((err) => {console.error(err)});