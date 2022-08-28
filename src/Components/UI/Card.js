import React from 'react';
import './Card.css';
const Card = (props) =>  {
    const classes='card ' + props.className;
    //children is a reserved name which is not decalred in the parent component and the value of this special children prop will always be the content between the opening and closing tag of the custom(parent component - ExpenseItem - <Card>..</Card>)
    return <div className={classes}>{props.children}</div>
}
export default Card;
