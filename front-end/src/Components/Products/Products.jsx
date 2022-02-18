import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'

const Container=styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {

    const [products,setproducts]=useState([])
    const [filterProduct,setfilteredProduct]=useState([])

    useEffect(() => {
       const fetchproduct=async()=>{
        try{
            const res=await axios.get(cat ? 
            `http://localhost:3000/api/product?category=${cat}` 
            : "http://localhost:3000/api/product")
            setproducts(res.data);
        }catch(err){
            console.log(err)
        }
    }
       fetchproduct()
    },[cat])

    //filter product 

    useEffect(() => {
        cat &&
          setfilteredProduct(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);


      //sort products
      useEffect(()=>{
        if(sort==="newest"){
          setfilteredProduct((prev)=>
            [...prev].sort((a,b)=> a.createdAt-b.createdAt))
        }
        else if(sort==="asc"){
          setfilteredProduct((prev)=>
          [...prev].sort((a,b)=>a.price-b.price)
          )
        }
        else{
          setfilteredProduct((prev)=>[...prev].sort((a,b)=>b.price-a.price)) 
        }
      },[sort])    
    return (
        <Container>
         {cat ? filterProduct.map(product=>(
             <Product product={product} key={product.id} />)) 
             :
             products.slice(0,8).map(product=>(
               <Product product={product} key={product.id} />
             ))
         }
        </Container>
    )
}

export default Products
