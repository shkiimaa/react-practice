import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = { ...enteredExpenseData, date: new Date(enteredExpenseData.date), id: Math.random().toString() };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  );
};

export default NewExpense;
