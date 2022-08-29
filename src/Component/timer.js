import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css"
import React,{useEffect, useRef, useState} from 'react';
const Timer = () => {
    const [Timer, setTimer] = useState(0);
    const timeRef = useRef();
    useEffect(()=>{
        timeRef.current = setInterval(()=>{
            setTimer((prevtime) => prevtime +1)
        },1000)
        return () =>{
            clearInterval(timeRef.current);
        }
    },[])
    return (
        <div>{Timer}
            <button  type='button'  className="btn btn-danger" onClick={() => clearInterval(timeRef.current)}>pause</button>
        </div>
        
    )
}
export default Timer;