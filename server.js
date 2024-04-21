const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.static("my-app/build"));

app.listen(port, () => {
  console.log("Listening on port 3000");
});

/**
 * Retrieve profile data from mongo
 */
app.get("/profile/:user", (req, res) => {
  let user = req.params.user;
  console.log("Retrieving " + user + " profile");
  async function retrieveProfile(){
  try {
    const { MongoClient } = require("mongodb");
    const uri = process.env.MONGODB;
    const client = new MongoClient(uri);
    await client.connect;
    const database = client.db("Museo").collection("users");


    } catch (error) {
      console.error("Error getting article:", error);
    } finally {
      await client.close();
    }
  }
  retrieveProfile();
});

/**
 * Create blank user profile in mongo for new user
 */
app.post("/profile/:user", (req, res) => {
  let user = req.params.user;
  console.log("Retrieving " + user + " profile");

  async function retrieveProfile(){
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection("users");
  
  
      } catch (error) {
        console.error("Error getting article:", error);
      } finally {
        await client.close();
      }
    }
    retrieveProfile();

});

/**
 * Update user profile info in mongo
 */
app.put("/profile/:user", (req, res) => {
  let user = req.params.user;
  console.log("Retrieving " + user + " profile");

  async function retrieveProfile(){
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection("users");
  
  
      } catch (error) {
        console.error("Error getting article:", error);
      } finally {
        await client.close();
      }
    }
    retrieveProfile();
    
});
