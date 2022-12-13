// import express from "express";
// console.log("gooo");
// let b = 5;

// function t() {
//   let a = 7;
//   let c = a + b;
//   b= a+d
//   console.log(a + c);
// }
// t();

// const arg = process.argv
// console.log(arg[3]);
import express from "express";
import data from './data/data.json'
const express = require("express");
const app = express();
const PORT = 7000;


app.get('/tasks', (req,res) =>{
    res.json(data.tasks)
})

 
app.post('/tasks',(req,res) =>{
    const task = {
        uuid: uuidv4(),
        name: req.body.name,
        done: false,
        UserId: "a6a18306-2c6b-4597-899c-936ec8277662",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    ;
    parsedData.tasks.push(task)
    const stringData = JSON.stringify(parsedData, null, 4);
	fs.writeFileSync(`${__dirname}/data/data.json`, stringData)
    res.json(parsedData.tasks)

 })
 app.delete('/tasks/:id' ,(req,res) =>{
    console.log(req.params);
    const id = req.params.id
    console.log(id);
    const task = parsedData.tasks.splice(id,1)
    const stringData = JSON.stringify(parsedData, null, 4);
    fs.writeFileSync(`${__dirname}/data/data.json`, stringData)
    res.json(task)
 })
 
 app.patch('/tasks/:id', (req,res) => {
    console.log(req.body);
    console.log(req.params.id);
    const id = req.params.id
    const body = req.body
    const task = parsedData.tasks.find((item) => item.uuid === id)
    console.log(task);
    task.done =body.done
    task.name = body.name
    task.updatedAt = new Date()
    const stringData = JSON.stringify(parsedData, null, 4);
    fs.writeFileSync(`${__dirname}/data/data.json`, stringData)
    res.json(task)
 })

 app.listen(PORT, () => console.log(`server start on Port ${PORT}...`))