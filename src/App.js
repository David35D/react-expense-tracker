import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title: 'Lenovo Legion 5 AMD', amount: 1199.99, date: new Date (2023, 9, 3)},
    {title: 'Xtrem Backpack', amount: 47.65, date: new Date (2023, 9, 23)},
    {title: 'Timberland Hiking Shoes', amount: 115.15, date: new Date (2023, 2, 6)},
    {title: 'Dotted Notebook', amount: 8.75, date: new Date (2023, 1, 8)},
  ];

  const addExpenseHandler = (expense) => {
    console.log('Expense data passed to App.js');
    console.log(expense);
  };

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
