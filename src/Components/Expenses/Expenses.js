import React, {useState} from 'react';
import ExpensesList from '../NewExpense/ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const[filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

const filteredExpenses = props.expenses.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
});

// let expensesContent = <p>No Expense found.</p>

// if(filteredExpenses.length > 0){
//   expensesContent = filteredExpenses.map((expense) => (
//     <ExpenseItem 
//        key={expense.id}
//        title={expense.title}
//        amount={expense.amount}
//        date={expense.date}
//      />
//     ))
// }
    return(
      <div>
        
        <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* {filteredExpenses.length === 0 && <p>No expenses Found</p> }
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem 
               key={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
             />
            ) )} */}

            {/* OR  */}

        {/* {filteredExpenses.length === 0? (
        <p>No expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem 
               key={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
             />
            ))
        )} */}

        {/* OR */}
        {/* {expensesContent} */}
        <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      
      </Card>
      </div>

    );
};
export default Expenses;