import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';

/* 
 Defining DUMMY_EXPENSES outside of the App function, 
 so it doesn't change during the lifecycle of the component. 
 This means that the expenses array is initialized with a 
 fixed set of data when the component is initially rendered.
*/
const DUMMY_EXPENSES = [
  {id: 0, title: 'Lenovo Legion 5 AMD', amount: 1199.99, date: new Date (2023, 1, 21)},
  {id: 1, title: 'Xtrem Backpack', amount: 47.65, date: new Date (2023, 7, 23)},
  {id: 2, title: 'Timberland Hiking Shoes', amount: 115.15, date: new Date (2023, 2, 6)},
  {id: 3, title: 'Redmi Note 8 Pro', amount: 265.56, date: new Date (2023, 1, 8)},
  {id: 4, title: 'Lenovo Legion 5 AMD', amount: 1199.99, date: new Date(2023, 9, 3)},
  {id: 5, title: 'Apple MacBook Pro', amount: 2499.99, date: new Date(2023, 8, 25)},
  {id: 6, title: 'Samsung Galaxy S21', amount: 1099.99, date: new Date(2023, 7, 15)},
  {id: 7, title: 'Sony PlayStation 5', amount: 499.99, date: new Date(2023, 6, 10)},
  {id: 8, title: 'Canon EOS R5', amount: 3499.99, date: new Date(2023, 5, 1)},
  {id: 9, title: 'Dell XPS 15', amount: 1799.99, date: new Date(2023, 4, 20)},
  {id: 10, title: 'LG OLED CX Series', amount: 1999.99, date: new Date(2023, 3, 12)},
  {id: 11, title: 'Nintendo Switch OLED', amount: 349.99, date: new Date(2023, 2, 5)},
  {id: 12, title: 'GoPro Hero 10 Black', amount: 499.99, date: new Date(2023, 1, 28)},
  {id: 13, title: 'Bose QuietComfort 45', amount: 329.99, date: new Date(2023, 0, 15)},
  {id: 14, title: 'Microsoft Surface Laptop 4', amount: 1299.99, date: new Date(2022, 11, 30)},
  {id: 15, title: 'Samsung QLED QN90A', amount: 1999.99, date: new Date(2022, 10, 22)},
  {id: 16, title: 'Fitbit Charge 5', amount: 179.99, date: new Date(2022, 9, 17)},
  {id: 17, title: 'Apple AirPods Pro', amount: 249.99, date: new Date(2022, 8, 8)},
  {id: 18, title: 'Sony WH-1000XM4', amount: 349.99, date: new Date(2022, 7, 3)},
  {id: 19, title: 'Xbox Series X', amount: 499.99, date: new Date(2022, 6, 22)},
  {id: 20, title: 'Nikon Z7 II', amount: 2999.99, date: new Date(2022, 5, 18)},
  {id: 21, title: 'HP Spectre x360', amount: 1399.99, date: new Date(2022, 4, 10)},
  {id: 22, title: 'Sony A7R IV', amount: 2999.99, date: new Date(2022, 3, 5)},
  {id: 23, title: 'Google Pixel 6 Pro', amount: 899.99, date: new Date(2022, 2, 1)}
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  console.log('UPDATED EXPENSES: ', expenses);

  return (
    <div>
      <h1 className="app-title">Expense Tracker</h1>
      <NewExpense 
        onAddExpense={addExpenseHandler}
      />
      <Expenses 
        items={expenses}
      />
    </div>
  );
}

export default App;
