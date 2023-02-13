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

  const itemsFilter = props.items.filter((data) => {
    return data.date.getFullYear().toString() === filteredYear;
  });

  const renderItems = () => {
    if (filteredYear === 'all') {
      return props.items.map((data) => {
        return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
      });
    } else {
      if (itemsFilter.length === 0) {
        return <div>No Data</div>;
      } else {
        return itemsFilter.map((data) => {
          return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
        });
      }
    }
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={fillterChangeHandler} selectedYear={filteredYear} />
        {renderItems()}
      </Card>
    </>
  );
};

export default Expenses;
