
import { useState } from 'react';
import {button1} from './button1.module.css';



export default function Button1(){
 const    IncremetCount=()=>
{
    SetCount(count+1);
}
    const [count,SetCount]=useState(10);
    return (

        <div>
            <button className={button1} onClick={IncremetCount}> Press Here</button>
            <p>{count}</p>
        </div>

    );
}