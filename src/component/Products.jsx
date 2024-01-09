import React, { useContext } from 'react'
import { productContext } from '../Prcontext/Prcontext';
import { Link } from 'react-router-dom';
function Products() {
     let{data, addToCart} = useContext(productContext);
    
  return (
    <div style={{display:"flex" , flexWrap:"wrap", justifyItems:"center", alignItems:"center", justifyContent:"center" }}>
      
      {
        data.map((items,i)=>{
          return (
          <div key={i} style={{width:""}}>
            
            <span><img src={items.thumbnail} alt="" width={"60%"}/></span>
            <h6> Title: {items.title}</h6>
            <h3>Price: {items.price}</h3>
            <Link to="/cart">
              <button  onClick={()=>{
                addToCart(items)
              }}>Add to Cart</button>
            </Link>
          </div>
          )
        })
      }
    </div>
  )
}

export default Products