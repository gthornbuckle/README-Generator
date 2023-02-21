const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of the project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command is required to install this project?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the requirements to use this project?',
      },
      {
        type: 'list',
        message: 'Which license is this project covered under?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU General Public', 'MIT', 'Boost Software 1.0', 'Eclipse Public 2.0'],
        suffix: ' (Use arrow keys to choose an option)'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can a user contribute to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default: 'npm test'
      },
];

// function to write README file
function writeToFile(filename, markdown) {

    fs.writeFile(filename, markdown, (err) =>
      err ? console.log(err) : console.log('File created successfully.')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) =>{
        const filename = `${data.title}-README.md`;
        writeToFile(filename, generateMarkdown(data));
    });
}

// function call to initialize program
init();
