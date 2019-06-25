import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
    const buttonClass = (props.taskComplete) ? "todo_card_button_done" : "todo_card_button_undone";
    const buttonText = (props.taskComplete) ? "delete" : "done";
    return (
        <div className="todoCard_container">
            <div className="todoCard_text">
                { props.text }
            </div>
            <div className={"todo_card_button "+ buttonClass } onClick={props.handleTodoClick}>
                {buttonText}
            </div>
        </div>
    );
};

export default TodoCard;
