# Expense Tracker – Mini Budget App

A simple and intuitive Expense Tracker web application built with vanilla JavaScript that helps users record, manage, and analyze their daily expenses. This project demonstrates JavaScript fundamentals including array methods, destructuring, spread operators, and DOM manipulation.

## 📋 Project Description

The Expense Tracker is a client-side web application that allows users to:
- Add new expenses with details (title, amount, category, date)
- View all expenses in a clean, organized table format
- Filter expenses by category (Food, Transport, Entertainment, Bills, Shopping, Other)
- Delete expenses with confirmation
- View total expenses calculated dynamically
- View the highest expense across all categories
- Persist data using browser localStorage (data survives page refreshes)

Each expense follows a structured data format: `{id, title, amount, category, date}`

The application uses modern JavaScript (ES6+) features including:
- ES6 Modules for code organization
- Array methods (map, filter, find, reduce)
- Destructuring and spread operators
- DOM manipulation and event handling
- localStorage API for data persistence

## ✨ Features List

### Core Features

#### ✅ Add New Expense
- **Form validation**: Title and amount fields are required
- **Category selection**: Choose from 6 predefined categories (Food, Transport, Entertainment, Bills, Shopping, Other)
- **Date picker**: Select a date for the expense (defaults to today's date)
- **Automatic form reset**: Form clears after successful submission
- **Real-time updates**: Expenses list, totals, and highest expense update immediately

#### ✅ Delete Expense
- **Confirmation dialog**: Prevents accidental deletions
- **Automatic recalculation**: Total expenses and highest expense update after deletion
- **Data persistence**: Changes are saved to localStorage immediately

#### ✅ Filter Expenses by Category
- **Category buttons**: Filter by specific categories or view all expenses
- **Visual feedback**: Active filter button is highlighted
- **Dynamic filtering**: Expenses list updates instantly when filter changes
- **Filtered totals**: Total expenses calculation reflects the current filter

#### ✅ Calculate and Display Total Expenses
- **Real-time calculation**: Total updates automatically when expenses are added, deleted, or filtered
- **Filtered totals**: Shows total for all expenses or filtered category
- **Currency display**: Amounts displayed in Egyptian Pounds (LE)
- **Automatic formatting**: Numbers are formatted to 2 decimal places

#### ✅ Show Highest Expense (Optional Feature)
- **Automatic detection**: Finds the expense with the highest amount
- **Detailed display**: Shows title, amount, category, and date of highest expense
- **Filter-aware**: Can show highest expense in filtered category or all categories
- **Empty state handling**: Displays appropriate message when no expenses exist

### Technical Features

- 📦 **Data Persistence**: All expenses are saved to browser localStorage
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds and smooth transitions
- 🔄 **Real-time Updates**: All calculations and displays update automatically without page refresh
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🧩 **Modular Code**: Well-organized code structure with separate utility modules
- ⚡ **ES6 Modules**: Uses modern JavaScript module system for better code organization
- 🎯 **Event Delegation**: Efficient event handling using event delegation pattern

### JavaScript Features Used

- ✅ **Array Methods**:
  - `map()` - Transform expense data into HTML table rows
  - `filter()` - Filter expenses by category
  - `find()` - Find highest expense
  - `reduce()` - Calculate total expenses
  - `forEach()` - Iterate through elements for event handling

- ✅ **ES6+ Features**:
  - Destructuring: Extract properties from expense objects
  - Spread operator: Merge arrays when adding expenses
  - Arrow functions: Modern function syntax
  - Template literals: Dynamic HTML generation
  - Optional chaining: Safe property access

## 🚀 How to Run the Project

### Prerequisites

No installation required! This is a vanilla JavaScript project that runs directly in the browser. You only need:

- A modern web browser (Chrome, Firefox, Safari, Edge - latest versions)
- A local web server (optional, but recommended)

### Option 1: Using a Local Web Server (Recommended)

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

#### Using Node.js (if installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server

# Or specify port
http-server -p 8000
```
Then open: `http://localhost:8080` (or your specified port)

#### Using VS Code Live Server Extension:
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Direct File Opening (Not Recommended)

⚠️ **Note**: Opening `index.html` directly in the browser may cause issues with ES6 modules due to CORS restrictions. Use a local server for best results.

1. Navigate to the project folder
2. Double-click `index.html` to open in your browser
3. If you see errors in the console, use Option 1 instead

### Quick Start Steps

1. **Download or clone the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd wallet-app-task
   ```

2. **Start a local web server** (choose one method above)

3. **Open in browser**
   - Navigate to the URL shown by your server (usually `http://localhost:8000` or `http://localhost:8080`)
   - The Expense Tracker application will load automatically

4. **Start using the app!**
   - Add your first expense
   - Filter by categories
   - View totals and highest expense

## 📁 Project Structure

```
wallet-app-task/
├── index.html                    # Main HTML file
├── style.css                     # Stylesheet for the application
├── utils/
│   ├── script.js                 # Main JavaScript logic and DOM manipulation
│   ├── expensesUtils.js          # Utility functions for calculations
│   └── retrieveDataFromStorage.js # localStorage utility functions
└── README.md                     # This file
```

### File Descriptions

- **index.html**: Contains the HTML structure and form elements
- **style.css**: All styling including responsive design and animations
- **utils/script.js**: Main application logic, event handlers, and DOM updates
- **utils/expensesUtils.js**: Functions for calculating totals and finding highest expense
- **utils/retrieveDataFromStorage.js**: Functions for saving/loading expenses from localStorage

## 🎯 Usage Guide

### Adding an Expense

1. Fill in the **Title** field (required)
2. Enter the **Amount** (required, must be a positive number)
3. Select a **Category** from the dropdown (optional, defaults to "Other")
4. Choose a **Date** (optional, defaults to today)
5. Click **"Add Expense"** button
6. The expense will appear in the table immediately
7. Total and highest expense will update automatically

### Filtering Expenses

1. Click on any category button in the "Filter by Category" section
2. The expenses table will show only expenses matching that category
3. The total expenses will update to reflect the filtered amount
4. Click **"All"** to view all expenses again
5. The active filter button will be highlighted

### Deleting an Expense

1. Click the **"Delete"** button next to any expense in the table
2. Confirm the deletion in the popup dialog
3. The expense will be removed from the list
4. Total expenses will update automatically
5. Changes are saved to localStorage immediately

### Viewing Statistics

- **Total Expenses**: Displayed at the bottom, updates automatically based on current filter
- **Highest Expense**: Shows the expense with the highest amount, including all details

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Modern styling with gradients, transitions, and responsive design
- **Vanilla JavaScript (ES6+)**: No frameworks or libraries required
- **ES6 Modules**: Modern JavaScript module system
- **localStorage API**: Browser storage for data persistence
- **DOM API**: Direct DOM manipulation for dynamic updates

## 📝 Notes

- **Data Storage**: All expenses are stored in the browser's localStorage
- **Data Persistence**: Data persists across browser sessions and page refreshes
- **No Backend Required**: This is a fully client-side application
- **Browser Compatibility**: Works in all modern browsers that support ES6 modules
- **Form Validation**: Built-in HTML5 validation ensures required fields are filled
- **Responsive Design**: Optimized for various screen sizes

## 🔧 Troubleshooting

### Issue: Expenses not loading
- **Solution**: Check browser console for errors. Ensure you're using a local web server, not opening the file directly.

### Issue: Module errors in console
- **Solution**: ES6 modules require a web server. Use one of the server options mentioned above.

### Issue: Data not persisting
- **Solution**: Check if localStorage is enabled in your browser. Some browsers disable it in private/incognito mode.

### Issue: Styling looks broken
- **Solution**: Ensure `style.css` is in the same directory as `index.html` and the path is correct.

### Issue: Delete/Filter buttons not working
- **Solution**: Check browser console for JavaScript errors. Ensure all files are loaded correctly.

## 🎓 Learning Outcomes

This project demonstrates:
- Modern JavaScript (ES6+) features
- DOM manipulation and event handling
- Array methods and functional programming concepts
- Data persistence with localStorage
- Modular code organization
- Responsive web design
- Form validation and user interaction

## 📄 License

This project is created for educational purposes as a student assignment.

---

**Happy Expense Tracking! 💰**

*Track your expenses, manage your budget, and stay financially organized!*

