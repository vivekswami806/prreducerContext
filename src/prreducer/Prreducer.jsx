function Prreducer(state, action) {
  switch (action.type) {
    // case "loading":
    //     return {...state, isLoding:true}
    case "fetchdata":
      return { ...state, data: action.payload };
    case "addcart":
      let count = 1;
      let { id } = action.payload;
      
      let findData = state.cart.find((items) => {
        return items.id == id;
      });
      if(findData){
      let cartArr=  state.cart.map((items)=>{
                if(items.id==findData.id){
                    let finalCount =items.count +count
                    return {
                        ...items,count:finalCount
                    }
                }else{
                    return{
                        ...items
                    }
                }
        })
        return{ ...state, cart:cartArr}
      }else{
        let findData = state.data.find((items) => {
            return items.id == id;
          });
        let cartData = {
            count,
            ...findData,
          };
          return { ...state, cart: [...state.cart, cartData] };

      }
      
     
    case "inc":
      console.log(action.payload);
      let updateCart = state.cart.map((items) => {
        if (items.id == action.payload) {
          items.count = items.count + 1;
        }
        return items;
      });
      return { ...state, cart: updateCart };
    case "dec":
      let updateCart1 = state.cart.map((items) => {
        if (items.id == action.payload) {
          if (items.count > 1) items.count = items.count - 1;
        }
        return items;
      });
      return { ...state, cart: updateCart1 };

    default:
      return state;
  }
}
export default Prreducer;
