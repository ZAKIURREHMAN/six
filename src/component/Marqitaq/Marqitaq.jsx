import React from 'react';
import './Marqitaq.css'
import img1 from '../../marqi/infinix.jpg';
import img2 from '../../marqi/iphone.jpg';
import img3 from '../../marqi/oppo.jpg';
import img4 from '../../marqi/sumsun.jpg';
import img5 from '../../marqi/vivo.jpg';
import img6 from '../../marqi/soni.jpg';
import img7 from '../../marqi/nokia.jpg';
function Marqitaq(props) {
  const ResponsivebarFun = () => {
    if (props.responsive === true) {
      return {
        display: 'none'
      }
    }
  }
  const Responsivebar = ResponsivebarFun()
  return (
    <>
      <div className="main-container-Marqitag" style={Responsivebar}  >
        <marquee>
          <img src={img1} alt="apple" />
          <img src={img2} alt="nokia" />
          <img src={img3} alt="oppo" />
          <img src={img4} alt="sumsung" />
          <img src={img5} alt="vivo" />
          <img src={img6} alt="sony" />
          <img src={img7} alt="infinix" />
        </marquee>
      </div>
    </>
  )
}

export default Marqitaq