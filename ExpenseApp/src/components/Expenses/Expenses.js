import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {
  console.log(items);
  const [filteredYear, setfilteredYear] = useState('all');

  const fillterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  let itemsFilter;
  if (filteredYear === 'all') {
    itemsFilter = items;
  } else {
    itemsFilter = items.filter((data) => {
      return data.date.getFullYear().toString() === filteredYear;
    });
  }

  console.log(itemsFilter);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={fillterChangeHandler} selectedYear={filteredYear} />
        <ExpensesChart expenses={itemsFilter} />
        <ExpenseList items={items} selectedYear={filteredYear} FilteredItems={itemsFilter} />
      </Card>
    </>
  );
};

export default Expenses;
