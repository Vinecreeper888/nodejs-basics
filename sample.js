const path = require("path");

//console.log("JS"); 
//global.console.log("hello world");
let hello = "Hello world from Node.js";;
//why did this happen?
//global object like the window obkect ot should log properly
//but here the variable are scoped to this file or module
//Therefore, every new file will vreate a new scope for the variables
//inside them

//Nodejs works with chrome as it is built on v8 engine
// let justNode = hello.slice(17);
// console.log(justNode);

//console.log(__dirname);
//console.log(`The file name is ${path.basename(__filename)}`);

//commonJS module pattern is like this: refer the dirnmae and filenmae outputs
//anytime we need to do any parsing of path values, we can use these functions

//MORE ABOUT THE GLOBAL OBJECT
// for(let key in global) {
//     console.log(key);
// }

//console.log(process.argv);

// function grab(flag) {
//     let indexAferFlag = process.argv.indexOf(flag)+1;
//     return process.argv[indexAferFlag];
// }

// let greeting = grab("--greeting");
// let user = grab("--user");

// console.log(greeting);
// console.log(user);

//PROCESS OBJECT
//env info
//read env var
//communication with variables
//exit from current process

//std input and std output -> feature of process object

//process.stdout.write("Hello  \n \n");

// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language?"
// ];

// const answers = [];

// function ask(i=0) {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// }

// ask();

// process.stdin.on("data",function(data) {
//     answers.push(data.toString().trim());
//     if(answers.length < questions.length) {
//         ask(answers.length);
//     } else {
//         process.exit();
//     }
// });

// process.on("exit", function() {
//     process.stdout.write("\n\n\n");
//     process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
// });



const waitTime = 3000;
//console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

//setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}`);
    //console.log(`waiting ${currentTime/1000} seconds`);
};

//const interval = setInterval(incrementTime,waitInterval);














