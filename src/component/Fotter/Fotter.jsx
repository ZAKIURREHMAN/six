import React from 'react'
import { Link } from 'react-router-dom'
import './Fotter.css'
function Fotter(props) {
  const ResponsivebarFun = ()=>{
    if(props.responsive === true){
        return{
            display:'none'
        }
    }
}
  const Responsivebar = ResponsivebarFun()
  return (
      <>
      <h1>Content us</h1>
  <div className="top-container" style={Responsivebar}>
    <div className="upper-img" id='upper-img1'></div>
  <div className="main-fotter-container">
        <div className="fotter-heading">
        <div className="Iconsfotter" >
   <a href="https://www.facebook.com/zaki.urrehman.7771"><i class="fa-brands fa-facebook"  ></i></a>
       <a href="https://www.instagram.com/uralmotorcycles/?hl=en"><i class="fa-brands fa-instagram"   ></i></a>
       <a href="https://twitter.com/ZakiBashir2559?t=9LducxTgFKbNa--J-C868g&s=09"><i class="fa-brands fa-twitter"   ></i></a>
       <a href="https://www.linkedin.com/in/zaki-ur-rehman-598a35268"><i class="fa-brands fa-linkedin"   ></i></a>
       <a href="https://www.youtube.com/@zakiiiurrehman6398"><i class="fa-brands fa-youtube"   ></i></a>
       <a href="https://wa.me/+923037055259"><i class="fa-brands fa-whatsapp" ></i></a>
       <a href="https://www.tiktok.com/@zakiurrehman220?lang=en"><i class="fa-brands fa-tiktok"   ></i></a>
   </div>
        <ul>
                    <Link to='/' ><li ><a >Home</a></li></Link>
                    <Link to='/about'  ><li   ><a>About</a></li></Link>
                    <Link  to='almobiles' ><li   ><a>AllMobiles</a></li></Link>
                    <Link><li  ><a>content</a></li></Link>
        </ul>
      03037055259
        <h6>create by <i class="fa-solid fa-heart"></i> @ zaki ur rehman ||   8 August 2023 </h6>
        </div>
    </div>
  </div>
    </>
  )
}
export default Fotter