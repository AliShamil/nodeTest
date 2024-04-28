const events = require("events");
const fs = require("fs");
//Lesson 1
// const emitter = new events.EventEmitter();

// emitter.on("babatEvent", (message) => {
//     console.log(message)
// });

//  emitter.emit("babatEvent","Babat things happened!");

// const readFile = fs.readFileSync('example.txt', "utf-8")
// console.log(readFile)

// fs.readFile('example.txt', "utf-8", (err, data) => {
//     console.log(data)
// })


// fs.writeFileSync('write.txt',"OMG!! Lana Rhoades ✋😌")


// fs.writeFile('write.txt', "OMG!! Lana Rhoades ✋😌", (err) => {
//    if(err){
//        console.log(err)
//        return;
//     }
// })





//Lesson 2
// const readStream = fs.createReadStream("arthurmorgan.jpeg")
// const writeStream = fs.createWriteStream("copyPic.jpeg")


// readStream.on("data",(chunk)=>{
//     console.log("-- NEW CHUNK --")
//     console.log(chunk)
//     writeStream.write(chunk)
// })

// readStream.pipe(writeStream)


// Lesson 3

// const http = require("http")
// const server = http.createServer((req,res)=>{
//     console.log("Request made to server")
//     res.setHeader("Content-Type","text/html")


//     fs.readFile("test.html",(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end();
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// })
// const PORT = 3000
// server.listen(PORT,"localhost",()=>{
//     console.log("listening on port 3000");
// })

//Lesson 4
const express = require("express")

// const app = express();
// app.get("/",(req,res)=>{
//     console.log("here");
//     // res.status(200).send("hi");
//     // res.status(500).json({message:"Server error happened!"});
//     // res.download("arthurmorgan.jpeg")
//     //res.sendFile(`${__dirname}/test.html`)
// })
// app.get("users/:id",(req,res)=>{
//     console.log(req.params.id);
// })
// app.post("/",(req,res)=>{
//     res.send("POST request received")
// })
// app.put("/",(req,res)=>{
//     res.send("PUT request received")
// })
// app.delete("/",(req,res)=>{
//     res.send("DELETE request received")
// })
// app.use((req,res)=>{
//     res.status(404).send("404 Not Found")
// })

//Lesson 5
const mongoose = require("mongoose")
const todoRoutes = require("./routes/todoRoutes")
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://elisamilzade:ali_samilzade@cluster0.ylky7ea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("Error connectong to MongoDB Atlas", err));
app.use("/todos",todoRoutes);

app.listen(3000, () => {
    console.log("Server running on 3000")
});

