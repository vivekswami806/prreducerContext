import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../prreducer/Prreducer"
export let productContext = createContext();
function Prcontext({ children }) {
  let initialvalue={
    data:[],
    cart:[]
  }
  let [state,dispatch ] = useReducer(reducer, initialvalue)
  let url = "https://dummyjson.com/products";
  async function fetchDataFromUrl() {
   
    let res = await axios.get(url);
    let data = await res.data.products;
    dispatch({type:"fetchdata",payload:data})
  }
  useEffect(() => {
    fetchDataFromUrl();
  }, []);
 function addToCart(data){
   dispatch({type:"addcart", payload:data})
 }
 function incHandel(id){
  dispatch({type:"inc", payload:id})
 }
 function dechandel(id){
  dispatch({type:"dec",payload:id})
 }
  return (
    <div>
      <productContext.Provider value={{ ...state ,addToCart,incHandel,dechandel}}>
        {children}
      </productContext.Provider>
    </div>
  );
}

export default Prcontext;
