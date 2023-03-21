const inquirer = require("inquirer")

inquirer.prompt ([
{
    type: 'List',
    name: 'reptile',
    message: 'Whichis better?',
    choice: ['alligator', 'crocodile'],
}])
