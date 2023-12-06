// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project and why you built it.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any dependencies for your project? If so, how can a user install them?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your application.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select which License you are using with this project.',
        choices: ['None', 'MIT', 'Apache 2.0', 'GNU 2.0', 'BSD 2', 'BSD 3', 'Boost', 'Creative Commons', 'Eclpise 2.0']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who else contributed to your project? Did you seek help from anyone?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include any tests or examples of what a user could run with your application.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('examplereadme.md', generateMarkdown(data), (err) => {
        console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses)
        writeToFile(responses)
    })
}

// Function call to initialize app
init();
