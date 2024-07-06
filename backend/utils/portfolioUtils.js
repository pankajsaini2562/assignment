export const calculatePortfolioValue = (transactions) => {
  let totalValue = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === 'buy') {
      totalValue += transaction.amount * transaction.price;
    } else if (transaction.type === 'sell') {
      totalValue -= transaction.amount * transaction.price;
    }
  });
  return totalValue;
};

export const calculateProfitLoss = (transactions) => {
  let profitLoss = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === 'sell') {
      profitLoss += transaction.amount * transaction.price;
    } else if (transaction.type === 'buy') {
      profitLoss -= transaction.amount * transaction.price;
    }
  });
  return profitLoss;
};

 export const calculateAssetAllocation = (transactions) => {
  const allocation = {};
  transactions.forEach((transaction) => {
    if (transaction.asset) {
      if (!allocation[transaction.asset]) {
        allocation[transaction.asset] = 0;
      }
      allocation[transaction.asset] += transaction.amount;
    }
  });
  return allocation;
};


