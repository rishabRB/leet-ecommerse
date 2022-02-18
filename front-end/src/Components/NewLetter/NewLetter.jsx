import { Send } from '@mui/icons-material';
import React,{useState} from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container=styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin:30px;

`

const Title=styled.h1`
font-size:70px;
margin-bottom: 20px;
${mobile({ fontSize: "50px" })}
`

const Description=styled.div`
font-size:24px;
font-weight: 300;
margin-bottom:20px;
${mobile({ textAlign: "center" ,fontSize:"20px"})}
`
    

const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`
    
const Input=styled.input`
border:none;
flex:6;
padding-left: 20px;
`
const Button=styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`

const Success=styled.span`
color:green;
margin:5px 0;
`


const NewLetter = () => {


    const [send,setSend]= useState(null);

    return (
        <Container>
           <Title>NewLetter</Title>
           <Description>Get timely updates for your favorite products </Description>
           <InputContainer>
           <Input placeholder='Your Email'/>
           <Button onClick={()=>setSend(true)}>
               <Send />
           </Button>
           </InputContainer>
           {send && <Success>Thank you for subscribing ! You will now recive update through email</Success>}            
        </Container>
    )
}

export default NewLetter
