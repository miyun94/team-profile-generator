const fs = require('fs')
const inquirer = require('inquirer')
const Choice = require('inquirer/lib/objects/choice')
const { type } = require('os')
const generateHtml = require('./dist/generateHTML')


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
            name:'managedid',
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
    ])
}

//Asks if they want to add Engineer or Intenr 
function addEmployee(){
    inquirer.prompt([
        {type:'list',
        name:'addemployee',
        choices:["Add Engineer", "Add Intern", "Done: No more employees to add"]
    }
    ])
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
    ])
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
    ])
}




function init() {
    function addManager().then(function(data)){
        const generateHTML = 
        writeToFile()
    }
}

//use dom elements to append information to cards in html???
