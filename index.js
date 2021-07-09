const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
var listOfTeamMembers = []

// false.writeFile('index.html', generatePage(), err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete!;')
// })
    
    // asks questions
    function managerInformation() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'managerName',
                message: 'what is the name of the manager?'
            },
            
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the manager ID number?'
            },
            
            {
                type: 'input', 
                name: 'managerEmail', 
                message: 'What is the manager email?' 
            },
            
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is the managers office number?'
            }
        ]).then(answers =>{
            console.log(answers);
            let newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            listOfTeamMembers.push(newManager)
            menu() 
        }) 
    }
    
    function internInformation() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'internName',
                message: 'what is the name of the intern?'
            },
            
            {
                type: 'input',
                name: 'internId',
                message: 'What is the intern ID number?'
            },
            
            {
                type: 'input', 
                name: 'internEmail', 
                message: 'What is the intern email?' 
            },
            
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the interns school?'
            }
        ]).then(answers =>{
            console.log(answers);
            let newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            menu()
        })
    }
    
    function engineerInformation() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'engineerName',
                message: 'what is the name of the engineer?'
            },
            
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the engineer ID number?'
            },
            
            {
                type: 'input', 
                name: 'engineerEmail', 
                message: 'What is the engineer email?' 
            },
            
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineers github?'
            }
        ]).then(answers =>{
            console.log(answers);
            let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            menu()
        })
    }
    
function menu() {
    inquirer.prompt({
        type: 'list',
        name: 'menuChoice',
        message: 'Who do you want to add?',
        choices: ['intern','engineer', 'none']
    }).then(menuAnswers => {
        if (menuAnswers.menuChoice === 'intern') {
            internInformation()
        } 

        else if (menuAnswers.menuChoice === 'engineer') {
            engineerInformation()
        } 

        else {
            console.log('done') 
            
        }
        
    });
}

managerInformation()
// generate managers, engineers
// create new file for that to generate functions

// 1. 
// Where do I add the push function? 
// I tried adding .push(listOfTeamMembers) after the 
// new Engineer function.

// 2.
// once user selects DONE, 
// HTML needs to generate. 
// I'm not asking how, but 
// WHERE do I add this function?