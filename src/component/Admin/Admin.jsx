import React from 'react'
import { useSelector } from 'react-redux'
import './Admin.css'
function Admin() {
    const {admincart,totalPrice,totalQuantity} = useSelector((state)=>state.allcart)
    const secondimg = admincart[0]
  return (
    <>
    <h1>Admin DashBoard</h1>
    <div className="main-admin-container">
        {/* <div className="display-images"> */}
        {
        secondimg.map((u)=>{
            return (
                <div className="main-class-imgdsiplay">
                    <img src={u.url} alt="" />
                    <h6>Price: ${u.price}</h6>
                    <h6>Quantity: ${u.quantity}</h6>

                </div>
            )
        })
    }
    <hr />
    </div>
<div className="totalpriceandquantity">
<h2>TotalQuantity</h2> <h2>$:{totalQuantity}</h2>
<h2>TotalPrice</h2> <h2>$:{totalPrice}</h2>
</div>
 <hr />
    </>
  )
}

export default Admin