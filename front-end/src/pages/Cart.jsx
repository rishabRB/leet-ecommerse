import React,{useState,useEffect} from 'react'
import Footer from '../Components/Footer/footer'
import NavBar from '../Components/NavBar/navbar'
import styled from 'styled-components';
import Announcement from '../Components/Announcement/announcement';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import {userRequest} from "../requestMethod"
import { useNavigate } from "react-router-dom";
// import { addProduct  } from '../redux/cartRedux';
// import { useDispatch } from 'react-redux';


const KEY=process.env.REACT_APP_STRIPE;

const Container=styled.div`
`

const Wrapper=styled.div`
${mobile({ padding: "10px" })}
`

const  Title=styled.h1`
font-weight: 300;
text-align: center;
`

const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:none;
background-color:${(props)=>props.type === "filled" ?  "black" : "teal"};
color:${(props)=>props.type === "filled" && "white"};
`

const TopTexts=styled.div`
${mobile({ display: "none" })}
`
const TopText=styled.span`
cursor: pointer;
margin: 0px 10px;
font-weight: 500;
border-bottom: 2px solid #111;
`

const Bottom=styled.div`    
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const Info=styled.div`
flex:3;
`
const Product=styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const ProductDetail=styled.div`
flex:2;
display: flex;
`
const ProductImage=styled.img`
width: 200px;
`
const Detail=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName=styled.span`

`
const ProductId=styled.span`


`
const ProductColor=styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize=styled.span`

`

const PriceDetail=styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({marginLeft:"165px"})}
`
const Hr=styled.hr`
background-color: #eeee;
border: none;
height: 1px;
`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
`

const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
` 

const ProductPrice=styled.div`
font-size: 30px;
font-weight: 300;
${mobile({ marginBottom: "20px" })}
`

const Summery=styled.div`
flex:1;
border: 3px solid #888;
border-radius: 10px;
padding: 20px;
margin: 0px 30px;
height: 40vh;
`
const SummaryTitle=styled.h1`
font-weight: 200;
`

const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props)=>props.type==="total" && "500"};
font-size: ${(props)=>props.type==="total" && "24px"};
`

const SummaryItemText=styled.div``


const Button=styled.button`
width: 100%;
padding:10px;
background-color: black;
cursor: pointer;
color: #fff;
border:none;
font-weight:600;
`


const Cart = () => {

    const cart = useSelector((state) => state.cart)
    const navigate=useNavigate()
    // const [stripeToken,setStripeToken]=useState("")

    // const onToken=(token)=>{
    // setStripeToken(token)
    // console.log(stripeToken)
    // }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //       try {
    //         const res = await userRequest.post("/checkout/payment", {
    //           tokenId: stripeToken.id,
    //           amount: 500,
    //         });
    //         navigate("/success")
    //       } catch {}
    //     };
    //     stripeToken && makeRequest();
    //   }, [stripeToken, cart.total, navigate]);

    return (
     <Container>
         <NavBar />
         <Announcement />
         <Wrapper>
          <Title>Your Bags</Title>
          <Top>
            <Link to="/">  
            <TopButton >CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>    
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product)=>(<Product>
                  <ProductDetail>
                      <ProductImage src={product.img} />
                      <Detail>
                          <ProductName><b>Product:</b> {product.title}</ProductName>
                          <ProductId><b>ID:</b>{product._id}</ProductId>
                          <ProductColor color={product.color}/>
                          <ProductSize><b>Size: </b>{product.size}</ProductSize>
                      </Detail>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                        <Remove style={{cursor:"pointer"}}/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Add style={{cursor:"pointer"}} />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
              </Product>))}
              <Hr />
            </Info>
            <Summery>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemText>${cart.total}</SummaryItemText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemText>$5.90</SummaryItemText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemText>-$5.90</SummaryItemText>
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemText>${cart.total}</SummaryItemText>
                </SummaryItem>
                {/* <StripeCheckout
                 name="Leet Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
            > */}
             <Button onClick={()=>navigate("/success")}>CHECKOUT NOW</Button>
           {/* </StripeCheckout> */}
            </Summery>
          </Bottom>
        </Wrapper>
         <Footer />
     </Container>
    )
}

export default Cart
