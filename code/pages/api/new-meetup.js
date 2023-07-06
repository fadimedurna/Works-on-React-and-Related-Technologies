import { MongoClient } from "mongodb";
require("dotenv").config();
//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const uri = process.env.MONGODB_URI;
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection("all-meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
