// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";
let licenseLink = "";
function renderLicenseBadge (data) {
  let badge = data.badge;
  switch (badge) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      
      licenseLink = 
      `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `;
      break;

    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

      licenseLink = 
      `Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      `;
      break;

    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

      licenseLink = 
      `This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.
      `;

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

function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseContent = ""
function renderLicenseSection(license) {
}

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

