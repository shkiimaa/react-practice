import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

  const fillterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  console.log(filteredYear);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={fillterChangeHandler} selectedYear={filteredYear} />
        {props.items.map((data) => {
          return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} filteredYear={filteredYear} />;
        })}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
      </Card>
    </>
  );
};

export default Expenses;
