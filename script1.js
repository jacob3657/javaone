
// you are writing a program that is going to prompt
// the user for their first and last name and then
// pass those two values to a function, which will
// alert the user with the full name.

function registerUser(firstName, lastName) {

  // you can concatenate strings together using the "+" character.

  let message = "Thanks " + firstName + " " + lastName + "!";
  alert(message);
}


function funcForExercise1()
{
  // step 1: prompt the user for their first name (already done)
  // documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  let firstName = prompt("What is your first name?");
  let lasttName = prompt("What is your last name?");

  // step2: prompt the user to get their last name 
  // the prompt is provided, follow the example from step1 above
  "What is your last name?"

  // step 3: call the registerUser function above, passing in the 
  // firstName and lastName as arguments.
 registerUser(firstName, lastName);
}




