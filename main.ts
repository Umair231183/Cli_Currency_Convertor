import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\tWelcome to 'CodingWithUmair' - Currency Convertor\n"))
 
// Define the list of currencies and their exchange rates
let exchangeRate: any = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency (Euro)
    "JYP": 113, // Japenes Currency (Yen)
    "CAD": 1.3, // Canadian Dollar 
    "AUD": 1.65, // Australian Dollar 
    "PKR": 277.97, // Pakistani Rupees
};

// Prompt the users to select currencies convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    }, 
    {
        name: "amout",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Consion Formula to convert currency
let fromAmount = exchangeRate[userAnswer.from_currency];
let toAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amout

// Formula of conversion
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// Display the Converted Amount
console.log(`Converted Amount = ${convertedAmount}`);

