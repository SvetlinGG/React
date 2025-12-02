import { useState } from "react";
export default function AdvancedCounter(){

    const [show, setShow ] = useState(true);
    const [counter, setCounter] = useState(0);

    const buttonClickHandler = ()=> {
        setCounter(oldState => oldState + 1)
        
    };

    const hideCounterHandler = () => {
        setShow(state => !state);
    };

    if ( counter > 10){
        return (
        <>
            <h2>Max Counter</h2>
            <button onClick={()=> setCounter(0)}>Reset</button>
        </>
        );
    }
    const counterElement = (
        <div>
            <div>
                    <p>Counter: {counter}</p>
                    <button onClick={buttonClickHandler}>Counter</button>
                </div>
        </div>
    )

    return (
        <>
        <h2>Advanced Counter</h2>

        {show
            ? counterElement
            : <p>Counter is Hidden</p>
        }
        {counter < 5 &&
        <button onClick={hideCounterHandler}>{show ? 'Hide' : 'Show'} Counter</button>
        }
        
        </>
    );
}
