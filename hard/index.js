const express = require('express');

const app = express();

const data = require('./public/employees.json');

app.get('/employees', (req, res) => {
    if (!data){
        res.status(404).send(`Couldnt find the employees`);
    }
    res.send(data);
});


app.get('/employees/:id', (req, res) => {
    const employeeData = data.employees.find( (employee) => {
        return parseInt(req.params.id) === employee.id
    });
    if (!employeeData) {
        res.status(404).send(`Couldn't find the employee id`)
    }
    res.send(employeeData);
});


app.listen(2020, () => {
    console.log('Server is runnig');
});