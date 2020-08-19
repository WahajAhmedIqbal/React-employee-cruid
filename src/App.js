import React, { useState } from 'react'
import LoginComponents from './components/Login/Login'
import AllEmployeeComponent from './components/Login/Allemp/AllEmp'
import AddEmployeComponent from './components/Login/Allemp/Addemp/AddEmp'
import AddedComponent from './components/Login/Allemp/Addemp/AddedEmpolye/AddedEmpolye'

function App() {

    const [user, setuser] = useState(false)
    const [allemploye , setAllempoye] = useState(false)
    const [ademp , setademmp] = useState([])
    const [addedempolye, setaddedempolye] = useState(false)
    // const [ademptb, setademptb] = useState([])

    const addform = function(obj){
      const {email , password} = obj
      // {(email === "admin@gmail.com" ) ? setuser(true) : alert("please enter correct email and password")} 
      if(email === "admin@gmail.com" && password === "admin" ){
        console.log("value" , email , password)
        setuser(true)
      }
      else
      {
        alert("please enter correct email and password")
      }
    }
    const addallemp = function(){
      setAllempoye(true)
    }
    const insertemployee = function(empobj){
      setAllempoye(false)
      setademmp([...ademp , empobj])
    }
    const deletefun = function(index){
      const tempemp = [...ademp]
      tempemp.splice(index , 1)
      setademmp(tempemp)
    }
    const addedemp = function(index){
      setaddedempolye(true)
      console.log("index" , index)
    }
    
      return(
        <div>
            {/* <h1>app.js</h1> */}
            {!user && <LoginComponents addform={addform}/>}
            {user && !allemploye && !addedempolye &&  <AllEmployeeComponent addallemp={addallemp} ademp={ademp} deletefun={deletefun}  addedemp={addedemp}/>}
            {user && allemploye && !addedempolye && <AddEmployeComponent  insertemployee={insertemployee}/> }
            {user && addedempolye && <AddedComponent ademp={ademp} addedemp={addedemp}/>}
        </div>
      )
}

export default App
