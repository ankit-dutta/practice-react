import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.67;
   // const LocationOfExpenditure  = 'car showRoom' //Added


   const [title, setTitle] = useState(props.title);
//    const [del,setdel] = useState(props.id)

   const clickHandler = () =>{
    setTitle("changed");
    console.log(title);
   }

//    const deletebtn = () =>{
//      console.log("delete")
//      console.log(props.id)
//      const newid = del.filter((item)=>item.id !==id)
//      setdel(newid)
    
     
//    }

    return (
        <>
 
         <Card className='expense-item'>
           {/* <div>{props.date.toLocaleDateString()}</div> */}
            <ExpenseDate date = {props.date}/>
            
                    <div className='expense-item__description'>

                        <ExpenseDetails title = {title} LocationOfExpenditure = {props.LocationOfExpenditure} amount = {props.amount} />

                    </div>

                <button onClick = {clickHandler}>Change Title</button>
                {/* <button onClick={()=>deletebtn(props.id)}>delete</button> */}

           </Card>


        </>
    )
}

export default ExpenseItem;