import React from 'react'
import Frontimg from '../Frontimg/Frontimg'
import Marqitaq from '../Marqitaq/Marqitaq'
import Slider from '../Slider/Slider'
import About from '../About/About'
import Map from '../Map/Map'
import Fotter from '../Fotter/Fotter'

function Home(props) {
  return (
    <>
    <Frontimg mode={props.mode} responsive={props.responsive} />
    <Slider responsive={props.responsive}    />
    <Marqitaq  responsive={props.responsive}   />
    <About mode={props.mode}  responsive={props.responsive}   />
    <Map  responsive={props.responsive}   />
<Fotter  responsive={props.responsive}    />
    </>
  )
}

export default Home