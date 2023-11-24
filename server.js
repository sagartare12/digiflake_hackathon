const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
const {MongoClient} = require('mongodb');
const app=require('./app')


//middlewares
app.use(cors(
    // {
    //     origin:["https://mern-restaurant-app.vercel.app/"],
    //     methods:["POST","GET"],
    //     credentials:true
    // }
));
// app.use(express.json({limit:"10mb"}));




//database connection

const DB_URL=process.env.MONGODB_URL.replace('<password>',process.env.MONGODB_PASSWORD)
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(()=>console.log('Database connection successful'));
// async function main(){
//     const uri = "mongodb+srv://sagartare2014:<password>@cluster0.lznaela.mongodb.net/?retryWrites=true&w=majority";
//     const DB_URL=process.env.MONGODB_URL.replace('<password>',process.env.MONGODB_PASSWORD)

//     const client = new MongoClient(DB_URL);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect().then(()=>console.log("Database connected"));
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error);

//listing databases 
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

//PORt configuration








const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(err.name,err.message);
    console.log('Unhandle rejection , server getting down..!');
    // server.close(()=>{
    //     process.exit(1);
    // })
})

// app.get("/",(req,res)=>{
//     res.send("server is running")
// })
// app.post("/signup",(req,res)=>{
//     console.log(req.body);
// })