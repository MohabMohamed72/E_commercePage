import { createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { products } from "../assets/frontend_assets/assets";

export const Shopcontext = createContext()

const ShopcontextProvider = (props)=>{
    const [cartnumber , setCartnumber] = useState({})
    
    
    const addtocart = async(prodId, ProdSize)=>{
        let cartData = structuredClone(cartnumber);

        if(!ProdSize){
            toast.error('Select Size !!!')
            return;
        }

        if(cartData[prodId]){
            if(cartData[prodId][ProdSize]){
                cartData[prodId][ProdSize] += 1;
            }
            else{
                cartData[prodId][ProdSize] = 1;
            }
        }
        else{
            cartData[prodId]= {};
            cartData[prodId][ProdSize]= 1;
        }
        setCartnumber(cartData)
    }

    const cartcounter = ()=>{
        let counter = 0 ;
        for(const items in cartnumber ){
            for(const item in cartnumber[items]){
                if(cartnumber[items][item] > 0){
                    counter += cartnumber[items][item];
                }   
            }
        }

        return counter ;
    }

    const updatecartdata = async (prodId , ProdSize , value)=>{
        let cartData = structuredClone(cartnumber);

        if(cartData[prodId]){
            if(cartData[prodId][ProdSize] !== value){
                cartData[prodId][ProdSize] = value;
            }
        }
        setCartnumber(cartData)
    }

    const getTotalamount =  () =>{
        let total = 0 ;
        for(const items in cartnumber){
            let iteminfo = products.find((el)=>el._id === items)
            for(const item in cartnumber[items]){
                if(cartnumber[items][item] >  0 ){
                    total += iteminfo.price * cartnumber[items][item] ;  
                }
            }
        }
        return total;
    }

    // useEffect(()=>{
    //     console.log(cartnumber)
    // },[cartnumber])


    let value ={
        cartnumber , addtocart,
        cartcounter ,updatecartdata,
        getTotalamount,
    }

    return(
        <Shopcontext.Provider value={value} >
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;