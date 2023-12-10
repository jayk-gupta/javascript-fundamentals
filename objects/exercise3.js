const personAccount = {
  firstName: 'Jay',
  lastName: 'gupta',
  incomes:[{src: 'salary',amount:50000},{src:'freelancing',amount:10000}],
  expenses: [{ desc: 'Rent', amount: 15000 }, { desc: 'travel', amount: 5000 }, { desc: 'food', amount: 10000 }],
  totalIncome: function () {
    const total = incomes.reduce((acc, cur) => {
      return cur.amount + acc;
    }, 0);
    return total;
  },
  totalExpense: function () {
        const total = expenses.reduce((acc, cur) => {
          return cur.amount + acc;
        }, 0);
        return total;
  },
  accountInfo: function () {
    
  },
  addIncome: function (desc,amount) {
    this.incomes.push({ src: desc, amount: amount });
  },
  addExpense: function () {
    
  },
  accountBalance: function () {
    
  }
}
const incomes = [
  { src: "salary", amount: 50000 },
  { src: "freelancing", amount: 10000 },
];


personAccount.addIncome('bonus', 4000)

console.log(personAccount.incomes);
