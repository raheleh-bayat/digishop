import React, {useEffect , useRef} from 'react';
const Input = ()=>{
const useReff = useRef(null)
useEffect(()=>{
useRef.current.focus();

},[])
return(
    <div>
        <input ref={useReff}></input>
    </div>
)
}
export default Input;