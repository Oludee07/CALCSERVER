const express = require('express');
const router = express.Router();

const users = [] //simulates a database
//addition
router.post('/add', (req, res) =>{
  const {num1, num2} = req.body;
  let add =0;
  

  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    add= (num1 + num2);
  }
  
 res.status(201).json(add);
});

//subtraction
router.post('/subtract', (req, res) =>{
  const {num1, num2} = req.body;
  let subtract =0;
  

  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    subtract= (num1 - num2);
  }
  
 res.status(201).json(subtract);
});

//multiplication
router.post('/multiply', (req, res) =>{
  const {num1, num2} = req.body;
  let multiply =0;
  

  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    multiply= (num1 * num2);
  }
  
 res.status(201).json(multiply);
});

//Division
router.post('/divide', (req, res) =>{
  const {num1, num2} = req.body;
  let divide =0;
  

  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else if(num1===0 || num2===0) {
    res.status(400).json({message:' division by zero is not permitted'});
    return;
  }else{
    divide= (num1 / num2);
  }
  
 res.status(201).json(divide);
});





module.exports=router;
