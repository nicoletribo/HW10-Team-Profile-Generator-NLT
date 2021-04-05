const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Can initiate Manager instance", () => {
        const newManager = new Manager();
        expect(typeof(newManager)).toBe("object");
    });

    it("set office number via the constructor object", () => {
        const officeNumber = "15";
        const newManager = new Manager("Susan", "5", "test@test.com", officeNumber);
        expect(newManager.officeNumber).toBe(officeNumber);  
    });

    describe("getRole", () => {
        it("getRole() method-- should return 'Manager'", () => {
            const newManager = new Manager();
            expect(newManager.getRole()).toBe("Manager");
        });
    }); 
});