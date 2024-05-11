import inquirer from "inquirer";
let Guess_Flag = true;
while (Guess_Flag) {
    console.log("You have 5 tries to guess a number with in set range. ");
    console.log("Guess on first Attempt scores   100 points");
    console.log("Guess on Second Attempt scores  80 points ");
    console.log("Guess on Third Attempt scores   60 points ");
    console.log("Guess on Fourth Attempt scores  40 points");
    console.log("Guess on Fifth Attempt scores   20 Points");
    console.log("Failed to Guess will result in  0 points");
    const Range = await inquirer.prompt([
        {
            type: "number",
            name: "min",
            message: "Number Guessing Game - Enter Lower limit of Range [ MIN : max ] : "
        },
        {
            type: "number",
            name: "max",
            message: "Number Guessing Game - Enter Higher limit of Range [ min: MAX ] : "
        }
    ]);
    function generateRandomNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let Comp_guess = generateRandomNumber(Range.min, Range.max);
    //console.log(`${a}`);
    let win = false;
    let score = 0;
    for (let i = 5; i > 0; i--) {
        //console.log(`${Comp_guess}`);
        //console.log(`${i}`);
        const Guess = await inquirer.prompt([
            {
                type: "number",
                name: "User",
                message: "Enter a Number to Guess  : "
            }
        ]);
        console.log(`${Guess.User}`);
        if (Guess.User > Range.max || Guess.User < Range.min) {
            console.log("Enter the Number between set range ");
        }
        if (Guess.User > Comp_guess) {
            console.log("you've Guessed higher number");
        }
        else if (Guess.User < Comp_guess) {
            console.log("you've Guessed Lower number");
        }
        else if (Guess.User == Comp_guess) {
            console.log("CONGRATULATIONS .. !! ");
            win = true;
            score = i * 20;
            break;
        }
    }
    if (win == true) {
        console.log(`[[[[[    you  have   scored   ${score}      ]]]]]]]]]`);
    }
    else if (win == false) {
        console.log(`you have failed to guess the number  ${Comp_guess}`);
    }
    const { Guess_Loop } = await inquirer.prompt([
        {
            type: "confirm",
            name: "Guess_Loop",
            message: "Continue further?",
            default: true
        }
    ]);
    Guess_Flag = Guess_Loop;
}
