import './App.css';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(1);

    /** 들어온 숫자들을 2배로 만들어준다. */
    const double = () => {
        // const doubleNumber = number * 2;
        setNumber((prevState) => {
            return prevState * 2;
        });

        setNumber((prevState) => {
            return prevState * 2;
        });
    };

    return (
        <>
            <div>{number}</div>
            <button className="btn btn-primary" onClick={double}>
                Submit
            </button>
        </>
    );
}

export default App;
