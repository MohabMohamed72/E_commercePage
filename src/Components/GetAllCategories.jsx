import ProductCard from "./ProductCard"

export let element = (categ ,product)=>{

      if(categ.length === 1){
        console.log(1)
      }
      if(categ.length === 2){
        // product.filter((el)=> el.category===)
      }
      if(categ.length === 3){
        console.log(3)
      }
      // if(select === 'lth'){
      //   return(
      //     <>
      //     {
      //           product.map((el)=>el.price === 'Men')
      //           .filter((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //       }
      //     </>
      //   )
      // }
      // if(select === 'htl'){
      //   return(
      //     <>
          
      //     </>
      //   )
      // }
      // if(select === 'rel'){
      //   return(
      //     <>
          
      //     </>
      //   )
      // }
      if(categ.includes('Mens')){
        return(
          <>
          {
              product.filter((el)=>el.category === 'Men')
              .map((el)=>{
                return(
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
           }
          </>
        )
      }
      if(categ.includes('Womens')){
        return(
          <>
            {
          product.filter((el)=>el.category === 'Women')
          .map((el)=>{
            return(
                <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
            }        
          </>
        )
      }
      if(categ.includes('Kids')){
        return(
          <>
            {
              product.filter((el)=>el.category === 'Kids')
              .map((el)=>{
                return(
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
        }
          </>
        )
      }
      if(categ.includes('Kids') && categ.includes(Mens)){
        return(
          <>
            {
              product.filter((el)=>el.category === 'Kids' && el.category === 'Kids')
              .map((el)=>{
                return(
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
        }
          </>
        )
      }
      // if(Topwear){
      //   return(
      //     <>
      //         {
      //           product.filter((el)=>el.subCategory === 'Topwear')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(Bottomwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Winterwear')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
  
      // }
      // if(Winterwear){
      //   return(
      //     <>
      //          {
      //           product.filter((el)=>el.subCategory === 'Bottomwear')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(mens && Topwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Topwear' && el.category === 'Men')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(mens && Bottomwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Bottomwear' && el.category === 'Men')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(mens && Winterwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Winterwear' && el.category === 'Men')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(womens && Topwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Topwear' && el.category === 'Women')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(womens && Bottomwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Bottomwear' && el.category === 'Women')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(womens && Winterwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Winterwear' && el.category === 'Women')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(kids && Topwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Topwear' && el.category === 'Kids')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(kids && Bottomwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Bottomwear' && el.category === 'Kids')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
      // if(kids && Winterwear){
      //   return(
      //     <>
      //     {
      //           product.filter((el)=>el.subCategory === 'Winterwear' && el.category === 'Kids')
      //           .map((el)=>{
      //             return(
      //                 <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
      //             )
      //           })
      //     }
      //     </>
      //   )
      // }
    
     return(
      <>
      {
              product.map((el)=>{
                return(
                    <ProductCard  id={el._id} image = {el.image[0]} title = {el.name} price ={el.price} />
                )
              })
            }
      </>
     ) 

   
  
}