import React from 'react'
import AllApis from '../Allmobiles/AllApis'
import { useParams } from 'react-router-dom'
import './Detail.css'
import { useDispatch } from 'react-redux'
import {addToCart} from '../feature/cartSlice'
function Detail(props) {
    const dispatch = useDispatch()
    const {model} = useParams()
    const items = AllApis.find((p)=>p.model === model)
    const FunColorHandler = ()=>{
        if(props.mode === "white")
        return{
          backgroundColor:'#000000',
          color:'#FE0000',
          
        }
      }
      const ColorHandler = FunColorHandler()
  return (
    <>
    <div className="imgnamedisplay">
        <h4 style={ColorHandler} >{items.model}</h4>
    </div>
    <div className="main-container-details-pg">
        <div className="img-displa">
        <img src={items.url} alt="" />
        </div>
        <div className="details-disply">
            <h3>Price: ${items.price}</h3>
            <button onClick={()=>dispatch(addToCart(items))} >Add to cart </button> 
        </div>
    </div>
    <div className="beforedetails-bar" style={ColorHandler}>
        <h3 style={ColorHandler}>specification</h3>
    </div>
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"style={ColorHandler}>
            Model
        </div>
        <div className="tems-explanation"style={ColorHandler}>
            {items.model}
        </div>
    </div>
    <hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"style={ColorHandler}>
            Discription
        </div>
        <div className="tems-explanation"style={ColorHandler}>
            {items.dec}
        </div>
    </div>
    <hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
            Display
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.display}
        </div>
    </div>
    <hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
        processor
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.processor}
        </div>
    </div>
    <hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
        camera
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.camera}
        </div>
    </div> <hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
        ram
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.ram}
        </div>
    </div><hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
            Battey
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.battery}
        </div>
    </div><hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
        operatingsystem
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.operatingsystem}
        </div>
    </div><hr />
    <div className="itesms-details"style={ColorHandler}>
        <div className="items-name"  style={ColorHandler}  >
        connectivity
        </div>
        <div className="tems-explanation"  style={ColorHandler}  >
            {items.connectivity}
        </div>
    </div><hr />
   
    </>
  )
}

export default Detail
