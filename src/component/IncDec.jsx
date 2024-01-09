import React, { useContext, useState } from 'react'
import { productContext } from '../Prcontext/Prcontext'

const IncDec = ({items}) => {
   let {incHandel,dechandel}= useContext(productContext)
  return (
    <div>
        <button onClick={()=>{
                dechandel(items.id)
        }}> - </button >{items.count} <button onClick={()=>{
            incHandel(items.id)
        }}> +</button>
    </div>
  )
}

export default IncDec