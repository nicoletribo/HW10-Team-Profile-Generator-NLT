const inquirer = require("inquirer");
const fs = require('fs'); 

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];
let htmlAdd = '';

class TeamGenerator {
    constructor () {
    }
    init() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager\'s name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the team manager\'s employee Id number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the team manager\'s email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the team manager\'s office number?",
                name: "officeNumber",
            },
        ])
        .then ((response) => {
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
            teamMembers.push(newManager);
            this.selectNext();
        })
    }
    selectNext() {
        inquirer
        .prompt ([
            {
                type: "list",
                message: "Would you like to add another team member?",
                name: "addition",
                choices: [
                    "Add an Engineer",
                    "Add an Intern",
                    "Finish building my team",
                ],
            }
        ])
        .then ((response) => {
            if (response.addition === "Add an Engineer"){
                this.addEngineer();
            } else if (response.addition === "Add an Intern"){
                this.addIntern();
            } else {
                this.finished();
            }
        })
    }
    addEngineer() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer\'s name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineer\'s employee Id number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineer\'s email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineer\'s GitHub username?",
                name: "github",
            },
        ])
        .then ((response) => {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
            teamMembers.push(newEngineer);
            this.selectNext();
        })
    }
    
    addIntern() {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the intern\'s name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the intern\'s employee Id number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the intern\'s email address?",
                name: "email",
            },
            {
               type: "input",
               message: "What school does/ did the intern attend?",
               name: "school", 
            },
        ])
        .then((response) => {
            const newIntern = new Intern (response.name, response.id, response.email, response.school);
            teamMembers.push(newIntern);
            this.selectNext();
        })
    }
    finished() {
        //console.log(teamMembers);
        const manager = teamMembers.filter(function (teamMember) {
          return teamMember.getRole() === 'Manager'
        })
        const engineers = teamMembers.filter(function (teamMember) {
          return teamMember.getRole() === 'Engineer'
        })
        const interns = teamMembers.filter(function (teamMember) {
          return teamMember.getRole() === 'Intern';
        });
        this.appendManager(manager);
        this.appendEngineers(engineers);
        this.appendInterns(interns);
      }
      
      appendManager(manager) {
          manager.forEach(manager => {
              htmlAdd += `<div class="column is-one-quarter">
              <div class="card m-6">
                <header class="card-header  has-background-primary">
                  <p class="card-header-title has-text-white-bis">
                    ${manager.name}
                  </p>
                </header>
            
                <header class="card-header has-background-primary">
                  <p class="card-header-title has-text-white-bis">
                    <span class="icon-text">
                      <span class="icon">
                        <i class="fas fa-mug-hot"></i>
                      </span>
                    </span>
                    ${manager.getRole()}
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                      <li>ID: ${manager.id}</li>
                      <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                      <li>Office Number: ${manager.officeNumber}</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>`;
          });
      }
      
      appendEngineers(engineers) {
          engineers.forEach(engineer => {
            htmlAdd += `<div class="column is-one-quarter">
            <div class="card m-6">
              <header class="card-header  has-background-primary">
                <p class="card-header-title has-text-white-bis">
                  ${engineer.name}
                </p>
              </header>
          
              <header class="card-header has-background-primary">
                <p class="card-header-title has-text-white-bis">
                  <span class="icon-text">
                    <span class="icon">
                    <i class="fas fa-glasses"></i>
                    </span>
                  </span> 
                  ${engineer.getRole()}
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <ul>
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="${engineer.getGithub()}">${engineer.github}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            </div>`;
          });
      }
      appendInterns(interns) {
          interns.forEach(intern => {
            htmlAdd += `<div class="column is-one-quarter">
            <div class="card m-6">
              <header class="card-header  has-background-primary">
                <p class="card-header-title has-text-white-bis">
                  ${intern.name}
                </p>
              </header>
          
              <header class="card-header has-background-primary">
                <p class="card-header-title has-text-white-bis">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-user-graduate"></i>
                    </span>
                  </span> 
                  ${intern.getRole()}
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <ul>
                    <li>ID: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.getSchool()}</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>`;
            this.createHtml();
          });
      }
      createHtml () {
          const htmlTemplate = `<!DOCTYPE html>
          <html lang="en">
          
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <title>HW 10</title>
          </head>
          
          <body>
            <section class="hero is-link">
              <div class="hero-body has-text-centered">
                <p class="title  has-text-white-bis">
                  My Team
                </p>
              </div>
            </section>
            <section>
              <div class="container">
                <div class="columns is-multiline">
                  <!-- this is where the team members will be added -->
                  ${htmlAdd}
                </div>
              </div>
            </section>
            </div>
          </body>
          </html>`;
    fs.writeFileSync('teamProfile.html', htmlTemplate);
    };

}

const newTeamGenerator = new TeamGenerator;
newTeamGenerator.init();
