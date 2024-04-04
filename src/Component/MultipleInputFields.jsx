import React, { useState } from 'react'

export default function MultipleInputFields() {

let [inputs, setInputs] = useState({});

let handleOnChange  = (event)=>{
        let whoChange = event.target.name;
        let whatChange = event.target.value;
        setInputs((preInput)=>({...preInput,[whoChange]:whatChange}))
}


  return (
    <div>
<form  action="">


        <label htmlFor="nm">Name</label>
        <input type="text" onChange={handleOnChange}  value = {inputs.fname  ||  ''} name="fname" id="nm" />

        <label htmlFor="ag">Age</label>
        <input type="number"  onChange={handleOnChange} name="age"  value={inputs.age || ""} id="ag" />
        
        <label htmlFor="p1">Password</label>
        <input type="password"  onChange={handleOnChange} value={inputs.pwd  || "" } name="pwd" id="p1" />


        <label htmlFor="c1">class</label>
        <input type="number" onChange={handleOnChange} value={inputs.class || ""} name="class" id="c1" />

</form>

        
    </div>
  )
}
