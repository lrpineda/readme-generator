// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { table } = require("console");
const { rejects } = require("assert");
const { resolve } = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

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
            type: "confirm",
            name: "confirmTable",
            message: "Would you like to include a table of contents?",
            default: true
        },
        {
            type: "input",
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
            type: "confirm",
            name: "confirmcredits",
            message: "Would you like to add a credit section?",
            default: true

        },
        {
            type: "input",
            name: "credits",
            message: "Please enter the name of the contributor, seperate each contributor with a '-'",
            when: ({ confirmcredits }) => confirmcredits,
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the contributor/s");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license",
            choices: ["MIT", "Apache", "GPL", "BSD-3-Clause", "None"],
            default: "None"
        },
        {
            type: "confirm",
            name: "confirmOptionals",
            message: "Would you like to add optional sections? (e.g. Features, How to Contribute, Tests)",
            default: false
        },
        {
            type: "input",
            name: "features",
            message: "If your project has a lot of features, list them here. Separate each feature with a '-'",
            when: ({ confirmOptionals }) => confirmOptionals,
            validate: featuresInput => {
                if (featuresInput) {
                    return true;
                } else {
                    console.log("Please list the features");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter contributing instructions, seperate steps with a '-'",
            when: ({ confirmOptionals }) => confirmOptionals,
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
            when: ({ confirmOptionals }) => confirmOptionals,
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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve({
                ok: true,
                message: "Successfully created the file"
            });
        });
    })

};

// TODO: Create a function to initialize app
promptQuestions().then(readMedata => {
    return generateMarkdown(readMedata);
})
    .then(markup => {
        return writeFile(markup);
    })
    .then(result => {
        console.log(result.message);
    })
    .catch(err => {
        console.log(err);
    });
    