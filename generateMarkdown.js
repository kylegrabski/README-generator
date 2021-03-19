// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";
function renderLicenseBadge (data) {
  let badge = data.badge;
  switch (badge) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD 3':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'None':
      return

  }
   
  
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";
function renderLicenseLink(license) {
  return licenseLink = (license ? '- [License](#license)' : "");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
renderLicenseLink(licenseBadge);

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

- [Installation Requirements](#installation-requirements)  
- [Install Instructions](#install-instructions)  
- [Usage](#usage)  
${licenseLink}    
- [Tests](#tests)  
- [Questions](#questions)   

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

module.exports = {generateMarkdown, renderLicenseBadge};

