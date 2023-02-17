import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  const renderItems = () => {
    if (props.selectedYear === 'all') {
      return props.items.map((data) => {
        return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
      });
    } else {
      if (props.FilteredItems.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
      } else {
        return props.FilteredItems.map((data) => {
          return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date} />;
        });
      }
    }
  };
  return <ul className="expenses-list">{renderItems()}</ul>;
};

export default ExpenseList;
