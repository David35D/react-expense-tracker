import './ExpenseItem.css';

const ExpenseItem = ({expense}) => {
    return (
        <div className='expense-item'>
            <div>{expense.date.toLocaleDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>${expense.amount}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;