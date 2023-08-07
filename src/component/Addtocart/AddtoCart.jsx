import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getCart,Removeitems,PlusItems,MinusItems,AdminCart} from '../feature/cartSlice';
import { Link } from 'react-router-dom';
import './AddtoCart.css'
import axios from 'axios';
function AddtoCart(props) {
    const [name,setname] = useState("")
     const [number,setnumber] = useState("")
   const  dispatch = useDispatch()
   const HandelAdmitCart = ()=>{
    dispatch(AdminCart(cart))
    axios.post("http://localhost:4000/conferm",{name,number})
    .then(console.log("Your Order are conferm"))
   }
   const {cart,totalPrice,totalQuantity} = useSelector((state)=>state.allcart)
   useEffect(()=>{
       dispatch(getCart())
   },[cart])
   const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#000000',
      color:'#B31312',
    }
  }
  const ColorHandler = FunColorHandler()
  return (
    <>
    <div className="add-to-cart-container" style={ColorHandler}>
        <div className="img-container" style={ColorHandler}>
    {
        cart.map((i)=>{
            return(
                <div className="addtocart">
                    <img src={i.url} alt="" />  <h4>${i.price}</h4> <h4>Qua:{i.quantity}</h4>
                    <i class="fa-solid fa-plus" onClick={()=>dispatch(PlusItems(i.model))} ></i> 
                    <i class="fa-solid fa-trash" onClick={()=>dispatch(Removeitems(i.model))}  ></i>
                    <i class="fa-solid fa-minus" onClick={()=>dispatch(MinusItems(i.model))} ></i>
                    <hr />
                </div>
            )
        })
    }
        </div>
        <div className="confermOrder"style={ColorHandler}>
        <div className="form-container-right">
   <div class="container" style={ColorHandler} >
    <h2>Order Details</h2>
    <form>
      <div class="form-group">
        <label for="totalQuantity">Total Quantity: {totalQuantity}</label>
       
      </div>
      <div class="form-group">
        <label for="totalPrice">Total Price: ${totalPrice} </label>
      </div>
    </form>
  </div>
     <div class="Login-container" style={ColorHandler}>
    <h2  style={ColorHandler}>Conferm Order</h2>

      <div class="form-group" >
        <label >Name:</label>
        <input type="text" id="username" name="username" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)} style={ColorHandler}   />
      </div>
      <div class="passwordgroup">
        <label>Number:</label>
        <input type="number" id="password" name="number" placeholder="Enter your Number" onChange={(e)=>setnumber(e.target.value)} style={ColorHandler}  />
      </div>
      {/* {
        name.length>2 && number.length>10?<button id='btnid'  class="btn" onClick={()=>dispatch(AdminCart(cart))} >Conferm</button>:<button class="btn" disabled="disabled" id='btnid' onClick={()=>dispatch(AdminCart(cart))}
         >Conferm</button>
      } */}
      {
        name.length>2 && number.length>10?<button id='btnid'  class="btn" onClick={HandelAdmitCart} style={ColorHandler} >Conferm</button>:<button class="btn" disabled="disabled" id='btnid' onClick={HandelAdmitCart}
        style={ColorHandler}   >Conferm</button>
      }
      <Link to='/admin' >  <button>admin</button></Link>
    <br />

  </div>
     </div>
        </div>
    </div>
    </>
  )
}

export default AddtoCart


