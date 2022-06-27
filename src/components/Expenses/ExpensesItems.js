import React, {useState} from 'react'
import './ExpensesItem.css';
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';
const ExpensesItems = (props) => {
    const [title, setTitle] = useState(props.title)
    
    const clickHander = () => {
        setTitle('Updated');
        
    }
    return (
        <Card className='expense-item'>
            <ExpensesDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHander}>Change Title</button>
        </Card>
    )
}

export default ExpensesItems