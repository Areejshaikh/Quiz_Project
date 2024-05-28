#! /usr/bin/env node
import inquirer from "inquirer";
let question = await inquirer.prompt([
    {
        name: "question1",
        message: "Q1. What is TypeScript primarily used for?",
        type: "list",
        choices: [
            "A. Memory Management",
            "B. Dynamic Typing",
            "C. Static Typing",
            "D. Asynchronous operations",
        ],
    },
    {
        name: "question2",
        message: "Q2. Which of the following is NOT a valid TypeScript data type?",
        type: "list",
        choices: ["A. void", "B. any", "C. dynamic", "D. tuple"],
    },
    {
        name: "question3",
        message: "Q3. How do you denote a variable as readonly in TypeScript?",
        type: "list",
        choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
    },
    {
        name: "question4",
        message: "Q4. How do you specify that a function does not return anything in TypeScript?",
        type: "list",
        choices: ["A. function myFunc(): undefined", "B. function myFunc(): void",
            "C. function myFunc(): null", "D. function myFunc(): None",
        ],
    },
    {
        name: "question5",
        message: "Q5. How do you define a custom type in TypeScript?",
        type: "list",
        choices: ["A. interface", "B. typedef", "C. type", "D. Both A and C"],
    },
]);
let score = 0;
switch (question.question1) {
    case "C. Static Typing":
        console.log("1:Correct!");
        ++score;
        break;
    default:
        console.log("1:InCorrect!");
        break;
}
switch (question.question2) {
    case "C. dynamic":
        console.log("2:Correct!");
        ++score;
        break;
    default:
        console.log("2:InCorrect!");
        break;
}
switch (question.question3) {
    case "C. readonly":
        console.log("3:Correct!");
        ++score;
        break;
    default:
        console.log("3:InCorrect!");
        break;
}
switch (question.question4) {
    case "B. function myFunc(): void":
        console.log("4:Correct!");
        ++score;
        break;
    default:
        console.log("4:InCorrect!");
        break;
}
switch (question.question5) {
    case "D. Both A and C":
        console.log("5:Correct!");
        ++score;
        break;
    default:
        console.log("5:InCorrect!");
        break;
}
console.log(`Score: ${score}`);
console.log("*****************************");
