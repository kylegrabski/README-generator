// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge  (data) {
  let badge = data.badge;
  if (badge === "MIT") {
    return licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}
let licenseBadge;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

let github = (data.github) ? `github.com/${data.github}` : "";
let email = (data.email) ? data.email : ""; 
let website = (data.website) ? data.website : "";

const title = data.title;
const description = data.description;
const installInst = data.installInst;
const installReq = data.installReq;
const usage = data.usage;

return `# ${title}

${licenseBadge}

## Description
<!-- create line breaks -->
${description}


## Table of contents  

>- [Installation Requirements](#installation-requirements)  
>- [Install Instructions](#install-instructions)  
>- [Usage](#usage)  
>- [License](#license)    
>- [Tests](#tests)  
>- [Questions](#questions)   

&nbsp;

## Installation Requirements 

${installReq}

&nbsp;

## Install Instructions 
${installInst}

&nbsp;

## Usage

${usage}

&nbsp;

## License
<!-- displays badge near top of readme -->
Here is where your license details will be if applicable.

&nbsp;

&nbsp;

## Tests
What tests have you done with this app?

&nbsp;

## Questions
Any questions on the app?   
Would you like to contribute to making it be the best it can be?  
Reach out to me HERE:  
  
${github}  
  
${email}  
  
${website}   
`
};

module.exports = generateMarkdown;
