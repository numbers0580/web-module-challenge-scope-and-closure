// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 calls the function 'counterMaker()' which has it's own locally-declared 'count' variable that it iterates
 *  counter2 simply iterates the global 'count' variable, but doesn't have access to the 'count' variable contained within counterMaker()
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 uses a closure because the variable being returned by the nested function is closed with that function's defined parent function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 -- the closure method -- would be preferable when you need to control which functions should have access to modify/redefine certain variables.
 *  counter2's method would be preferable when you need to allow greater access to modified variables across virtually all functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points = Math.floor(Math.random() * 3);

  return points;
}
console.log("Task 2: inning() function test below");
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, total) {
  let awayScore = 0;
  let homeScore = 0;
  for(let i = 0; i < total; i++) {
    awayScore += inning();
    homeScore += inning();
  }

  return "Home: " + homeScore + "\nAway: " + awayScore;
}
console.log("Task 3: finalScore() function test below");
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, total) {
  let awayScore = 0;
  let homeScore = 0;
  for(let i = 0; i < total; i++) {
    let inningName;
    if(i === 0) {
      inningName = "1st";
    } else if(i === 1) {
      inningName = "2nd";
    } else if(i === 2) {
      inningName = "3rd";
    } else {
      inningName = "" + (i + 1) + "th";
    }

    awayScore += inning();
    homeScore += inning();

    console.log(inningName + " inning: " + awayScore + " - " + homeScore + "\n");
  }
  return "\nFinal Score: " + awayScore + " - " + homeScore;
}
console.log("Task 4: scoreboard() function below");
console.log("Note, the instructions above doesn't look like how a baseball scoreboard appears, but created function based on instructions, regardless.");
console.log(scoreboard(inning, 9));

//Creating a new function to be similar to scoreboard() above, but also to address ties after 9 innings at Brit's suggestion
function scoreboard2(inning, total) {
  let awayScore = 0;
  let homeScore = 0;

  //I could not think of a way to do this using a for-loop, since this can potentially go to inning # 356 or further
  //So I'm using a while loop instead
  i = 0;

  while((i < total) || (awayScore == homeScore)) {
    let inningName = "";
    if(i / 10 >= 1) {
      inningName = "" + Math.floor(i / 10);
    }

    if(i % 10 === 0) {
      if((Math.floor(i / 10) !== 1) && (Math.floor(i / 10) !== 11)) {
        inningName += "1st";
      } else {
        inningName += "1th";
      }
    } else if(i % 10 === 1) {
      if((Math.floor(i / 10) !== 1) && (Math.floor(i / 10) !== 11)) {
        inningName += "2nd";
      } else {
        inningName += "2th";
      }
    } else if(i % 10 === 2) {
      if((Math.floor(i / 10) !== 1) && (Math.floor(i / 10) !== 11)) {
        inningName += "3rd";
      } else {
        inningName += "3th";
      }
    } else {
      inningName += "" + (i + 1) + "th";
    }

    awayScore += inning();
    homeScore += inning();

    console.log(inningName + " inning: " + awayScore + " - " + homeScore + "\n");

    i++;
  }
  return "\nFinal Score: " + awayScore + " - " + homeScore;
}
console.log("Task 4A: scoreboard2() function below");
console.log(scoreboard2(inning, 9));