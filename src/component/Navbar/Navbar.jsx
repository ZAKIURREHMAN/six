import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getCart } from '../feature/cartSlice'
import About from '../About/About'
function Navbar(props) {
    const {cart,totalQuantity} = useSelector((state)=>state.allcart)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCart())
    },[cart])
    const FunColorHandler = ()=>{
        if(props.mode === "white")
        return{
          backgroundColor:'#191825',
          color:'#FDE5EC',
          
        }
      }
    const ColorHandler = FunColorHandler()
  return (
    <>
    <nav>
        <div className="main-navbar-container" style={ColorHandler}>
            <div className="navbar-items"style={ColorHandler}>
                <img src="/logo/logo.jpeg" alt="" style={ColorHandler} />
            </div>
            <div className="navbar-itemse">
            </div>
            <div className="navbar-items"style={ColorHandler}>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox"> <i class="fa fa-bars" aria-hidden="true" id='icon' onClick={props.ResponsiveHandler} > </i>  </label>
                <ul>
                    <Link to='/' ><li style={ColorHandler}><a >Home</a></li></Link>
                    <Link to='/about'  ><li style={ColorHandler}  ><a>About</a></li></Link>
                    <Link  to='almobiles' ><li style={ColorHandler}  ><a>AllMobiles</a></li></Link>
                    <Link to='/content' ><li style={ColorHandler} ><a>content</a></li></Link>
                </ul>
            </div>
           
            <div className="navbar-items"style={ColorHandler}>
                <div className="addtocart">

            {
             props.loginuser && props.loginuser._id?<Link to='/addtocart' >
             <div className="strong">
                 <strong>{totalQuantity}</strong>
                 </div>
             <i class="fa-solid fa-cart-plus"style={ColorHandler}   ></i>
             </Link> :<Link to='/login' >
            <div className="strong">
                <strong>{totalQuantity}</strong>
                </div>
            <i class="fa-solid fa-cart-plus"style={ColorHandler}></i>
            </Link> 
            }
            
                </div>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar