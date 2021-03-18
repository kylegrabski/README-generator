// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your app?",
        name: "title",
      },{
          type: "confirm",
          message: "Required installation npm's?",
          name: "confirmInstall"
      },
      {
        type: "input",
        message: "List all that needs to be done for installation.",
        name: "install",
        when: function (answer) {
            return answer.confirmInstall;
        }
      },
      {
        type: "input",
        message: "Type a short description of your app",
        name: "description",
      }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

