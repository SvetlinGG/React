import { useState } from "react";
export default function AdvancedCounter(){

    const [show, setShow ] = useState(true);
    const [counter, setCounter] = useState(0);

    const buttonClickHandler = ()=> {
        setCounter(counter + 1)
        
    }

    const hideCounterHandler = () => {
        setShow(!show);
    };

    if ( counter > 10){
        return (
        <>
            <h2>Max Counter</h2>
            <button onClick={()=> setCounter(0)}>Reset</button>
        </>
        );
    }

    return (
        <>
        <h2>Advanced Counter</h2>

        {show
            ?(
                <div>
                    <p>Counter: {counter}</p>
                    <button onClick={hideCounterHandler}>Counter</button>
                </div>
            )
            : <p>Counter is Hidden</p>
        }
        <button onClick={hideCounterHandler}>{show ? 'Hide' : 'Show'} Counter</button>

        
        </>
    );
}
