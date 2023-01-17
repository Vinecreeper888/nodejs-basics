const fs = require("fs");

fs.readdirSync("./accounts").forEach(file => {
    fs.renameSync(`./accounts/${file}`,`./library/${file}`);
});

// console.log("Files removed.");
// fs.rmdirSync("./accounts");
// console.log("Folder removed.");

//RENAME FILES
//fs.renameSync("")
//fs.unlinkSync("./project-config.js");
// fs.unlink("notes.md",(err) => {
//     if(err) throw err;
//     console.log("Notes are gone");
// })
// fs.renameSync("./config.js","./project-config.js");
// console.log("Config.js file has been renamed.");

// fs.rename("./lib/notes.md","./notes.md",(err) => {
//     if(err) {
//         throw err;
//     } 
//     console.log("rename has been successful!");
// })

//CREATE DIRECTORY
// if(fs.existsSync("your-file-here")) {
//     console.log("already there!");
// } else {
//     fs.mkdir("your-file-here",(err) => {
//         if(err) {
//             console.log(`ERROR: ${err}`)
//         } else {
//             console.log("directory created");
//         }
//     });
// }


//WRITE AND APPEND
// let md = `
// This is a New File
// ==================

// ES6 Template Strings are cool. They honor whitespace.

// * Template Strings
// * Node File System
// * ReadLine CLIs
// `;

// fs.writeFile("javascript.md",md.trim(),(err) => {
//     if(err) {
//         throw err;
//     }
//     fs.appendFileSync("javascript.md","\n\n### Node.js everyone!")
//     console.log("Markdown created");
// })

//READ DATA
// fs.readFile("./data.md","utf-8",(err,ipsum) => {
//     console.log(ipsum);
// });
// console.log("reading the file...");

// fs.readdir("./", (err,files) => {
//     if(err) {
//         throw err;
//     }
//     console.log(files);
// });

// console.log("Reading files...");

//console.log(files);

//readdirSync
//read the contents synchronously with the blocking req
//meaning that i am blocking the rest of the process 
//until the file is read