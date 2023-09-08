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

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                onChangeFilter={changeFilterHandler}
                selected={filteredYear} // Setting up 2-way binding, makes default value display when app reloads
            />
            {props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
};

export default Expenses;