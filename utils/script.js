import { getExpensesFromStorage, saveToStorage } from "./retrieveDataFromStorage.js";
import { calculateTotalExpenses, getHighestExpense } from "./expensesUtils.js";

let currentCategory = "All";
const categories = [
  "All",
  "Food",
  "Transport",
  "Entertainment",
  "Bills",
  "Shopping",
  "Other",
];
function getCategories(category = "All") {
  const filterCategory = document.getElementById("filterCategory");
  filterCategory.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-btn ${
          category.toLowerCase() === currentCategory.toLowerCase()
            ? "active"
            : ""
        }">${category}</button>`
    )
    .join("");
}
function selectCategory(category) {
  currentCategory = category;
  const filterCategory = document.getElementById("filterCategory");
  filterCategory.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  filterCategory.querySelector(`.filter-btn[data-category="${category.toLowerCase()}"]`).classList.add("active");
}
function handleAddExpense(event) {
  event.preventDefault();
  const expense = {
    id: Math.random().toString(),
    title: event.target.title.value,
    amount: parseFloat(event.target.amount.value),
    category: event.target.category.value || "Other",
    date: event.target.date.value || new Date().toISOString().split("T")[0],
  };
  selectCategory("All");
  const savedExpenses = getExpensesFromStorage() || null;
  if (!savedExpenses) {
   saveToStorage([expense]);
    getExpensesUtils();
    event.target.reset();
    return;
  }
  const updatedExpenses = [...savedExpenses, expense];
  saveToStorage(updatedExpenses);
  event.target.reset(); // Reset form fields
  getExpensesUtils();
}
// Helper function to get filtered expenses - eliminates code duplication
function getFilteredExpenses(category = "All") {
  const savedExpenses = getExpensesFromStorage() || null;
  if (!savedExpenses) return [];
  if (category === "All") {
    return savedExpenses;
  }
  return savedExpenses.filter(
    (expense) => expense?.category?.toLowerCase() === category?.toLowerCase()
  );
}

function getMappingLists(expenses) {
  return expenses
    .map(
      ({ id, title, amount, category, date }) => `
      <tr key=${id}>
        <td>${title}</td>
        <td class="amount-cell">${amount} LE</td>
        <td>
          <span
            class='category-badge category-${category.toLowerCase()}'
          >
            ${category}
          </span>
        </td>
        <td>${date}</td>
        <td>
          <button
          class="delete-btn" type="button" id="btn-expense-${id}">
            Delete
          </button>
        </td>
      </tr>`
    )
    .join("");
}

function getExpenses(category = "All") {
  const expensesList = document.getElementById("expensesList");
  const filteredExpenses = getFilteredExpenses(category);

  if (!filteredExpenses || filteredExpenses.length === 0) {
    expensesList.innerHTML =
      '<tr><td colspan="5" class="no-expenses">No expenses recorded yet.</td></tr>';
    return;
  }

  expensesList.innerHTML = getMappingLists(filteredExpenses);
}

function handleDeleteExpense(expenseId) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this expense?"
  );
  if (!confirmed) return;
  const savedExpenses = getExpensesFromStorage() || null;
  if (!savedExpenses) return;
  const deletedExpenses = savedExpenses.filter(
    (expense) => expense.id !== expenseId
  );
  saveToStorage(deletedExpenses);
  getExpensesUtils();
}

function getHighExpensesContainer(highestExpense) {
  if (!highestExpense)
    return `<p class="total-amount">No expenses recorded yet.</p>`;
  return `<p class="total-amount">Title: ${
    highestExpense?.title || "No expenses recorded yet."
  }</p>
              <p class="total-amount">Amount: ${
                highestExpense?.amount || 0
              } LE</p>
                <p class="total-amount">Category: ${
                  highestExpense?.category || "No category recorded yet."
                }</p>
                <p class="total-amount">Date: ${
                  highestExpense?.date || "No date recorded yet."
                }</p>`;
}
function getHighExpenses() {
  const filteredExpenses = getFilteredExpenses(currentCategory);
  if (!filteredExpenses || filteredExpenses.length === 0) {
    const totalExpensesContainer = document.getElementById("totalExpenses");
    totalExpensesContainer.innerHTML =
      '<p class="total-amount">No expenses recorded yet.</p>';
    return;
  }
  const highestExpense = getHighestExpense(filteredExpenses);
  const totalExpensesContainer = document.getElementById("totalExpenses");
  totalExpensesContainer.innerHTML = getHighExpensesContainer(highestExpense);
}
function getTotalExpenses() {
  const filteredExpenses = getFilteredExpenses(currentCategory);
  if (!filteredExpenses || filteredExpenses.length === 0) {
    const totalAmountContainer = document.getElementById("totalAmount");
    totalAmountContainer.textContent = "0.00 LE";
    return;
  }
  const total = calculateTotalExpenses({ expenses: filteredExpenses });
  const totalAmountContainer = document.getElementById("totalAmount");
  totalAmountContainer.textContent = `${total} LE`;
}
function getExpensesUtils() {
  getExpenses();
  getHighExpenses();
  getTotalExpenses();
}
function initializeExpenseTracker() {
  getCategories();
  getExpensesUtils();
}
initializeExpenseTracker();
document.addEventListener("DOMContentLoaded", () => {
  const expensesForm = document.getElementById("expensesForm");
  expensesForm.addEventListener("submit", handleAddExpense);
}); // Set up event delegation once
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#expensesList");

  // Single event listener on parent element
  tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const expenseId = event.target.id.split("btn-expense-")[1];
      handleDeleteExpense(expenseId);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const filterCategory = document.getElementById("filterCategory");
  filterCategory.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-btn")) {
      const category = event.target.textContent;
      selectCategory(category);
      getCategories(category);
      getExpenses(category);
      getHighExpenses();
      getTotalExpenses();
    }
  });
});
// In script.js, set default date on load
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  dateInput.value = new Date().toISOString().split("T")[0];
});
