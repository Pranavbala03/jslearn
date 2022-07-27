const massmark = 78;
const massjohn = 92;
const heightmark = 1.69;
const heightjohn = 1.95;

const BMImark = massmark / heightmark **2 ;
const BMIjohn = massjohn / heightjohn **2 ; 
const BMIhigher = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, BMIhigher); 

const statement = (` Mark\'s BMI is (${BMImark}) \n John\'s BMI of (${BMIjohn})`);
console.log(statement);

if(BMImark> BMIjohn) {
    console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})!`)
}else {
    console.log("John's BMI is higher than Mark's");
}
let n = '1'+ 1;
n = n - 1;
console.log(n);
////////////////////////////////////
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀 */

const Dolphinsscore = (96+108+89) /3;
const Koalasscore = (88+91+110)/3;
console.log(Dolphinsscore, Koalasscore);
 if (Dolphinsscore > Koalasscore) {
 console.log(`Dolphins who had a score of (${Dolphinsscore}) are the winner!`);
 } else if (Koalasscore > Dolphinsscore) {
    console.log(`Koalas who had a score of (${Koalasscore}) are the winner!`);
} else if(Koalasscore == Dolphinsscore) {
    console.log(`Both teams had a score of (${Koalasscore}) and it was a draw!`);
};

const newDolphinsscore = (97 +112 + 10) /3;
const newKoalasscore = (109+95+50)/3;
console.log(newDolphinsscore, newKoalasscore);
 if (newDolphinsscore > newKoalasscore && newDolphinsscore >= 100) {
 console.log(`Dolphins who had a score of (${newDolphinsscore}) are the winner!`);
 } else if (newKoalasscore > newDolphinsscore && newKoalasscore >= 100) {
    console.log(`Koalas who had a score of (${newKoalasscore}) are the winner!`);
} else if(Koalasscore == Dolphinsscore &&  newDolphinsscore >= 100 && newKoalasscore >= 100) {
    console.log(`Both teams had a score of and it was a draw!`);
}else if( newDolphinsscore < 100 && newKoalasscore < 100) {
    console.log(`Both teams were not eligible for championship`);
}

const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Print something');
        break;
    case 'Tuesday':
        console.log('Print something');
        break;
    case 'Wednesday':
        console.log('Print sfhdomething');
        break;
}
const age = 16;
 age >=18 ? console.log('you can go to parties') : console.log('you can not go to parties');

 const bill = 800
 const tip = bill <=300 && bill>=50 ? bill * 0.15 : bill *0.2;
 console.log(` the bill amount is ${bill} and the tip amount is ${tip}. So the subtotal is ${bill+tip}`);