const Employee = require("../lib/Employee");


describe("Employee", () => {
    it("Can initiate Employee instance", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });
    
    it("set name via the constructor object", () => {
        const name = "Henry";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    });
    
    it("set id via constructor argument", () => {
        const id = "10";
        const newEmployee = new Employee("Henry", id);
        expect(newEmployee.id).toBe(id);
    });

    it("set email via constructor argument", () => {
        const email = "test@test.com";
        const newEmployee = new Employee("Henry", "10", email);
        expect(newEmployee.email).toBe(email);
    });

    describe("getName", () => {
        it("get name from getName() method", () => {
            const name = "Henry";
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("get Id from getId() method", () => {
            const id = "10";
            const newEmployee = new Employee("Henry", id);
            expect(newEmployee.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("get email from getEmail() method", () => {
            const email = "test@test.com";
            const newEmployee = new Employee("Henry", "10", email);
            expect(newEmployee.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("get role from getRole() method-- should return 'Employee'", () => {
            const role = "Employee";
            const newEmployee = new Employee("Henry", "10", "test@test.com");
            expect(newEmployee.getRole()).toBe(role);
        });
    });    
});