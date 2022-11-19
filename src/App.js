import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id:'e1',
      title:'toilet Paper',
      amount: 94.12,
      LocationOfExpenditure:'Store',
      date: new Date(2020,7,8),
    },
    {
      id:'e2',
      title:'Brush',
      amount: 74.12,
      LocationOfExpenditure:'Store',
      date: new Date(2020,7,4),
    },
    {
      id:'el',
      title:'Paper',
      amount: 84.12,
      LocationOfExpenditure:'Book Depo',
      date: new Date(2020,11,9),
    },
    {
      id:'e3',
      title:'Oil',
      amount: 99.12,
      LocationOfExpenditure:'Ration shop',
      date: new Date(2020,7,14),
    },
    {
      id:'e4',
      title:'Reading Books',
      amount: 14.12,
      LocationOfExpenditure:'library',
      date: new Date(2020,7,14),
    },
  ]

  return (
    <div className="App">
      <div><h1>Expense Items</h1></div>

       {/* <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
       <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
       <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
       <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}></ExpenseItem> */}

       {expenses.map((data)=>{
           return(
            <>
            {console.log(data.title +","+data.amount + "data")}
             <ExpenseItem title = {data.title}  LocationOfExpenditure ={data.LocationOfExpenditure} amount = {data.amount} date = {data.date} />
            </>
           )
       })}

    </div>
  );
}

export default App;
