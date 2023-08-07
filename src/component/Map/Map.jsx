import React from 'react'

function Map(props) {
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
   <div className="maintop-container" style={Responsivebar}  >
   <div className="map-main-container" style={{margin:'70px 0px 100px 0px'}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.9389268126674!2d74.29150837452102!3d31.443348250945345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901262989294b%3A0x29126a42366dd67d!2sButt%20Chowk%20Bus%20Stop!5e0!3m2!1sen!2s!4v1691211448804!5m2!1sen!2s"style={{ width:"100%", height:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </div>
    </>
  )
}

export default Map