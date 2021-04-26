// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
'What is the title of this application? ', 
'What is the main objective of this application? ', 
'List steps for installing this application: ', 
'Write a brief description about how to use this application: ', 
'List contributors of this application (One at a time, enter "done" to finish listing): ', 
'Include tests for this application: ', 
'Which license is used for this application? ', 
'Enter your GitHub username: ', 
'Enter your email: ', 
'Instructions on how to contact: (If none, enter "none")'
];
// CREATED: Array for license choices
const licenses = ["Open", "Apache", "MIT", "Mozilla", "GNU", "ISC", "None"]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const contributors = []
const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors',
            validate: async (input) => {
                if (input !== 'done') {
                   return contributors.push(input);
                }
                return true;
             }
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'list',
            message: questions[6],
            choices: licenses,
            name: 'license',
            validate: async (input) => {
                if (input === 'none') {
                    return true;;
                }
                return input;
             }
        },
        {
            type: 'input',
            message: questions[7],
            name: 'username'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'instructions',
            validate: async (input) => {
                if (input !== 'none') {

                   return input;
                }
                return true;
             }
        }
    ])
    .then(response => {
        generateMarkdown(response, contributors);
    });
} 
// Function call to initialize app
init();
