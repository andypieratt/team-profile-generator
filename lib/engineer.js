//REQUIRE VARIABLES
const inquirer = require("inquirer");
const Employee = require("./employee");

class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getEngName() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is this employee's name?",
        name: "engName",
      },
    ]);
  }
}
