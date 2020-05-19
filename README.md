# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork repo and add TL as collaborator on Github
2. Clone _your_ fork (not Lambda's repo by mistake!)
3. `cd` into your newly cloned repository
4. Create a new branch by typing `git checkout -b <firstName-lastName>`
5. Work on your branch, push commits and create PR as usual

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).
2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    // FYI: The above line of code doesn't generate 1 - 6, but rather 0 - 5. Math.ceil() could still return 0 - 6, so best option is Math.floor(Math.random() * 6 + 1) to get 1-6
    console.log(`${name} rolled a ${newRoll}`); // <-- There was a missing ';'
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?
  In this case, 'personalDice()' effectively creates a local variable called 'name' and assigns it a value -- the passed argument, but it doesn't get used until the console.log
  contained within the nested child function created within 'personalDice()'
b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
  The thing that's the same is the function called 'personalDice("Dan")'. The thing that could change is the actual returned result from that function, since it uses a randomizer.
c. What is the lexical scope of `newRoll`? 
  Since 'newRoll' is declared inside the innermost nested function, if needed it can access variables in it's parent, grandparent, etc. This includes the Math objects it uses,
  and 'name' that is effectively declared within its parent 'personalDice()'.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
From what I've learned, 'a' would be the only one listed as 'var' and 'b' would not be assigned 'var, let, or const' but it would be equal to 3.
This would make b = 3, but 'a' would still be undefined.

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(starterValue) {
  return function(addedValue) {
    return addedValue + starterValue;
  }
}
```


3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
Okay, after researching both for a while, I can admit that before today, I viewed Functional Programming as Object-Oriented Programming since both do look similar in how
functions/methods handle operations on variables and returns values, as well as how variables behave. Now, I see many different takes on the definitions of Functional Programming
and Object-Oriented Programming, but I haven't been able to make sense of the purported differences, yet.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your Team Lead as a reviewer on the pull request
- [ ] Your Team Lead will count the project as complete by merging the branch back into master
