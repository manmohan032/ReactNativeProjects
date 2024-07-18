

import { useEffect, useState } from 'react';





class productApi {
  private productData:ProductProps[]=[];
  
  private fetchPostData = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
      
     fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(json => {
       this.productData=json;
       // this.setPostData(json);
       // return json;
       setData(json)
     })
     .catch(error => {
       console.error(error);
     });
    },[])
    
    this.productData=data;
  };
  public getData=()=>{
    this.fetchPostData();
    // console.log(this.postData)
    
    return this.productData;
  }
}

export default productApi