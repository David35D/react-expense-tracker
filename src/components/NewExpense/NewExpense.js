import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const startAddingHandler = () => {
        setIsAdding(true);
    }

    const cancelAddingHandler = () => {
        setIsAdding(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('Data passed to NewExpense component: ');
        console.log(expenseData);
        console.log('Passing data to App.js');
        props.onAddExpense(expenseData);
    };

    const clearAllHandler = () => {
        props.onClearAll();
    }

    return (
        <div className='new-expense'>
            {!isAdding 
                ?
                    <>
                        <button onClick={startAddingHandler}>Add New Expense</button> 
                        <button onClick={clearAllHandler}>Clear All</button> 
                    </>
                : 
                    <ExpenseForm 
                        onSaveExpenseData={saveExpenseDataHandler}
                        onCancel={cancelAddingHandler}
                    />
            }
        </div>
    );
};

export default NewExpense;