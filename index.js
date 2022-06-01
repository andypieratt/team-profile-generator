//REQUIRED VARIABLES
const inquirer = require("inquirer");
const fs = require("fs");

//Inquirer
function managerPrompts() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNum",
    },
  ]);
}

function engineerPrompts() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is the employee's ID?",
      name: "engineerId",
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is the engineer's github username?",
      name: "github",
    },
  ]);
}

function internPrompts() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school",
    },
  ]);
}

function newMember() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "I am done adding team members"],
        name: "nextMember",
      },
    ])
    .then((response) => {
      if (response.nextMember === "Engineer") {
        engineerPrompts();
      } else if (response.nextMember === "Intern") {
        internPrompts();
      } else {
        generateFile();
      }
    });
}

function generateFile() {
  fs.writeFile("./dist/index.html", ``);
}
