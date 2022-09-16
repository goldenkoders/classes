const salary = 2850000;
/**
 * Billing - (minus salary)
 * 1. How much in naira? 
 * School fees - 10% 
 * Wife - 30% 
 * Mother - 15%
 * Personal - 20%
 * 
 * Another income stream (plus salary)
 * Income streams - 45%
 * @param percentage
 * @param amount
 * @returns {number}
 */


// LIABILITIES 
let schoolFeesPercentage = 10;
let schoolFeesAmount;
let wifePercentage = 30;
let wifeAmount;
let motherPercentage = 15;
let motherAmount;
let personalPercentage = 20;
let personalAmount;

// ASSETS
let incomeStreamsPercentage = 45;
let incomeStreamsAmount;

const calculateBilling = (percentage, amount) => {
	return amount * (percentage/100)
}

schoolFeesAmount = calculateBilling(schoolFeesPercentage, salary)
wifeAmount = calculateBilling(wifePercentage, salary)
motherAmount = calculateBilling(motherPercentage, salary)
personalAmount = calculateBilling(personalPercentage, salary)
incomeStreamsAmount = calculateBilling(incomeStreamsPercentage, salary)

let totalDebitAmount = schoolFeesAmount + wifeAmount + motherAmount + personalAmount;

// console.log('Total Debit Amount', totalDebitAmount.toLocaleString());
// console.log('Income Stream Amount', incomeStreamsAmount.toLocaleString());
// BODMAS
let amountLeft = salary - totalDebitAmount + incomeStreamsAmount;

// console.log('His balance is: ', amountLeft.toLocaleString());
//

// 2 

// const name = 'Douglas'
// const nameTwo = 'Nathaniel'
//
// function greetPerson (name) {
// 	return name + ', welcome back.'
// }
//
// console.log(greetPerson('Anderson'))


// 1

function changeColor (newColor) {
	color = newColor
}

let color = 'black'

console.log('color is(ONE): ', color)

changeColor('blue')

console.log('color is(TWO): ', color)





