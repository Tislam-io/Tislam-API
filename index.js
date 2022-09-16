const express = require("express");
const firebase = require("./config");

const db = firebase.firestore();
const users = db.collection("users");

const app = express();


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