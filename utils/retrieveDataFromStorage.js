function getExpensesFromStorage() {
    const savedExpenses = localStorage.getItem("expenses");
    if(!savedExpenses || savedExpenses.length === 0) return;
    return JSON.parse(savedExpenses);
  }
export {
    getExpensesFromStorage
}