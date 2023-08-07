import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
function Search(props) {
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#191825',
      color:'#FFF9C9',
      cursor:'pointer'
      
    }
  }
  const ColorHandler = FunColorHandler()
  return (
    <>
    <div className="main-container-searching" style={ColorHandler} >
      {
        props.loginuser && props.loginuser._id?<div className="login" onClick={()=>props.setloginuser({})} style={{cursor:'pointer'}}  > 
            <span style={ColorHandler}>Logout</span>
        </div>: 
        <Link to='login' > <div className="login" style={ColorHandler} >
        <i class="fa-solid fa-right-to-bracket" style={ColorHandler}></i>
            <span style={ColorHandler}>Login</span>
        </div></Link>
      }
        <div className="searhing" style={ColorHandler}>
        <input type="search" name="search" id="search" placeholder='Searching here' style={ColorHandler} onChange={props.searching}  />
        </div>
        <div className="icon" onClick={props.toggelmode} style={ColorHandler} >
        {
          props.mode == "light"?<i class="fa-solid fa-moon"></i>:<i class="fa-regular fa-sun"></i>
        }
        </div>
    </div>
    </>
  )
}

export default Search