const express = require("express");
const firebase = require("./config");

const db = firebase.firestore();
const users = db.collection("users");

const app = express();

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const firebaseConfig = {
  apiKey: "AIzaSyADsvlxumI_mAcQxGzRec2cHzvROdhmj_A",
  authDomain: "tislam-7b6fd.firebaseapp.com",
  projectId: "tislam-7b6fd",
  storageBucket: "tislam-7b6fd.appspot.com",
  messagingSenderId: "339822455732",
  appId: "1:339822455732:web:61b1c082c7a76e013f60e1",
  measurementId: "G-5RKNWRXF7K"
};



app.get("/", async (req, res) => {    
    await s3.putObject({
        Body: JSON.stringify(firebaseConfig),
        Bucket: "cyclic-dark-tan-clownfish-robe-eu-west-3",
        Key: "serviceAccountKey.json",
      }).promise()

    res.send("fuck off");
})

app.get("/users/", async (req, res) => {    
    const snapshot = await users.get();

    let u = []

    snapshot.forEach(doc => 
    {
        u.push(doc.data())    
    })

    res.json(users);

})

app.listen(3000);