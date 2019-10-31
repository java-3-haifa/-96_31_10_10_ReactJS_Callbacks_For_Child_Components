import React from 'react';

export default props => {
    return (
        <div>
            <button onClick={props.onDec}>-</button>
            <span>{props.curr}</span>
            <button onClick={props.onInc}>+</button>
        </div>
    )
}
