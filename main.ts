#!/usr/bin/env node
import inquirer from "inquirer"

const MyCalulator = await inquirer.prompt([
    {
        type:'list',
        name:'operation',
        message:'what operation you want to perform?',
        choices:['add','subtract','multiply','division']
    },
    {
        
        type:'number',
        name:'num1',
        message:'enter your first number',
    },
    {
        type:'number',
        name:'num2',
        message:'enter your other number'
    }
])

if(MyCalulator.operation === 'add'){
   console.log(`the sum of your numbr is:${MyCalulator.num1 + MyCalulator.num2}`);
}else if(MyCalulator.operation === 'subtract'){
    console.log(`the subtract of your numbr is:${MyCalulator.num1 - MyCalulator.num2}`);
}else if(MyCalulator.operation === 'multiply'){
   console.log(`the multiply of your numbr is:${MyCalulator.num1 * MyCalulator.num2}`);
}else {
    console.log(`the division of your numbr is:${MyCalulator.num1 / MyCalulator.num2}`); 
}
console.log('the end');


