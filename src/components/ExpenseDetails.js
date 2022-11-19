import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseDetail(props){
   const expenseTitle = props.title;
   const expenseLocationOfExpenditure = props.LocationOfExpenditure
   const expenseAmount = props.amount
    return (
        <>
           
            <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            {/* Added */}
            <h2>{expenseLocationOfExpenditure}</h2> 
            <div className='expense-item__price'>${expenseAmount}</div>
            </div>
       


        </>
    )
}

export default ExpenseDetail;