import React, {useState, useEffect} from 'react'
import './style.css'
const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      let timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearTimeout(timer);
    },[date])
    return(
        <>
            <div><p>Local Time: <label>{date.toLocaleTimeString()} </label> </p></div>
        </>
    );
}
export default Clock;