import React, { useState, useEffect } from 'react';
import Info from '../Info/Info';
import './Routine.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routine = () => {

    const [routines, setRoutine] = useState([]);
    const [time, setTime] = useState([]);
    const [minute, setMinute] = useState(localStorage.getItem("minute") || 0)


    const addTominute = (time) => {
        localStorage.setItem('minute', time);
        let value = localStorage.getItem("minute");
        setMinute(value)
    }

    const notify = () => toast("Your Work Is Done!!!");
    useEffect(() => {
        fetch('routine.json')
            .then(res => res.json())
            .then(data => setRoutine(data))
    }, [])


    const handleAddToCalculation = (routines) => {
        const newTime = [...time, routines];
        setTime(newTime);
    }

    let total = 0;
    for (const period of time) {
        total = total + period.time;
    }

    return (
        <div className="main-container">

            <div className="routine-container">
                {
                    routines.map(routine => <Info
                        key={routine.id}
                        routine={routine}
                        handleAddToCalculation={handleAddToCalculation}
                    >
                    </Info>)
                }
            </div>

            <div className="right-container">
                <h3>Muhaiminul Sarkar</h3>
                <h4>Mirpur-1,Dhaka</h4>
                <div className='user-detailis'>
                    <div>
                        <h3>67KG</h3>
                        <h4>Weight</h4>
                    </div>

                    <div>
                        <h3>5.11</h3>
                        <h4>Height</h4>
                    </div>

                    <div>
                        <h3>22YRS</h3>
                        <h4>Age</h4>
                    </div>
                </div>

                <div>
                    <h3>Add a Break:</h3>
                    <div className='break-time'>
                        <button onClick={() => addTominute(10)}>10s</button>
                        <button onClick={() => addTominute(20)}>20s</button>
                        <button onClick={() => addTominute(30)}>30s</button>
                        <button onClick={() => addTominute(40)}>40s</button>
                        <button onClick={() => addTominute(50)}>50s</button>
                    </div>
                </div>

                <div>
                    <h3>Exercise Details:</h3>
                    <div className='exercise-details'>
                        <h3>Exercise Time:</h3>
                        <h3>{total}m</h3>
                    </div>

                    <div className='exercise-details'>
                        <h3>Break Time:</h3>
                        <h3>{minute}s</h3>
                    </div>

                </div>

                <div className='activity-btn'>
                    <button onClick={notify}>Activity Completed</button>
                    <ToastContainer />


                </div>
            </div>
        </div>
    );
};

export default Routine;