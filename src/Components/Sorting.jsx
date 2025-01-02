import { useEffect, useState } from 'react'
import {products} from '../assets/frontend_assets/assets'
const [product ,setproducts] =useState([])

const Swaping = (element1 , element2)=>{
    const box = element1
    element1 = element2
    element2 = box
}

export const Sorting = (allproducts , sortproducs)=>{
    
    useEffect(()=>{
        const data = allproducts.filter((el)=>el)
        setproducts(data)
      },[])


    for(let i = 0 ; i < sortproducs.length ; i++){
        for(let j = 0 ; j < sortproducs.length ; j ++){
                if(sortproducs[j].price > sortproducs[j+1].price){
                    Swaping(sortproducs[j] ,  sortproducs[j+1])
                }
        }
    }
    
}








 