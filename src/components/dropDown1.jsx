import { useEffect, useState } from "react";

export default function  SimpleDropdown({content}){
   const [valuChange,valueChanged]=useState("dsjdkjd");
   const [selectedAge,getSelectedAge]=useState(content[0].age);
  // let ="cxcxxcxcxc";
    const changeState=(e)=>{
     
        getSelectedAge(e.target.value)
    }
    const SelectionChanged=()=>{
        valueChanged(`selected value change${selectedAge}`);
        console.log(valuChange)
    }
    useEffect(SelectionChanged,[selectedAge])
    return (
        
        <><select  onChange={changeState}>
       { content.map((value,index)=> <option key={index} value={value.age}> {value.name}</option>)}
        </select>
        <p>the age of person is {selectedAge}</p>
        <p>{valuChange}</p>
        </>

    );

}