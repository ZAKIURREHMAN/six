import React, { useState } from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login(props) {
  const navigate = useNavigate();
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [emailerror,setemailerror] = useState(false)
  const [errorpassword,seterrorpassord] = useState(false)
  const login = ()=>{
    const reg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(reg.test(email)!==true){
      setemailerror(true)
    }
    else{
      setemailerror(false)
    }
    if(password.length<5){
      seterrorpassord(true)
    }
    else{
      seterrorpassord(false)
    }

    if(email&&password){
      axios.post("http://localhost:4000/login",{email,password})
      .then(res =>{
        props.showalert(res.data.message)
        // console.log(res.data.message)
        // alert(res.data.message)
       props.setloginuser(res.data.user)

      }
      )
    }
    else{
      props.showalert("please full this data")
    }
  }
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#000000',
      color:'#FCE9F1',
      
    }
  }
  const ColorHandler = FunColorHandler()
  return (
<>
<div class="Login-form"  style={ColorHandler}>
    <h2  style={ColorHandler}>Login Form</h2>
      <div class="form-group">
        <label for="email">Email</label>
        {
          emailerror === true?<input type="email" id="email" name="email"style={{border:'2px solid red'}} onChange={(e)=>setemail(e.target.value)} />:<input type="email" id="email" name="email" onChange={(e)=>setemail(e.target.value)} />
        }
      </div>
      <div class="form-group">
        <label for="password">Password</label>
       {
        errorpassword === true? <input type="password" id="password" style={{border:'2px solid red'}}  name="password" onChange={(e)=>setpassword(e.target.value)} />: <input type="password" id="password" name="password" onChange={(e)=>setpassword(e.target.value)} />
       }
      </div>
     {
      props.loginuser && props.loginuser._id? <Link to='/addtocart'><button type="submit"   style={ColorHandler}id='Login'onClick={login}>Login</button></Link > :<Link to='/login' ><button type="submit" id='Login'onClick={login}  style={ColorHandler} >Login</button></Link>
     }
      Clice here for
        <Link to='/registration' >  create account  </Link>
  </div>
</>  )
}

export default Login