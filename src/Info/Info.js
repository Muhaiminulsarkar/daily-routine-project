import React from 'react';
import './Info.css'
const Info = (props) => {
    const { img, title, Age, time } = props.routine;
    const { handleAddToCalculation } = props;
    return (
        <div className="info">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h4>For Age:{Age}</h4>
            <h4>Time:{time} seconds</h4>
            <button onClick={() => handleAddToCalculation(props.cultural)}>Add To List</button>
        </div>
    );
};
export default Info;