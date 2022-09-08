// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = ["Project title?", "What is the purpose of this project?", "What are the installation requirements?", "How is the app used?", "License?", "Any other contributors?", "Testing?"];

const questionNames = ["title", "description", "installation", "usage", "license", "contributors", "testing"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    answers = [];
    
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: questionNames[0],
            },
            {
                type: "input",
                message: questions[1],
                name: questionNames[1],
            },
            {
                type: "input",
                message: questions[2],
                name: questionNames[2],
            },
            {
                type: "input",
                message: questions[3],
                name: questionNames[3],
            },
            {
                type: "input",
                message: questions[4],
                name: questionNames[4],
            },
            {
                type: "input",
                message: questions[5],
                name: questionNames[5],
            },
            {
                type: "input",
                message: questions[6],
                name: questionNames[6],
            },
        ])
        .then((response) => {
            console.log("response: ", response);
        }
            
        );
    console.log(answers);
}

// Function call to initialize app
init();
