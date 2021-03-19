// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";
let licenseContent = ""


function renderLicenseBadge (data) {
  let badge = data.badge;
  // switch statement that will alter what licensBadge and licensContent values will be
  // depending on what the user chose in questions prompt
  switch (badge) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      
      licenseContent = 
      `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
      `;
      break;

    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

      licenseContent = 
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

      licenseContent = 
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

      licenseContent = 
      `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
      THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR 
      CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
      PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
      LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
      SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      `;

      break;
    case 'None':
      return

  }
   
  
}

let licenseLink = "";
let licenseTitle = "";

// ternary conditions if the parameter exists then add value to the
// licenseLink and licenseTitle variables in order to
// create them on the README, if needed.
function renderLicenseLink(license) {
  licenseLink = (license ? '- [License](#license)' : ""); 
  licenseTitle = (license ? `## License` : "");
}


const generateMarkdown = (data) => {
// calling renderLicenseLink and passing the licenseBadge data as an argument
renderLicenseLink(licenseBadge);

// similar ternary conditions to the renderLicenseLink function
let github = (data.github) ? `github.com/${data.github}` : "";
let email = (data.email) ? data.email : ""; 
let website = (data.website) ? data.website : "";

const title = data.title;
const description = data.description;
const installInst = data.installInst;
const installReq = data.installReq;
const usage = data.usage;
const test = data.test;

return `
${licenseBadge}
# ${title}


## Description

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

${licenseTitle}

${licenseContent}

&nbsp;

&nbsp;

## Tests
${test}

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

// exporting generateMarkdown and renderLicenseBadge functions
module.exports = {generateMarkdown, renderLicenseBadge};

