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

    console.log('Received data in EXPENSES.JS ',props.items);

    return (
        <Card className='expenses'>
            <ExpensesFilter 
                onChangeFilter={changeFilterHandler}
                selected={filteredYear} // Setting up 2-way binding, makes default value display when app reloads
            />
            {props.items.map((expense) => ( // the "expense" argument works as each of the expenses received from the props.items array
                <ExpenseItem 
                    key={expense.id}  // We need to add a key in order to make sure React knows which element it has to render/update
                    title={expense.title}   // We access the properties we want from the array.
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
};

export default Expenses;