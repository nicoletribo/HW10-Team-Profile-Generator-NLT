const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Can initiate Intern instance", () => {
        const newIntern = new Intern();
        expect(typeof(newIntern)).toBe("object");
    });

    it("set school via the constructor object", () => {
        const school = "Texas A&M University";
        const newIntern = new Intern("Greg", "3", "test@test.com", school);
        expect(newIntern.school).toBe(school);  
    });

    describe("getSchool", () => {
        it("get school from getSchool() method", () => {
            const school = "Texas A&M University";
            const newIntern = new Intern("Greg", "3", "test@test.com", school);
            expect(newIntern.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("getRole() method-- should return 'Intern'", () => {
            const newIntern = new Intern();
            expect(newIntern.getRole()).toBe("Intern");
        });
    }); 
});