import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    let filterInfoText = '2019, 2020, 2021 & 2022'; // We use this instead of a new state because it depends from the state we already declared.
    // In the end this whole function will re-execute everytime the year changes and so the whole conditional block will run again.

    if (filteredYear === '2019') {
        filterInfoText = '2020, 2021, 2022 & 2023';
    } else if (filteredYear === '2020') {
        filterInfoText = '2019, 2021, 2022 & 2023';
    } else if (filteredYear === '2021') {
        filterInfoText = '2019, 2020, 2022 & 2023';
    } else {
        filterInfoText = '2019, 2020, 2021 & 2023';
    }

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
            <p>{filterInfoText}</p> {/* Temporal for working with derived values */}
            <ExpenseItem 
                expense={props.items[0]}
            />
            <ExpenseItem 
                expense={props.items[1]}
            />
            <ExpenseItem 
                expense={props.items[2]}
            />
            <ExpenseItem 
                expense={props.items[3]}
            />
        </Card>
    )
};

export default Expenses;