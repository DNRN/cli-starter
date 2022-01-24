import clear from "clear";
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";

clear();

console.log(
  chalk.yellow(
    figlet.textSync('DNRN', { horizontalLayout: 'full' })
  )
);

const PromptUser = async () => {
    const answers = await inquirer.prompt([
        {
            name: "input",
            type: "input",
            message: "Are you cool?",
            
        }
    ]);
    return {
        answers
    }
}

const start = async() => {
    const answers = await PromptUser();
    console.log('answers: ', answers);
}

start().then();

