import React, { useEffect, useState } from 'react'
import SliderApi from './SliderApi'
import 'animate.css';
import './Slider.css'
function Slider(props) {
    const [slider,setslider] = useState(0)
    const ArryLieng =  SliderApi.length-1;
    const prebutton = ()=>{
        setslider(slider ===0?ArryLieng:slider-1  )
    }
    const nextbutton = ()=>{
        slider===ArryLieng?setslider(0):setslider(slider+1)
    }
    useEffect(()=>{
        const sliderruner = setInterval(() => {
            nextbutton()
        }, 9000);
        return()=>{
            clearInterval(sliderruner)
        }
    })
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
    <div className="main-container-slider" style={Responsivebar} >
        <div className="pre-button" onClick={prebutton}>
        <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div className="slider-imag">
            {
                SliderApi.map((img,index)=>{
                    return slider === index &&  (
                        <div className="img-header">
                            <img  className='animate__animated animate__backInDown'  src={img.url} alt="" />
                        </div>
                    )
                })
            }
        </div>
        <div className="next-button" onClick={nextbutton} >
        <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
    </div>
    </>
  )
}

export default Slider