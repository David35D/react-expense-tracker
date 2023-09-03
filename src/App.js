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
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
