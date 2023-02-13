import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('all');

  const fillterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const renderItems = props.items.filter((data) => {
    return data.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={fillterChangeHandler} selectedYear={filteredYear} />
        {filteredYear === 'all'
          ? props.items.map((data) => {
              return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
            })
          : renderItems.map((data) => {
              return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
            })}
      </Card>
    </>
  );
};

export default Expenses;
