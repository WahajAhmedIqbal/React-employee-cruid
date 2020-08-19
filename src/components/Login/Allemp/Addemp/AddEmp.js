import React , {useState} from 'react'

function AddEmp(props) {

    const [employename, setemployename] = useState([])
    const [employeeposition, setemployeeposition] = useState([])
    // console.log("emp name" , employename)
    // console.log("emp position" , employeeposition)
    const addemploye = function(){

        console.log("name" , employename , employeeposition)
            const empobj = {
             employename,
             employeeposition   
            }
            props.insertemployee(empobj)
    }
    
    return (
        <div>
            <h1>add Emp</h1>
            <input type='text' onChange={(e) => setemployename(e.target.value)} ></input> 
            <input type='text' onChange={(e) => setemployeeposition(e.target.value)} ></input> 
            <button onClick={addemploye}>click</button>
        </div>
    )
}

export default AddEmp
