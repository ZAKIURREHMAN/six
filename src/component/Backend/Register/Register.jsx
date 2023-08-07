import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register(props) {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [user,setuser] = useState("")
  const [error,seterror] = useState(false)
  const [emailerror,setemailerror] = useState(false)
  const [errorpassword,seterrorpassord] = useState(false)
const Register = ()=>{
  if(name.length<5){ 
    seterror(true)
  }
  else{
    seterror(false)
  }
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
  if(name && email &&password){
    axios.post("http://localhost:4000/register",{name,email,password})
  .then((res)=> props.showalert("Registration successfully "))
  .catch((error)=>{
      props.showalert(error.response.data.errors[0].msg)
  })
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
    <div class="registration-form" style={ColorHandler} >
      {console.log(user)}
    <h2 style={ColorHandler}>Registration Form</h2>
    
      <div class="form-group">
        <label for="username" >Username</label>
        {
          error === true?<input type="text" id="name" name='name'  style={{border:'2px solid red'}} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name'  />:<input type="text" id="name" name='name' placeholder='Enter Your Name'  onChange={(e)=>setname(e.target.value)} style={{border:'1px solid black'}}  />
        }
      </div>
      <div class="form-group">
        <label for="email">Email</label>
   {
    emailerror === true?     <input type="email" placeholder='Enter Your email' style={{border:'2px solid red'}} onChange={(e)=>setemail(e.target.value)}   id="email"  name='email' value={user.email} />:     <input type="email" onChange={(e)=>setemail(e.target.value)}   id="email"  name='email' value={user.email} placeholder='Enter Your email' style={{border:'1px solid black'}}  />
   }
        
      </div>
      <div class="form-group">
<label for="password">Password</label>
{
  errorpassword === true?<input type="password" placeholder='Enter Your Password' id="password" style={{border:'2px solid red'}}   onChange={(e)=>setpassword(e.target.value)}   name='password' value={user.password}  />:<input type="password" id="password"  onChange={(e)=>setpassword(e.target.value)}   name='password' value={user.password} placeholder=' Enter Your Password' style={{border:'1px solid black'}}  />
}

      </div>
      <button type="submit" id='register' onClick={Register} style={ColorHandler}   >Register</button>Clice here for <Link to='/login' >login</Link>
  
  </div>
    </>
  )
}

export default Register