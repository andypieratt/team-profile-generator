const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGithub Function", () => {
    it("Should create an object with a 'github' property when called with the 'new' keyword", () => {
      //Arrange
      const empObj = new Engineer(
        "Andy",
        1,
        "pieratt.aw@gmail.com",
        "andypieratt"
      );

      //Assert
      expect(empObj.getGithub()).toEqual(empObj.github);
    });
  });

  describe("getRole Function", () => {
    it("Should create a new role based on the employee type", () => {
      //Arrange
      const empObj = new Engineer("Engineer");

      //Assert
      expect(empObj.getRole()).toEqual("Engineer");
    });
  });
});
