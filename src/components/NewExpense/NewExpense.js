import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  );
};

export default NewExpense;
