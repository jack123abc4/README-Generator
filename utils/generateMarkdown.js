// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseSuffix = license.split(" ");
  licenseSuffix = licenseSuffix[licenseSuffix.length-1];
  licenseSuffix = licenseSuffix.substring(1,licenseSuffix.length-1);
  return `https://img.shields.io/badge/license-${licenseSuffix}-green`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseSuffix = license.split(" ");
  licenseSuffix = licenseSuffix[licenseSuffix.length-1];
  licenseSuffix = licenseSuffix.substring(1,licenseSuffix.length-1);
  return `https://choosealicense.com/licenses/${licenseSuffix}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  [${license}](${renderLicenseLink(license)})
  
  ![${license}](${renderLicenseBadge(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   return `# ${data.title}

// `;
  console.log("License",data.license);
  console.log(renderLicenseSection(data.license));
  return renderLicenseSection(data.license);
}

module.exports = generateMarkdown;
