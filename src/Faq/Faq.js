import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq-container'>
            <div className='faq'>
                <h1>How Does React Work?</h1>
                <p>Brought to existence by Jordan Walke and maintained by Facebook, React is the most widely used front-end JavaScript library in the web development domain. Some of the examples of commonly used JavaScript libraries are TensorFlow, Angular, Node etc. React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly.</p>
            </div>
            <div className='faq'>
                <h1>Different Between props and state</h1>
                <p>Props are a Component’s attributes in React that are useful for customization. Since a prop modifies a component’s behavior or output, it can be compared to a parameter. Props are a Component’s attributes in React that are useful for customization. Since a prop modifies a component’s behavior or output, it can be compared to a parameter.The component’s behavior and rendering are determined by changes in state, which may occur in reaction to user input or system-generated events.</p>
            </div>
            <div className='faq'>
                <h1>What Works useEffect without data load?
                </h1>
                <p>useEffect will run when the component renders, which might be more times than you think. I feel like I’ve had this come up a dozen times in the past few weeks, so it seems worthy of a quick blog post.</p>
            </div>
        </div>
    );
};

export default Faq;