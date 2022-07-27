'use strict'; 
function logger(){
    console.log("Print a message")
}
logger();

function fruitprocessor(apples, oranges){
    console.log(apples, oranges)
    const juice = (`I have ${apples} apples and ${oranges} oranges`);
    return juice

}

const applejuice = fruitprocessor(10, 20);
console.log(applejuice);

function calcage(birthyear){
    const age = 2020 - birthyear;
    return age;

}
const age1 = calcage(1990);
console.log(age1);

const age2 = function(birthyear){
    const age = 2020 - birthyear
    return age;

}
console.log(age2(1990));

const yourretirement = (birthyear, firstname) => {
    const age3 = 2020 - birthyear;
    const retirement = 65 - age3;
    return `${firstname} is going to retire in ${retirement} years`;
}
console.log(yourretirement(1960, 'Alicia'))

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const average = (a,b,c) => (a+b+c)/3; 

const dolphinsaverage1 = average(44,23,71);
const koalasaverage1 = average(65,54,49);
const dolphinsaverage2 = average(85,54,41);
const koalasaverage2 = average(23,34,27);
console.log(dolphinsaverage1, koalasaverage1);

const checkwinner = (Dolphinsaverage3, Koalasaverage3) => {
    if (Dolphinsaverage3 == Koalasaverage3*2){
    console.log(` the winner is the dolphins who had a score of ${Dolphinsaverage3}`)
    }
    else if (Koalasaverage3 == Dolphinsaverage3*2){
    console.log(` the winner is the dolphins who had a acore of ${Koalasaverage3}`)
    }
    else {
        console.log(" no one won the competition")
    }
}
console.log(checkwinner(dolphinsaverage1, koalasaverage1))

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const tip = function(amount) {
 return amount>= 50 && amount <= 300 ? amount * 0.15 : amount * 0.20 ;
}

const data = [ 125, 555, 44 ]
const subtotal = [data[0] + tip(data[0]), data[1] + tip(data[1]), data[2]+ tip(data[2])] ;
console.log("Total bill for all the orders are \n " );
console.log("order 1 " + data[0], tip(data[0]), subtotal[0] ) ;
console.log("Order 2 " + data[1], tip(data[1]), subtotal[1]) ;
console.log("Order 3 " + data[2], tip(data[2]), subtotal[2]);

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const person1 = {
    fullname: "Mark Miller",
   height: 1.69 ,
   weight: 78,

 calcBMI: function() {
    this.BMI = this.weight/ this.height **2 
    return this.BMI

 }


};
const person2 =  {
    fullname: "John Smith",
   height: 1.95 ,
   weight: 92,
   calcBMI: function() {
    this.BMI = this.weight/ this.height **2 
    return this.BMI
 }
};
const markbmi = person1.calcBMI();
const johnbmi = person2.calcBMI();

const markdata = (`${person1.fullname} weighs ${person1.weight} and has a height of ${person1.height}. Hence has a BMI of ${markbmi}`);
const johndata = (`${person2.fullname} weighs ${person2.weight} and has a height of ${person2.height}. Hence has a BMI of ${johnbmi}`);

if (markbmi > johnbmi){
    console.log(markdata + "\n Mark's BMI is higher than john's BMI")

} else if (johnbmi > markbmi) {
    console.log(johndata =" \n John's BMI is higher than mark's BMI")
} else {
    console.log("both of them have the same BMI")
};

 for(let rep = 1; rep<=10; rep++){
    console.log("Let the repetitions be from " + rep)
 }
 for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`exercise ${exercise}`)
 
 for(let reps = 1 ; reps <= 6 ; reps++){
    console.log(`weights lifting ${reps}`)
 }
 }
/*
 let dice = Math.trunc(Math.random() * 6) + 1;

 while (dice !== 6) {
   console.log(`You rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;
   if (dice === 6) console.log('Loop is about to end...');
 }


/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));



  

