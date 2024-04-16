const events = require("events");
const fs = require("fs");

const emitter = new events.EventEmitter();

emitter.on("babatEvent", (message) => {
    console.log(message)
});

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