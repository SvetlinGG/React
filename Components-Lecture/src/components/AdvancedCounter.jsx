import { useState } from "react"

export default function AdvancedCounter(){
    const [ show, setShow] = useState(true)
    const [counter, setCounter] = useState(0);

    const buttonClickHandler = ()=> {
        setCounter(counter + 1)
    }

    if ( counter > 10){
        return (
            <>
            <h2>Max Counter</h2>
            <button onClick={()=> setCounter(0)}>Reset</button>
            </>
        )
    }

    const hideClickHandler = ()=> {
        setShow(!show)
    }

    return (
        <>
        <h2>Advanced Counter</h2>
        {show
            ? <button onClick={buttonClickHandler}>Increment - {counter}</button>
            : <p>Counter is Hidden</p>
            }


        
         {counter < 5 && <button onClick={hideClickHandler}>{show ? 'Hide' : 'Show'} Counter</button>}
        </>
    )

}