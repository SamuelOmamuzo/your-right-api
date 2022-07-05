const express = require("express");
const route = require("./Route/UserRight")
const cors = require("cors")
const port = 4000;

const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/right").then(()=>{
    console.log("mongodb connected")
});

app.use(express.json());
app.use(cors("*"))
app.use("/",route)

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})