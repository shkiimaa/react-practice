import React, { useEffect, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => {
      let newState;
      if (name === 'date') {
        newState = { ...prevState, [name]: new Date(value) };
      } else {
        newState = { ...prevState, [name]: value };
      }
      return newState;
    });
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const submitHandler = (e) => {
    e.preventDefault();

    onSaveExpenseData(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} value={userInput.title} name="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={titleChangeHandler} value={userInput.amount} name="amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={titleChangeHandler} value={userInput.date} name="date" type="date" min="2023-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
