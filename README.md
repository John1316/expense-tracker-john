# Expense Tracker – Mini Budget App

A simple and intuitive Expense Tracker application built with React that helps users record, manage, and analyze their daily expenses. This project demonstrates JavaScript fundamentals including array methods, destructuring, spread operators, and React state management.

## 📋 Project Description

The Expense Tracker is a web application that allows users to:
- Add new expenses with details (title, amount, category, date)
- View all expenses in a clean table format
- Filter expenses by category
- Delete expenses
- View total expenses and highest expense
- Persist data using browser localStorage

Each expense follows a structured data format: `{id, title, amount, category, date}`

## ✨ Features List

### Core Features
- ✅ **Add New Expense**
  - Form validation (title and amount are required)
  - Category selection (Food, Transport, Entertainment, Bills, Shopping, Other)
  - Date picker with default to today's date
  - Automatic form reset after submission

- ✅ **Delete Expense**
  - Confirmation dialog before deletion
  - Updates total expenses automatically
  - Persists changes to localStorage

- ✅ **Filter Expenses by Category**
  - Filter by specific categories or view all
  - Visual indication of active filter
  - Dynamic total calculation based on filtered expenses

- ✅ **Calculate and Display Total Expenses**
  - Real-time total calculation
  - Updates automatically when expenses are added, deleted, or filtered
  - Displays total in Egyptian Pounds (LE)

- ✅ **Show Highest Expense** (Optional Feature)
  - Displays the expense with the highest amount
  - Shows title, amount, category, and date

### Technical Features
- 📦 **Data Persistence**: Expenses are saved to browser localStorage
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds
- 🔄 **Real-time Updates**: All calculations and displays update automatically
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🧩 **Modular Code**: Well-organized components and utility functions

### JavaScript Features Used
- ✅ Array methods: `map`, `filter`, `find`, `reduce`
- ✅ Destructuring: Used for extracting expense properties
- ✅ Spread operator: Used for array manipulation
- ✅ ES6+ features: Arrow functions, template literals, optional chaining

## 🚀 How to Run the Project

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd wallet-app-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React and React DOM.

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000)

   If it doesn't open automatically, you can manually navigate to the URL.

4. **View the application**
   - The app will reload automatically when you make changes to the code
   - Any lint errors will appear in the console

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`
Launches the test runner in interactive watch mode.

#### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for the best performance and is ready to be deployed.

#### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App to give you full control over the configuration.

## 📁 Project Structure

```
wallet-app-task/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── InputContainer.jsx      # Reusable input component
│   ├── pages/
│   │   ├── ExpenseTracker.js       # Main expense tracker component
│   │   └── ExpenseTracker.css      # Styles for expense tracker
│   ├── _utils/
│   │   ├── calculations.js         # Utility functions for calculations
│   │   └── retrieveDataFromStorage.js  # localStorage utilities
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Usage Guide

1. **Adding an Expense**
   - Fill in the title (required)
   - Enter the amount (required)
   - Select a category (optional, defaults to "Other")
   - Choose a date (optional, defaults to today)
   - Click "Add Expense"

2. **Filtering Expenses**
   - Click on any category button to filter expenses
   - Click "All" to view all expenses
   - The total will update based on the filtered results

3. **Deleting an Expense**
   - Click the "Delete" button next to any expense
   - Confirm the deletion in the dialog
   - The expense will be removed and totals will update

4. **Viewing Statistics**
   - Total expenses are displayed at the bottom
   - Highest expense is shown below the total (if available)

## 🛠️ Technologies Used

- **React** 19.2.0 - UI library
- **React DOM** 19.2.0 - React rendering
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features
- **localStorage API** - Browser storage

## 📝 Notes

- All expenses are stored in the browser's localStorage
- Data persists across browser sessions
- The app uses client-side storage only (no backend required)
- Form validation ensures required fields are filled
- Responsive design works on various screen sizes

## 🔧 Troubleshooting

If you encounter issues:

1. **Port already in use**
   - The app will prompt you to use a different port
   - Or stop the process using port 3000

2. **Dependencies not installing**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **App not loading**
   - Check the console for errors
   - Ensure all dependencies are installed
   - Verify Node.js version is 14 or higher

## 📄 License

This project is created for educational purposes as a student assignment.

---

**Happy Expense Tracking! 💰**
