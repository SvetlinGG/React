import { useState } from "react";
export default function AdvancedCounter(){

    const [counter, setCounter] = useState(0)
    const buttonClickHandler = ()=> {
        setCounter(counter + 1)
        
    }

    return (
        <>
        <h2>Advanced Counter</h2>
        <p>counter: {counter}</p>

        <button onClick={buttonClickHandler}>Click Me</button>
        </>
    )
}
 