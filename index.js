//REQUIRED VARIABLES
const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateCards = require("./src/template");

const teamArr = [];

//Inquirer
function managerPrompts() {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNum
      );
      teamArr.push(manager);
      newMember();
    });
}

function engineerPrompts() {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.endineerId,
        response.engineerEmail,
        response.github
      );
      teamArr.push(engineer);
      newMember();
    });
}

function internPrompts() {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.school
      );
      teamArr.push(intern);
      newMember();
    });
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
        engineerPrompts(); //WHY ISN'T THIS WORKING???
      } else if (response.nextMember === "Intern") {
        internPrompts();
      } else {
        generateFile();
      }
    });
}

function generateFile() {
  generateCards(teamArr);
  fs.writeFile("./dist/index.html");
}

//CALLING FUNCTIONS
managerPrompts();
