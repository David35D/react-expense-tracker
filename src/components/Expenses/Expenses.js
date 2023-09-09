import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        console.log('Selected year: ' + selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear; // .filter adds items if the condition is true
    })

    let expensesContent = <p className="expenses-message">No expenses found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
                />
        ));
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                onChangeFilter={changeFilterHandler}
                selected={filteredYear} // Setting up 2-way binding, makes default value display when app reloads
            />
            {expensesContent}
        </Card>
    )
};

export default Expenses;