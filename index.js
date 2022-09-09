// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
// const questions = ["Project title?", "What is the purpose of this project?", "What are the installation requirements?", "How is the app used?", "License?", "Any other contributors?", "Testing?"];

// email, github
const questions = [
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
        choices: [
            'Apache License (apache-2.0)',
            'GNU General Public License (gpl-3.0)',
            'GNU Lesser General Public License (lgpl-3.0)',
            'MIT License (MIT)',
            'Mozilla Public License (mpl-2.0)',
            'None',
            // 'Apache License 2.0',
            // 'BSD 3-Clause "New" or "Revised" license',
            // 'BSD 2-Clause "Simplified" or "FreeBSD" license',
            // 'GNU General Public License (GPL)',
            // 'GNU Library or "Lesser" General Public License (LGPL)',
            // 'MIT license',
            // 'Mozilla Public License 2.0',
            // 'Common Development and Distribution License',
            // 'Eclipse Public License version 2.0',
            // 'None required',
        ]
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
    console.log(fileName,data);
    //return fs.writeFile(path.join(process.cwd(), fileName), data);
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Successfully written file to path ${fileName}`));
    return;
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("response: ", response);
            writeToFile("./README.md",generateMarkdown({...response}));
        });
}

// Function call to initialize app
init();
