import { useEffect } from "react";

export default function Gallery(){

    const onKeyDownHandler = (e)=> {
        console.log(e.key);
        console.log('Key down');
        
        
    }

    useEffect(() => {
        window.addEventListener('keypress', onKeyDownHandler)
    }, [])

    return (
        <>
        <h2>Gallery Demo (key press)</h2>

        <div tabIndex={0} onKeyDown={onKeyDownHandler} style={{backgroundColor: 'lightblue', borderRadius: 20 }}>
            <h3>Gallery view</h3>

            <img style={{width: 350, height:400}} src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="" />
        </div>
        </>
    )
}