"use strict";
// data:
// initial amount
// annual contribution
// expected return rate
//duration of contribution
// => return array of annual investment results, result[]
function calculateInvestment(data) {
    const { annualContribution, duration, expectedReturn, initialAmount } = data;
    if (initialAmount < 0)
        return "Initial investment must be at least zero";
    if (duration <= 0)
        return "No valid amount of years provided.";
    if (expectedReturn < 0)
        return "Expected return must be at least zero.";
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; ++i) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            totalAmount: total,
            totalContributions,
            totalInterestEarned,
            year: `Year ${i + 1}`,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log("-------------------------------------");
    }
}
const investmentData = {
    annualContribution: 500,
    duration: 10,
    expectedReturn: .08,
    initialAmount: 5000
};
const results = calculateInvestment(investmentData);
printResults(results);
