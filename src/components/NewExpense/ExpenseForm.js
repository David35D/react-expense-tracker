// This component captures the data input by the user so that it will be used for generating an expense item.
// There's an alternative code for managing state and events below the component function.

import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    // Shared state with all the data in the form of an object.
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    // Shared change handler to update the state.
    const inputChangeHandler = (identifier, value) => {
        const updatedIdentifier = `entered${identifier.charAt(0).toUpperCase()}${identifier.slice(1)}`; // This line prevents new properties such as 'title', 'amount' or whatever the identifier is called to be created in the object.

        setUserInput((prevState) => {
            return {
                ...prevState,
                [updatedIdentifier]: value
            };
        })
        console.log(value);
    };

    const submitHandler = (event) => {
        event.preventDefault();     // Prevent page reload on submit
        
        const expenseData = userInput;
        console.log(expenseData);

        // Resetting the inputs for 2 way binding
        setUserInput(
            {        
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            }
        )
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={(event) => inputChangeHandler('title', event.target.value)} /* Special syntax to allow more than one paramater */
                        value={userInput.enteredTitle}  /* Special prop for 2-way binding */
                    /> 
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={(event) => inputChangeHandler('amount', event.target.value)}
                        value={userInput.enteredAmount} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01"
                        max="2023-12-31" 
                        onChange={(event) => inputChangeHandler('date', event.target.value)} 
                        value={userInput.enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

// In this alternative way of managing state we make an state for each input
// There're also different versions for handling changes on the input.
// The lines marked with 'XXXX' are an incorrect way of updating state depending on previous state, we might not get the latest snapshot.
/*

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
        XXXX setUserInput({
        XXXX   ...userInput,
        XXXX   enteredTitle: event.target.value,
        XXXX });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
        XXXX setUserInput({
        XXXX   ...userInput,
        XXXX   enteredAmount: event.target.value,
        XXXX });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
        XXXX setUserInput({
        XXXX   ...userInput,
        XXXX   enteredDate: event.target.value,
        XXXX });
  };

  // Alternate submission handler for single states
    const submitHandler = (event) => {
        event.preventDefault();     // Prevent page reload on submit
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };
*/