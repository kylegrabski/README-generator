const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown").generateMarkdown
const renderLicenseBadge = require("./generateMarkdown").renderLicenseBadge

const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your app?",
      name: "title",
    },
    {
      type: "input",
      message: "Type a short description of your app",
      name: "description",
    },
    {
      // CHANGE THIS TO BE ABLE TO WRITE A LIST
      type: "input",
      message: "What are the installation instructions?",
      name: "installInst",
    },
    {
      type: "confirm",
      message: "Required installation npm's?",
      name: "confirmInstall",
    },
    {
      type: "input",
      message: "What is required for installation of your app?",
      name: "installReq",
      when: function (answer) {
        return answer.confirmInstall;
      },
    },
    {
      type: "input",
      message: "Write instructions and examples for your apps use: ",
      name: "usage",
    },
    {
      type: "list",
      message: "Select the license you have: ",
      name: "badge",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "confirm",
      message: "Share your github?",
      name: "shareGithub",
    },
    {
      type: "input",
      message: "Github Profile: ",
      name: "github",
      when: function (answer) {
        return answer.shareGithub;
      },
    },
    {
      type: "confirm",
      message: "Share your Email?",
      name: "shareEmail",
    },
    {
      type: "input",
      message: "Email: ",
      name: "email",
      when: function (answer) {
        return answer.shareEmail;
      },
    },
    {
      type: "confirm",
      message: "Share your Website?",
      name: "shareWebsite",
    },
    {
      type: "input",
      message: "Website: ",
      name: "website",
      when: function (answer) {
        return answer.shareWebsite;
      },
    },
  ])

  .then((data) => {
    renderLicenseBadge(data);
    writeToFile("README2.md", generateMarkdown(data));
  });



//  create README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("...NEW README.md FILE CREATED");
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
