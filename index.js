// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { table } = require("console");

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your project",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description");
                    return false;
                }
            }
        },
        {
            type: "editor",
            name: "installation",
            message: "Please enter installation instructions, seperate each step with a '-'",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter usage instructions, seperate each step with a '-', if there are screenshots, provide the link/path to the image",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter usage instructions");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license",
            choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
            default: "None"
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter contributing instructions, seperate each step with a '-'",
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log("Please enter contributing instructions");
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "tests",
            message: "Please enter testing instructions, seperate each step with a '-'",
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please enter testing instructions");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username");
                    return false;
                }
            }
        }
     ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
promptQuestions().then(data => {
    const { title, description, installation, usage, license, contributing, tests, email, username } = data;
    console.log(installation);
});
