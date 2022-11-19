import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css';


function ExpenseItem(props){
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
   // const LocationOfExpenditure  = 'car showRoom' //Added


    return (
        <>
        

         <div className='expense-item'>
           {/* <div>{props.date.toLocaleDateString()}</div> */}
          <ExpenseDate date = {props.date}/>
           
            <div className='expense-item__description'>

                <ExpenseDetails title = {props.title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {props.amount} />

            </div>
           </div>


        </>
    )
}

export default ExpenseItem;