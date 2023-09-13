const express = require("express")
const app = express();
const mongoose = require("mongoose")
require("dotenv").config();
const User = require("./model/user")
const cors = require("cors")

//MIDDLEWARE
app.use(express.json({ extended: false }));
app.use(cors())


app.use((req,res,next)=> {
    console.log(req.path,req.method)
    next();
});

const dbConnection = async() => {
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB successfully")
    app.listen(8008)
    }
    catch(error) {
        console.log(error)
    }
}

app.get("/api/user/:id" , async (req,res) => {
    const id = req.params.id;
    try {
        const data = await User.findById(id)
        res.status(200).json(data)
    }
    catch(error) {
        res.status(500).json({error:"Could not find data"})
        console.log(error)
    }
    
})

app.post("/api/create" , async (req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    }
    catch(error) {
        res.status(500).json({error:"couldn't create"});
        console.log(error)
    }
})

app.delete("/api/delete/:id" , async (req,res) => {
    const id = req.params.id;
    try {
        const user_to_delete = await User.findByIdAndDelete(id);
        if (!id) res.status(404);
        return res.send(user_to_delete)
    }

    catch(error) {
        res.status(500).json({error: "could not delete"})
        console.log(error)
    }
})

app.put("/api/update_user/:id", async(req,res) => {
    const id = req.params.id;
    const { name } = req.body
    try {
        const data = await User.findByIdAndUpdate(id, {name} , { new:true });
        res.status(200).json(data)

    }

    catch(error){
        res.status(500).json({error: "Could not complete"})
        console.log(error)
    }
})
dbConnection()


