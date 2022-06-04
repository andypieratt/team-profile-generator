const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool Function", () => {
    it("Should create an object with a 'school' property when called with the 'new' keyword", () => {
      //Arrange
      const empObj = new Intern(
        "Andy",
        1,
        "pieratt.aw@gmail.com",
        "Univeristy of Denver"
      );

      //Assert
      expect(empObj.getSchool()).toEqual(empObj.school);
    });
  });

  describe("getRole Function", () => {
    it("Should create a new role based on the employee type", () => {
      //Arrange
      const empObj = new Intern("Intern");

      //Assert
      expect(empObj.getRole()).toEqual("Intern");
    });
  });
});
