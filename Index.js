const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


let allEmployees = []

//Create prompts for each employee
function addManager() {
    inquirer.prompt([
        {
            type:'input',
            name:'managername',
            message:'What is the name of the manager?'
        },
        {
            type:'input',
            name:'managerid',
            message:'What is the ID number of the manager?'
        }, 
        {
            type:'input',
            name:'manageremail',
            message:'What is the email address of the manager?'
        }, 
        {
            type:'input', 
            name:'officenumber',
            message:'What is the phone number of the office?'
        }
    ]).then(response => {
        let newManager = new Manager(response.managername, response.managerid, response.manageremail, response.officenumber)
        allEmployees.push(newManager)
        addEmployee()
    })
}

//Asks if they want to add Engineer or Intenr 
function addEmployee(){
    inquirer.prompt([
        {type:'list',
        name:'addemployee',
        message:'Do you want to add another employee?',
        choices:["Add Engineer", "Add Intern", "Done: No more employees to add"]
    }
    ]).then(response => {
        if(response.addemployee == "Add Engineer") {
            addEngineer(); 
        } else if(response.addemployee == "Add Intern") {
            addIntern(); 
        } else if (response.addemployee == "Done: No more employees to add") {
            HTML = generatePage(allEmployees); 
            writeToFile("./index.html", HTML);
            console.log('wrote to file')
            process.exit()
        }
    })
}

//Questions for Engineers 
function addEngineer(){
    inquirer.prompt([
        {
            type:'input',
            name:'engineername',
            message:'What is the name of the engineer?'
        },
        {
            type:'input',
            name:'engineerid',
            message:'What is the ID number of the engineer?'
        }, 
        {
            type:'input',
            name:'engineeremail',
            message:'What is the email address of the engineer?'
        }, 
        {
            type:'input', 
            name:'github',
            message:'What is the github username of the engineer?'
        }
    ]).then(response => {
        let newEngineer = new Engineer(response.engineername, response.engineerid, response.engineeremail, response.github)
        allEmployees.push(newEngineer)
        addEmployee()
    })
}


//Questions prompts for Intern 
function addIntern() {
    inquirer.prompt([
        {
            type:'input',
            name:'internname',
            message:'What is the name of the intern?'
        },
        {
            type:'input',
            name:'internid',
            message:'What is the ID number of the intern?'
        }, 
        {
            type:'input',
            name:'internemail',
            message:'What is the email address of the intern?'
        }, 
        {
            type:'input', 
            name:'school',
            message:'What is the name of the school the intern attends?'
        }
    ]).then(response => {
        let newIntern = new Intern(response.internname, response.internid, response.internemail, response.school)
        allEmployees.push(newIntern)
        addEmployee()
    })
}

function generatePage(allEmployees){
    HTML = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link rel="stylesheet" href="./dist/stylesheet.css">
      <title>Team Portfolio</title>
    </head>
  
    <body>
      <h1>The Team</h1>
      <main>
      <div class = "card-deck">
    `
    for(i = 0; i < allEmployees.length; i++){
        HTML += allEmployees[i].card
    }
    HTML += `
    </div>
    </main>
    </body>
    </html> 
    `;
    return HTML
};
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if(err) {
            console.log(err)
        } else {console.log('Wrote to file')}        
    })
}

console.log("Please add one manager")
addManager();