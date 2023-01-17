const fs = require("fs");

let stream = fs.createReadStream("./chat-logs/george-ben-chat.log","utf-8");

let data;
stream.once("data",chunk => {
    console.log("Read stream started.");
    console.log("=================");
    console.log(chunk);
});

stream.on("data",(chunk) => {
    console.log(`chunk: ${chunk.length}`);
    data += chunk;
});

stream.on("end",() => {
    console.log(`Finished ${data.length}`);
});
//we dont have to wati for hte entire file to rfinish loading
//before we start to read the data
//Eg: watchig a movie online
//movie parts are in chunks that are delivered as we watch

// fs.readFile("./chat-logs/george-ben-chat.log","utf-8",(err,chatLog) => {
//     console.log(`File read ${chatLog.length}`);
// });

console.log("reading the file...");
