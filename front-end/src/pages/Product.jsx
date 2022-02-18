import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar/navbar';
import Announcement from '../Components/Announcement/announcement'
import NewLetter from '../Components/NewLetter/NewLetter'
import Footer from '../Components/Footer/footer'
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";
import { useLocation } from 'react-router';
import { publicRequest } from '../requestMethod';
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from 'react-redux';



const Container=styled.div``
const Wrapper=styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}

`

const ImgContainer=styled.div`
flex: 1;

`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}

`
const Info=styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}

`
const Title=styled.h1`
font-weight: 200;
`

const Desc=styled.p`
margin: 20px 0;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0;
${mobile({ width: "100%" })}

`

const Filter=styled.div`
display: flex;
`
const FilterText=styled.h3`
margin:10px;
font-size: 20px;
font-weight: 200;

`

const FilterColor=styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
margin:5px  10px;
background-color:${props=>props.color};
`

const FilterSize=styled.select`
margin-left: 10px;
padding:10px;
`
const FilterSizeOption=styled.option`
`


const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}

`

const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount=styled.h3`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button=styled.button`
border: none;
padding:15px;
background-color:teal;
color: #fff;
font-weight:700;
transition: all 0.5s ease;

&:hover{
color: #111;
font-weight: 800;
}
`


const Product = () => {

    const location=useLocation()
    const id=location.pathname.split("/")[2]
    const [product,setProduct]=useState([])
    const [quantity,setQuantitiy]=useState(1);
    const [size,setSize]=useState("M")
    const [color,setColor]=useState("")
    const dispatch=useDispatch() 


    useEffect(() => {
      const getProduct=async()=>{
        try{
            const res=await publicRequest.get(`http://localhost:3000/api/product/find/${id}`)
            setProduct(res.data)
          }catch(err){
              console.log(err)
          }
      } 
      getProduct()
    
     },[id])
 
    //handling qauntity
    const handleQuantity=(props)=>{
     if(props==="desc"){
        quantity>1 && setQuantitiy(quantity-1)
     }
     else {
          setQuantitiy(quantity+1) 
     }
    }

   const handleClick=()=>{
       dispatch(
        addProduct({...product,quantity,color,size})
       )
     
   }
       
    return (
      <Container>
       <NavBar />
       <Announcement />
       <Wrapper>
        <ImgContainer>
        <Image src={product.img} />
        </ImgContainer>
        <Info>
            <Title>{product.title}</Title>
            <Desc> 
            {product.decs}
            </Desc>
            <Price>${product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterText>Color</FilterText>
                        {product.color?.map((c) => (
                        <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
                </Filter>
                <Filter>
                  <FilterText>Size</FilterText>
                   <FilterSize onChange={(e) => setSize(e.target.value)}>
                   {product.size?.map((s) => (
                  <FilterSizeOption value={s} key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleQuantity("desc")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("asc")}/>    
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
        </Info>
       </Wrapper>    
       <NewLetter />
       <Footer />
      </Container>
    )
}

export default Product
