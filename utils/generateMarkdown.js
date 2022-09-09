// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") { // if no license
    return "";
  }
  let licenseSuffix = license.split(" "); // splits license name from user choice to insert into badge URL
  licenseSuffix = licenseSuffix[licenseSuffix.length-1];
  licenseSuffix = licenseSuffix.substring(1,licenseSuffix.length-1);
  licenseSuffix = licenseSuffix.split("-").join("--");
  return `![${license}](https://img.shields.io/badge/license-${licenseSuffix}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") { // if no license
    return "";
  } 
  let licenseSuffix = license.split(" "); // splits license name from user choice to insert into license URL
  licenseSuffix = licenseSuffix[licenseSuffix.length-1];
  licenseSuffix = licenseSuffix.substring(1,licenseSuffix.length-1);
  return `https://choosealicense.com/licenses/${licenseSuffix}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") { // if no license
    return "";
  }
  return `## License
  This license can be distributed under [${license}](${renderLicenseLink(license)})`; // returns license Markdown

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license); // calls license section function

  // uses string literals to insert user data into markdown string
   return `# ${data.title}
   
   ${renderLicenseBadge(data.license)}

   ## Description
   
   ${data.description}
   
   ## Table of Contents (Optional)
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [Contribute](#contribute)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
   
   ## Installation
   
   To install the correct dependencies please run:
   ~~~
   ${data.installation}
   ~~~
   
   ## Usage
   
   ${data.usage}
   
   ## Credits
   
   ${data.credits}
   
   ## Contribute
   
   ${data.contribute}
   
   ## Tests

   To install the correct dependencies please run:
   ~~~
   ${data.testing}
   ~~~

   ## Questions

   Check out my Github profile at: [${data.github}](https://github.com/${data.github})

   Feel free to reach out at: [${data.email}](${data.email})
   
   ${licenseSection}
  `;
}

module.exports = generateMarkdown;
