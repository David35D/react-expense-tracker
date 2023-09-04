import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Lenovo Legion 5 AMD', amount: 1199.99, date: new Date (2023, 9, 3)},
    {title: 'Xtrem Backpack', amount: 47.65, date: new Date (2023, 9, 23)},
    {title: 'Timberland Hiking Shoes', amount: 115.15, date: new Date (2023, 2, 6)},
    {title: 'Dotted Notebook', amount: 8.75, date: new Date (2023, 1, 8)},
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem 
        expense={expenses[0]}
      />
      <ExpenseItem 
        expense={expenses[1]}
      />
      <ExpenseItem 
        expense={expenses[2]}
      />
      <ExpenseItem 
        expense={expenses[3]}
      />
    </div>
  );
}

export default App;
