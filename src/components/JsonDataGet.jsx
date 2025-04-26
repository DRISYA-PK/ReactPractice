import React, { useEffect, useRef, useState } from 'react'
import JsonData from './JsonData';

const JsonDataGet = () => {
  const [data,fetchData]=useState([])
const getData=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/posts");
  const result=await response.json();
  console.log(result);
  fetchData(result)
}
useEffect(() => {
  getData(); // ✅ Call the function inside useEffect correctly
}, []);

  return (
    <div>
 {data.map((data,index)=><JsonData key={index} title={data.title} body={data.body}></JsonData>)}

    </div>
  )
}

export default JsonDataGet