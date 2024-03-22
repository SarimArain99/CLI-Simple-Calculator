#! /usr/bin/env node
import inquirer from "inquirer";

const answer= await inquirer.prompt([
    {
        message :"Enter 1st number",
        type : "number",
        name : "firstNumber"
},
    {
    message : "Enter 2nd number",
    type : "number",
    name : "secondNumber"
},
    {
    message : "select the operator to Opertion",
    type : "list",
    name :"operators",
    choices:["Addition", "Subtraction", "Multiplication", "Division"],
}
]);
if(answer.operators==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operators==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operators==="Multiplication"){
    console.log( answer.firstNumber * answer.secondNumber);
}else if(answer.operators==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
};
