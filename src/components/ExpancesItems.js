import React from 'react'
import './ExpensesItem.css';

const ExpancesItems = (props) => {
    const expenceDate = new Date(2022, 2, 28)
    const expenceTitle = 'Car Insurance';
    const expenceAmount = 1000;
    return (
        <div className='expense-item'>
            <div>
                {/* in toLocaleString pass 2 arguments 1. = lang, 2. objt */}
                <div>{props.date.toLocaleString('en-US',{month:'long' })}</div>
                <div>{}</div>
                <div>{}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpancesItems