const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getOfficeNum Function", () => {
    it("Should create an object with a 'officeNum' property when called with the 'new' keyword", () => {
      //Arrange
      const empObj = new Manager("Andy", 1, "pieratt.aw@gmail.com", 1);

      //Assert
      expect(empObj.getOfficeNum()).toEqual(empObj.officeNum);
    });
  });

  describe("getRole Function", () => {
    it("Should create a new role based on the employee type", () => {
      //Arrange
      const empObj = new Manager("Manager");

      //Assert
      expect(empObj.getRole()).toEqual("Manager");
    });
  });
});
