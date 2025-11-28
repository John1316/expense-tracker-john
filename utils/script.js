import { getExpensesFromStorage } from "./retrieveDataFromStorage.js";
// import { calculateTotalExpenses, getHighestExpense } from "../_utils/expensesUtils";

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
// const ExpenseTracker = () => {
//   // Sample data for UI display only
//   const [expenses, setExpenses] = useState([]);
//   const [totalExpenses, setTotalExpenses] = useState(0);
//   const [filteredExpenses, setFilteredExpenses] = useState([]);
//   const [currentCategory, setCurrentCategory] = useState("All");
//   const [highestExpense, setHighestExpense] = useState(null);
//   function handleAddExpense(event) {
//     event.preventDefault();
//     const expense = {
//       id: Math.random().toString(),
//       title: event.target.title.value,
//       amount: parseFloat(event.target.amount.value),
//       category: event.target.category.value || "Other",
//       date: event.target.date.value || new Date().toISOString().split("T")[0],
//     };
//     const updatedExpenses = [...expenses, expense];
//     console.log("🚀 ~ handleAddExpense ~ updatedExpenses:", updatedExpenses);
//     setExpenses(updatedExpenses); // ✅ Update source of truth
//     setFilteredExpenses(updatedExpenses);
//     setCurrentCategory("All");
//     localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
//     const total = calculateTotalExpenses({ expenses: updatedExpenses });
//     setTotalExpenses(total);
//     event.target.reset(); // ✅ Reset form fields
//   }

//   function handleFilter(category) {
//     setCurrentCategory(category);
//     if (category === "All") {
//       setFilteredExpenses(expenses);
//       setTotalExpenses(calculateTotalExpenses({ expenses: expenses || [] }));
//       return;
//     }
//     const filtered = expenses.filter(
//       (expense) => expense?.category?.toLowerCase() === category?.toLowerCase()
//     );
//     setTotalExpenses(calculateTotalExpenses({ expenses: filtered || [] }));
//     setFilteredExpenses(filtered);
//   }
//   function handleDeleteExpense(id) {
//     const confirmed = window.confirm("Are you sure you want to delete this expense?");
//     if(!confirmed) return;
//     const deletedExpenses = expenses.filter((expense) => expense.id !== id);
//     setExpenses(deletedExpenses);
//     setFilteredExpenses(deletedExpenses);
//     setCurrentCategory("All");
//     const total = calculateTotalExpenses({ expenses: deletedExpenses });
//     setTotalExpenses(total);
//     localStorage.setItem("expenses", JSON.stringify(deletedExpenses));
//   }

//   useEffect(() => {
//     if (expenses.length > 0) return;
//     const savedExpenses = getExpensesFromStorage();
//     console.log("🚀 ~ ExpenseTracker ~ savedExpenses:", savedExpenses);
//     if (!savedExpenses || savedExpenses?.length === 0) return;
//     const total = calculateTotalExpenses({ expenses: savedExpenses });
//     console.log("🚀 ~ ExpenseTracker ~ total:", total);
//     setTotalExpenses(total);
//     setExpenses(savedExpenses);
//   }, []);
//   useEffect(() => {
//     if (expenses?.length) {
//       const highest = getHighestExpense( expenses || [] );
//       setHighestExpense(highest);
//     }
//   }, [expenses]);
//   return (
//     <div className="expense-tracker">
//       <div className="expense-tracker-container">
//         <h1 className="expense-tracker-title">Expense Tracker</h1>

//         {/* Add Expense Form */}
//         <div className="add-expense-section">
//           <h2>Add New Expense</h2>
//           <form className="expense-form" onSubmit={handleAddExpense}>
//             <InputContainer
//               label="Title"
//               type="text"
//               name="title"
//               placeholder="Enter expense title"
//               required
//             />
//             <InputContainer
//               label="Amount"
//               type="number"
//               name="amount"
//               placeholder="0.00"
//               step="0.01"
//               min="0"
//               required
//             />

//             <div className="form-group">
//               <label htmlFor="category">Category</label>
//               <select id="category" name="category" className="form-input">
//                 <option value="">Select Category</option>
//                 <option value="Food">Food</option>
//                 <option value="Transport">Transport</option>
//                 <option value="Entertainment">Entertainment</option>
//                 <option value="Bills">Bills</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <InputContainer
//               label="Date"
//               type="date"
//               name="date"
//               placeholder="Select date"
//             />

//             <button type="submit" className="add-expense-btn">
//               Add Expense
//             </button>
//           </form>
//         </div>

//         {/* Filter Section */}
//         <div className="filter-section">
//           <h2>Filter by Category</h2>
//           <div className="filter-buttons">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleFilter(category)}
//                 type="button"
//                 className={`filter-btn ${
//                   category.toLowerCase() === currentCategory.toLowerCase()
//                     ? "active"
//                     : ""
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Expenses List */}

//         <div className="expenses-section">
//           <h2>Your Expenses</h2>
//           <div className="expenses-list">
//             {expenses.length === 0 ? (
//               <p className="no-expenses">No expenses recorded yet.</p>
//             ) : (
//               <table className="expenses-table">
//                 <thead>
//                   <tr>
//                     <th>Title</th>
//                     <th>Amount</th>
//                     <th>Category</th>
//                     <th>Date</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {(() => {
//                     if(currentCategory === "All") {
//                       return expenses.map(({id, title, amount, category, date}) => (
//                         <tr key={id}>
//                           <td>{title}</td>
//                           <td className="amount-cell">{amount} LE</td>
//                           <td>
//                             <span
//                               className={`category-badge category-${category.toLowerCase()}`}
//                             >
//                               {category}
//                             </span>
//                           </td>
//                           <td>{date}</td>
//                           <td>
//                             <button
//                             className="delete-btn" type="button" onClick={() => handleDeleteExpense(id)}>
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ));
//                     }
//                     return filteredExpenses.map(({id, title, amount, category, date}) => (
//                       <tr key={id}>
//                         <td>{title}</td>
//                         <td className="amount-cell">{amount} LE</td>
//                         <td>
//                           <span
//                             className={`category-badge category-${category.toLowerCase()}`}
//                           >
//                             {category}
//                           </span>
//                         </td>
//                         <td>{date}</td>
//                         <td>
//                           <button
//                           className="delete-btn" type="button" onClick={() => handleDeleteExpense(id)}>
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ));
//                   })()}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>

//         {/* Total Expenses */}
//         <div className="total-section">
//           <div className="total-card">
//             <h3>Total Expenses</h3>
//             <p className="total-amount">{totalExpenses || 0} LE</p>
//           </div>
//         </div>
//         {highestExpense && (
//         <div className="total-section">
//           <div className="total-card">
//             <h3>Highest Expense in all categories</h3>
//             <p className="total-amount">Title: {highestExpense?.title || "No expenses recorded yet."}</p>
//             <p className="total-amount">Amount: {highestExpense?.amount || 0} LE</p>
//               <p className="total-amount">Category: {highestExpense?.category || "No category recorded yet."}</p>
//               <p className="total-amount">Date: {highestExpense?.date || "No date recorded yet."}</p>
//             </div>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default ExpenseTracker;

function getCategories(category = "All") {
  console.log("getCategory", category);
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
  console.log("🚀 ~ selectCategory ~ category:", category);
  currentCategory = category;
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
  const savedExpenses = getExpensesFromStorage() || [];
  if (!savedExpenses) {
    localStorage.setItem("expenses", JSON.stringify([expense]));
    console.log("🚀 ~ handleAddExpense ~ expense:", expense);
    return;
  }
  const updatedExpenses = [...savedExpenses, expense];
  console.log("🚀 ~ handleAddExpense ~ updatedExpenses:", updatedExpenses);
  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  console.log("🚀 ~ handleAddExpense ~ expense:", expense);
  event.target.reset(); // Reset form fields
  getExpenses();
}
document.addEventListener("DOMContentLoaded", () => {
  const expensesForm = document.getElementById("expensesForm");
  expensesForm.addEventListener("submit", handleAddExpense);
});
function getExpenses() {
  const savedExpenses = getExpensesFromStorage();
  console.log("🚀 ~ getExpenses ~ savedExpenses:", savedExpenses);
  if (!savedExpenses || savedExpenses?.length === 0) return;
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = savedExpenses
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
// Set up event delegation once
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#expensesList");

  // Single event listener on parent element
  tbody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const expenseId = event.target.id.split("btn-expense-")[1];
      console.log("🚀 ~ expenseId:", expenseId);
      handleDeleteExpense(expenseId);
    }
  });
});
function handleDeleteExpense(expenseId) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this expense?"
  );
  if (!confirmed) return;
  const savedExpenses = getExpensesFromStorage() || [];
  const deletedExpenses = savedExpenses.filter(
    (expense) => expense.id !== expenseId
  );
  console.log("🚀 ~ handleDeleteExpense ~ deletedExpenses:", deletedExpenses)
  localStorage.setItem("expenses", JSON.stringify(deletedExpenses));
  getExpenses();
}
function initializeExpenseTracker() {
  getCategories();
  getExpenses();
}
initializeExpenseTracker();
