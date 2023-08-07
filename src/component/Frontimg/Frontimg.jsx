import React from 'react'
import './Frontimg.css'
function Frontimg(props) {
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#000000',
      color:'#FDE5EC',
      
    }
    if(props.responsive === true){
      return{
        display:'none'
      }
    }
  }
  const ColorHandler = FunColorHandler()
  return (
    <>
    <div className="main-container-Frontimg" style={ColorHandler}>
      <div className="left-img">
      <img src="/frontimg/iphone.jpg" alt="" />
      </div>
        <div className="sekond-left-img">
        <img src="/frontimg/left.webp" alt="" />
        </div>
     <div className="mid-img">
     <img src="/frontimg/main.jpg" alt="" />
     <img src="/frontimg/mobiles.jpg" alt="" />
     </div>
    </div>
    </>
  )
}

export default Frontimg