const fs = require("fs");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

let answerStreams;

const answers = [];

function ask(i=0) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.once("data",data => {
    let name = data.toString().trim();
    let filename = `./${name}.md`;
    if(fs.existsSync(filename)) {
        fs.unlinkSync(filename);
    }
    answerStreams = fs.createWriteStream(filename);
    answerStreams.write(`Question answers for ${name} \n============\n`);
});
//ask();

process.stdin.on("data",function(data) {
    let answer = data.toString().trim();
    answerStreams.write(`Question: ${questions[answers.length]}\n`);
    answerStreams.write(`Answer: ${answer}\n`,() => {
        if(answers.length < questions.length) {
            ask(answers.length);
        } else {
            process.exit();
        }
    });
    answers.push(answer);
    //answers.push(data.toString().trim());
});

process.on("exit", function() {
    answerStreams.close();
    process.stdout.write("\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
});
