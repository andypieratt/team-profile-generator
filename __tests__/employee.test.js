const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName Function", () => {
    it("Should create an object with a 'name' property when called with the 'new' keyword", () => {
      //Arrange
      const empObj = new Employee("Andy");

      //Assert
      expect(empObj.getName()).toEqual(empObj.name);
    });
  });
  describe("getId Function", () => {
    it("Should create a new object called 'id'", () => {
      //Arrange
      const empObj = new Employee("Andy", 1, "pieratt.aw@gmail.com");

      //Assert
      expect(empObj.getId()).toEqual(empObj.id);
    });
  });

  describe("getEmail Function", () => {
    it("Should create a new object called 'email'", () => {
      //Arrange
      const empObj = new Employee("Andy", 1, "pieratt.aw@gmail.com");

      //Assert
      expect(empObj.getEmail()).toEqual(empObj.email);
    });
  });

  describe("getRole Function", () => {
    it("Should create a new role based on the employee type", () => {
      //Arrange
      const empObj = new Employee("Employee");

      //Assert
      expect(empObj.getRole()).toEqual("Employee");
    });
  });
});
