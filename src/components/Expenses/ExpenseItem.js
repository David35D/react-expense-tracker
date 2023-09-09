import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({title, amount, date}) => { // Destructuring the received props
    console.log('RECEIVED DATE IN EXPENSEITEM ', date);

    return (
        <li className='expense-item'>
            <ExpenseDate 
                date={date}
            />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </li>
    )
};

export default ExpenseItem;