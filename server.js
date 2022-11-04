// Setting up requirements
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up SQL connections
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'KingLeo1!',
      database: 'roster_db'
    },
    console.log(`Connected to the roster_db database.`)
  );
  


const mainmenu = () => 


// Employee Manager Main Menu
console.log('||EMPLOYEE MANAGER||')

inquirer
.prompt([
  {
    name: 'mainMenu',
    type: 'list',
    message: 'Choose an option.',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
  }
  // Choices to see all the employees roles and departments
]).then(choice => {
  if (choice.mainMenu === 'View All Employees') {
    db.query('SELECT * FROM employee', function (err, results) {
      console.log(results);
      mainmenu();
    });
  } else if (choice.mainMenu === 'View All Roles') {
    db.query('SELECT * FROM employeerole', function (err, results) {
      console.log(results);
      mainmenu();
    });
  } else if (choice.mainMenu === 'View All Departments') {
    db.query('SELECT * FROM department', function (err, results) {
      console.log(results);
      mainmenu();
    });
  } else if (choice.mainMenu === 'Add Employee') {
    inquirer.prompt([
      {
        name: 'addedEmployee',
        type: 'prompt',
        message: 'Please input the name of an employee here'
      },
      {
        name: 'addedEmployeeRole',
        type: 'choice'
      }
    ])
  }})

// Sequelize default behavior
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

mainmenu();
  