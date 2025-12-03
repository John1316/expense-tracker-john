function calculateTotalExpenses({
    expenses,
  }) {
    console.log("🚀 ~ calculateTotalExpenses ~ expenses:", expenses)
    const total = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    return total.toFixed(2);
  }
  function getHighestExpense(expenses) {
    if (expenses.length === 0) return null;
    return expenses.find(expense => 
      expense.amount === Math.max(...expenses.map(e => e.amount))
    );
  }
  function getFilteredExpenses(category = "All") {
    const savedExpenses = getExpensesFromStorage() || [];
    if (category === "All") return savedExpenses;
    return savedExpenses.filter(
      (expense) => expense?.category?.toLowerCase() === category?.toLowerCase()
    );
  }
  export {
    calculateTotalExpenses,
    getHighestExpense,
    getFilteredExpenses
  }