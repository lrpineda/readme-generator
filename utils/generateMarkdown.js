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
module.exports = generateMarkdown => {
  const { title, description, installation, usage, contribution, test, email, username } = generateMarkdown;

  return `
  # ${title}
  ## Description
  ${description}
  
  `;
};