import './ExpenseItem.css';

function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
    const LocationOfExpenditure  = 'car showRoom' //Added

    return (
        <>
        

         <div className='expense-item'>
           <div>{props.date.toLocaleDateString()}</div>
           
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            {/* Added */}
            <h2>{LocationOfExpenditure}</h2> 
            <div className='expense-item__price'>${props.amount}</div>
            </div>
           </div>


        </>
    )
}

export default ExpenseItem;