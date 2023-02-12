import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setUserInput((prevState) => {
    //   for (let i = 0; i < e.target.length - 1; i++) {
    //     const { name } = e.target[i];
    //     let newState = { ...userInput, [name]: '' };
    //     console.log(newState);
    //   }
    // });
    onSaveExpenseData(userInput);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };
  console.log(userInput);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} value={userInput.enteredTitle} name="enteredTitle" type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={titleChangeHandler} value={userInput.enteredAmount} name="enteredAmount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={titleChangeHandler} value={userInput.enteredDate} name="enteredDate" type="date" min="2023-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
