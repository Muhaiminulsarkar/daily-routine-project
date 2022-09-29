import React, { useState } from 'react';

const Routine = () => {

    const [routines, setRoutine] = useState([]);
    const [time, setTime] = useState([]);
    const [minute, setMinute] = useState(localStorage.getItem("minute") || 0)


    const addTominute = (time) => {
        localStorage.setItem('minute', time);
        let number = localStorage.getItem("minute");
        setMinute(number)
    }


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
    for (const element of time) {
        total = total + element.time;
    }

    return (
        <div className="main-container">

            <div className="routine-container">
                {
                    routines.map(cultural => <Content
                        key={cultural.id}
                        cultural={cultural}
                        handleAddToCalculation={handleAddToCalculation}
                    >

                    </Content>)
                }
            </div>

            <div className="right-container">
                <h3>Muhaiminul Sarkar</h3>
                <h4>Mirpur-1,Dhaka</h4>
                <div className='user'>
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
                <h4>Details:{routines.length}</h4>

                <div>
                    <h3>Add a Break:</h3>
                    <div className='break-content'>
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
                        <h3>{total}s</h3>
                    </div>

                    <div className='exercise-details'>
                        <h3>Break Time:</h3>
                        <h3>{minute}m</h3>
                    </div>

                </div>

                <div className='activity'>
                    <button>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Routine;