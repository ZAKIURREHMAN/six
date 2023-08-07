import React from 'react'
import './Header.css'
function Header(props) {
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#61677A',
      color:'#FFF6E0',
      
    }
  }
  const ColorHandler = FunColorHandler()
  return (
    <>
   <div className={`main-container`}  >
    <div className="header" style={ColorHandler} >       
   <div className="Icons" >
   <a href="https://www.facebook.com/zaki.urrehman.7771"><i class="fa-brands fa-facebook"style={ColorHandler}  ></i></a>
       <a href="https://www.instagram.com/uralmotorcycles/?hl=en"><i class="fa-brands fa-instagram" style={ColorHandler}  ></i></a>
       <a href="https://twitter.com/ZakiBashir2559?t=9LducxTgFKbNa--J-C868g&s=09"><i class="fa-brands fa-twitter"style={ColorHandler}   ></i></a>
       <a href="https://www.linkedin.com/in/zaki-ur-rehman-598a35268"><i class="fa-brands fa-linkedin"style={ColorHandler}   ></i></a>
       <a href="https://www.youtube.com/@zakiiiurrehman6398"><i class="fa-brands fa-youtube" style={ColorHandler}  ></i></a>
       <a href="https://wa.me/+923037055259"><i class="fa-brands fa-whatsapp"style={ColorHandler} ></i></a>
       <a href="https://www.tiktok.com/@zakiurrehman220?lang=en"><i class="fa-brands fa-tiktok"  style={ColorHandler} ></i></a>
   </div>
    </div>
    <div className="header"style={ColorHandler} >EN/UK</div>
    </div> 
    </>
  )
}

export default Header