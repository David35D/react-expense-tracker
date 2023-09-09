import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

/* 
 Defining DUMMY_EXPENSES outside of the App function, 
 so it doesn't change during the lifecycle of the component. 
 This means that the expenses array is initialized with a 
 fixed set of data when the component is initially rendered.
*/
const DUMMY_EXPENSES = [
  {id: 0, title: 'Lenovo Legion 5 AMD', amount: 1199.99, date: new Date (2023, 9, 3)},
  {id: 1, title: 'Xtrem Backpack', amount: 47.65, date: new Date (2023, 9, 23)},
  {id: 2, title: 'Timberland Hiking Shoes', amount: 115.15, date: new Date (2023, 2, 6)},
  {id: 3, title: 'Dotted Notebook', amount: 8.75, date: new Date (2023, 1, 8)}
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
      <h1>Expense Tracker</h1>
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
