// data:
// initial amount
// annual contribution
// expected return rate
//duration of contribution

type CalculationResult = InvestmentResult[] | string;

type InvestmentData = {
  annualContribution: number;
  duration: number;
  expectedReturn: number;
  initialAmount: number;
};

type InvestmentResult = {
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
  year: string;
};
// => return array of annual investment results, result[]
function calculateInvestment(data: InvestmentData): CalculationResult {
  const {annualContribution, duration, expectedReturn, initialAmount } = data;

  if (initialAmount < 0)
    return "Initial investment must be at least zero";
  if (duration <= 0)
    return "No valid amount of years provided.";
  if (expectedReturn < 0)
    return "Expected return must be at least zero.";

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

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
    })
  }
  return annualResults;
}

function printResults(results) {
  //print (output) the result data
}

const results = calculateInvestment(...);

printResults(results);
