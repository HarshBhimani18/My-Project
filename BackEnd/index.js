const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require('body-parser');
const Userdata = require('./userdataschema')

require('dotenv').config();
const app = express();
app.use(cors());

const connectionString = "mongodb+srv://BhimaniHarsh:12345@cluster0.yznfz.mongodb.net/BhimaniHarsh";
mongoose.connect(connectionString)
.then(() => {
    console.log("Connected with CloudDB");
    
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    
    app.get('/userdata',async (req,res)=>{
        const ans = await Userdata.find();
        res.send(ans);
    });
    app.get('/userdata/:id', async (req, res) => {
        const user = await Userdata.findOne({ NumberID: req.params.id });
        res.send(user);
    });
    app.post('/data',async (req,res)=>{
        con = new Userdata({...req.body});
        const ans = await con.save();
        res.send(ans);  
    });
    app.delete('/user/delete/:id',async (req,res)=>{
        const ans = await Userdata.deleteOne({NumberID:req.params.id});
        res.send(ans);
    });
    app.patch('/userdata/:id', async (req, res) => {
        try {
            const updatedUser = await Userdata.findOneAndUpdate(
                { NumberID: req.params.id },  // Find user by NumberID
                { $set: req.body },           // Set only the fields provided in the request body
                { new: true, runValidators: true } // Return updated document and run validation
            );
    
            if (!updatedUser) {
                return res.status(404).send({ message: "User not found" });
            }
    
            res.send(updatedUser);  // Send back the updated user data
        } catch (err) {
            res.status(500).send({ message: "Error updating user", error: err.message });
        }
    });

    app.listen(3010, () => {
        console.log("server started from 3010");
    })
})

