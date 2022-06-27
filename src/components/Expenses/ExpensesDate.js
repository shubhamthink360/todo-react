import React from "react";
import './ExpenseDate.css';

const ExpensesDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long' });
    const day = props.date.toLocaleString('en-US', {day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            {/* in toLocaleString pass 2 arguments 1. = lang, 2. objt */}
            <div className="expense-date__month">{month}</div>
            <div  className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExpensesDate