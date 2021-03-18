// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {


  // use let instead, create empty variables. if they exist, push into variables.
let github;

if (data.github) {
  github = "Github: " + data.github;
}else{
   github = "";
};

let email;

if (data.email) {
  email = "Email: " + data.email;
}else{
   email = "";
};

let website;

if (data.website) {
  website = "Website: " + data.website;
}else{
   website = "";
};




const title = data.title;
const description = data.description;
const installInst = data.installInst;
const installReq = data.installReq;

return `# ${title}

## Description
<!-- create line breaks -->
${description}


## Table of contents  

>- [Installation Requirements](#installation-requirements)  
>- [Install Instructions](#install-instructions)  
>- [Usage](#usage)  
>- [License](#license)  
>- [Contribute](#contribute)  
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
- __Install__ _sample document_
- __Enter__ _this phrase_ in the command line
- Enjoy the capabilities of this app!

&nbsp;

## License
<!-- displays badge near top of readme -->
Here is where your license details will be if applicable.

&nbsp;

## Contribute
You can contribute to the evelopment of the app here!  
${github}  
${email}  
${website}  
&nbsp;

## Tests
What tests have you done with this app?

&nbsp;

## Questions
This will display your Github profile and email address.
`
};

module.exports = generateMarkdown;
