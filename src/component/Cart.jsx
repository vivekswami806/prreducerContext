import React, { useContext, useState } from 'react'
import { productContext } from '../Prcontext/Prcontext'
import IncDec from './IncDec';

function Cart() {
 let{ cart}= useContext(productContext)
 console.log(cart);
  return (
    <div>
       {
        cart.map((items,i)=>{
          return(<div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}>
             <p>{i}</p>
             <span> <img src={items.thumbnail } alt="" /> </span>
             <p>{items.price} </p>
             <p><IncDec items={items}/> </p>
             
             <p>Total Amount: {items.count * items.price} </p>
          </div>)
        })
       }
    </div>
  )
}

export default Cart