import React , {useState} from 'react'


function Login(props) {
    
    const {addform} = props
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    // const logincheck = function(){
    //     console.log("em" , email ,"pas" , password)
    // }

    return (
        <div>
            <h1>Login page</h1>
            <input type='email' placeholder='Insert email' onChange={(e) => setemail(e.target.value)}/>
            <input type='password' placeholder='Insert password' onChange={(e) => setpassword(e.target.value)}/>
            <button onClick={() => addform({email , password})}>click to go on all emp</button>
        </div>
    )
}

export default Login
