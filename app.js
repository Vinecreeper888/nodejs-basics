const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent",(message,user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","That's pretty cool","Eve");

process.stdin.on("data",(data) => {
    const input = data.toString().trim();
    if(input === "exit") {
        emitter.emit("customEvent","Goodbye!","process");
        process.exit();
    }
    emitter.emit(
        "customEvent",
        data.toString().trim(),
        "terminal"
    );
});

//eventEmitter is a owerful tool to decouple logic and handle 
//asynchronousity





// const {inc,dec,getCount} = require("./modules");

// inc();
// inc();
// inc();

// console.log(`The count is ${getCount()}`);