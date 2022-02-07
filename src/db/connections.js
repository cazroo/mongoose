require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected`)
    } catch (error) {
        console.log(error)
    }
}
connection();


// const connection = async (crudFunc, movieObj) => {
//     try {
//         const client = new MongoClient(process.env.MONGO_URI);
//         await client.connect();
//         const db = client.db("MovieList");
//         const collection = db.collection("Movies");
//         await crudFunc(collection, movieObj);
//         client.close();
        
//     } catch(error) {
//         console.log(error)
//     }
// };

module.exports = connection;