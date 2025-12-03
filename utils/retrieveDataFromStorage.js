function getExpensesFromStorage() {
  const savedExpenses = localStorage.getItem("expenses");
  try {
    if (!savedExpenses || savedExpenses.length === 0) return;
    return JSON.parse(savedExpenses);
  } catch (error) {
    console.error("Error getting expenses from localStorage:", error);
    return null;
  }
}
function saveToStorage(expenses) {
  try {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}
export { getExpensesFromStorage, saveToStorage };
