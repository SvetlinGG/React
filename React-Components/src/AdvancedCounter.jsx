import { useState } from "react";
export default function AdvancedCounter(){

    const [show, setShow ] = useState(true);
    const [counter, setCounter] = useState(0);

    const buttonClickHandler = ()=> {
        setCounter(counter + 1)
        
    }

    const hideCounterHandler = () => {
        setShow(!show);
    }

    return (
        <>
        <h2>Advanced Counter</h2>

        {show
            ?(
                <div>
                    <button onClick={buttonClickHandler}>Click Me</button>
                    <button onClick={hideCounterHandler}>Hide Counter</button>
                </div>
            )
            : <p>Counter is Hidden</p>
        }
        <button onClick={hideCounterHandler}>{show ? 'Hide' : 'Show'} Counter</button>

        
        </>
    );
}
