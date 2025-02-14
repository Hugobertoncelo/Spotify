import { MongoClient } from "mongodb";

const URI = "mongodb+srv://hugobertoncelo:<db_password>@cluster0.stppg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client =  new MongoClient(URI);

export const db = client.db("spotifyAuto");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
