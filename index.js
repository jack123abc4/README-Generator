// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input

// email, github
const questions = [
    // array of questions that will be used as inquirer prompts
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github?",
    },
    {
        type: "input",
        name: "title",
        message: "Project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your application.",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm install",
    },
    {
        type: "input",
        name: "usage",
        message: "What information does the user need in order to use this application?",
    },
    {
        type: "input",
        name: "credits",
        message: "Anyone else to credit?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What are your contribution guidelines?",
    },
    {
        type: "input",
        name: "testing",
        message: "What command should be input to run tests?",
        default: "node index.js"
    },
    {
        type: "list",
        name: "license",
        message: "Which license?",
        choices: [ // choices for licenses
            'Apache License (apache-2.0)',
            'GNU General Public License (gpl-3.0)',
            'GNU Lesser General Public License (lgpl-3.0)',
            'MIT License (MIT)',
            'Mozilla Public License (mpl-2.0)',
            'None',
        ]
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data, err) { // takes in prompt data and writes to README file
    console.log(fileName,data);
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Successfully written file to path ${fileName}`));
    return;
}

// TODO: Create a function to initialize app
function init() { // called when application starts
    inquirer
        .prompt(questions) // asks prompt questions in terminal
        .then((response) => { // calls write to file function on receiving data
            console.log("response: ", response);
            writeToFile("./README.md",generateMarkdown({...response}));
        });
}

// Function call to initialize app
init();
