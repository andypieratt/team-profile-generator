//REQUIRED VARIABLES
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
      const manager = new Manager();
      newMember();
    });
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
        engineerPrompts(); //WHY ISN'T THIS WORKING???
      } else if (response.nextMember === "Intern") {
        internPrompts();
      } else {
        generateFile();
      }
    });
}

function generateFile() {
  fs.writeFile(
    "./dist/index.html",
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--CUSTOM BOOTSTRAP CSS-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
  <!--HEADER SECTION-->
  <header class="bg-danger p-3">
    <h1 class="text-center text-white m-3">My Team:</h1>
  </header>

  <!--CARD/CONTENT SECTION-->
  <section class="m-5">
    <div class="card border border-danger d-flex align-content-center flex-wrap" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">(EMPLOYEE TYPE PLACEHOLDER)</h5>
        <p class="card-text">
          (NAME PLACEHOLDER)
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">(ID PLACEHOLDER)</li>
        <li class="list-group-item">(EMAIL PLACEHOLDER)</li>
        <li class="list-group-item">(GITHUB/SCHOOL/OFFICE PLACEHOLDER)</li>
      </ul>
      <!-- <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div> -->
    </div>
  </section>

  <!--BOOTSTRAP JS IMPORT-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <!--CUSTOM JS-->
  <script src="/index.js"></script>
</body>
</html>`
  );
}

//CALLING FUNCTIONS
managerPrompts();
