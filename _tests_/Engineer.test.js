const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can initiate Engineer instance", () => {
        const newEngineer = new Engineer();
        expect(typeof(newEngineer)).toBe("object");
    });

    it("set github via the constructor object", () => {
        const github = "CodePro";
        const newEngineer = new Engineer("Billy", "12", "test@test.com", github);
        expect(newEngineer.github).toBe(github);  
    });

    describe("getGithub", () => {
        it("get github from getGithub() method", () => {
            const github = "CodePro";
            const newEngineer = new Engineer("Billy", "12", "test@test.com", github);
            expect(newEngineer.getGithub()).toBe(`https://github.com/${github}`);
        });
    });

    describe("getRole", () => {
        it("get role from getRole() method-- should return 'Engineer'", () => {
            const newEngineer = new Engineer();
            expect(newEngineer.getRole()).toBe("Engineer");
        });
    }); 
});