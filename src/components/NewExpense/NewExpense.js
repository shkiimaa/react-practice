import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [formControl, setformControl] = useState(false);

  const formControlHandler = (e) => {
    setformControl((prevState) => !prevState);
  };

  const saveExpenseDataHander = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = { ...enteredExpenseData, date: new Date(enteredExpenseData.date), id: Math.random().toString() };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formControl && <button onClick={formControlHandler}>Add New Expense</button>}
      {formControl && <ExpenseForm onSaveExpenseData={saveExpenseDataHander} onFormControl={formControlHandler} />}
    </div>
  );
};

export default NewExpense;
