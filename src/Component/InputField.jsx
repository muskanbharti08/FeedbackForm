import React, { useState } from 'react'

export default function InputField() {

        let[fname,setFname]= useState("abc")

        let handleOnSubmit= (event)=>{
                event.preventDefault()
        }

        let handleOnChange = (event) =>{
                console.log(event.target.value);
                setFname(event.target.value);
        }


let [fatherName,setFatherName] =  useState("mr");

let handleOnChange1 = event =>{
        console.log(event.target.value)
        setFatherName(event.target.value)
}




let [motherName,setMotherName] = useState("Mrs.");
let handleOnMother = event =>{
        console.log(event.target.value)
        setMotherName(event.target.value)
}


  return (
    <div>
                <form onSubmit={handleOnSubmit} action="">
                <label htmlFor="nm">Name</label>
                <input type="text" onChange={handleOnChange} value = {fname} name="fname" id="nm" />


                <label htmlFor="f1">Father's name</label>
                <input type="text" value={fatherName}   onChange={handleOnChange1} name="fatherName" id="f1" />

<br></br>


                <label htmlFor="m1">Mother's Name</label>
                <input type="text"  onChange={handleOnMother} name="mname" value={motherName} id="m1" />


  
                <button>click</button>


                </form>

    </div>
  )
}
