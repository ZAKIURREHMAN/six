import React from 'react'
import './About.css'
function About(props) {
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#000000',
      color:'#D8D9DA',
      
    }
      if (props.responsive === true) {
        return {
          display: 'none'
        }
      }
    
  }
const ColorHandler = FunColorHandler()
  return (
    <>
    <h1 style={ColorHandler}  >About</h1>
    <div className="main-container-about" style={ColorHandler} >
            <img src="About/Lastimg.webp" alt=""  />
            <span style={ColorHandler}  >
            <br /> <br /> <br />  <br /> <br />
Welcome to our Mobiles Shop, your one-stop destination for all things mobile! We pride ourselves on offering an extensive selection of the latest smartphones, tablets, and accessories from renowned brands. Our expert and friendly staff are here to assist you in finding the perfect device that fits your needs and budget. <br /> <br />
We understand the importance of staying connected, which is why we offer cutting-edge technology to keep you ahead in this fast-paced digital world. Whether you're a tech enthusiast, a professional, or a casual user, we have the ideal gadget for you.
<br /> <br />
At our shop, customer satisfaction is our top priority. Our dedicated team is committed to providing excellent service, ensuring a seamless shopping experience for you. We also offer competitive prices, making high-quality devices accessible to all.
<br /> <br />
Embrace the future of communication and productivity with our fantastic range of mobile devices. Visit our Mobiles Shop today and discover the latest innovations that will enhance your digital lifestyle.
            </span>
    </div>
    </>
  )
}

export default About