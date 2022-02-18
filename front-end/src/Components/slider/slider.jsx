import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React,{useState} from 'react'
import styled from 'styled-components'
import { SlideData } from './slidedata'
import { mobile } from '../../responsive'
import { useNavigate } from 'react-router'


const Container=styled.div`
height:100vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}

`   
const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${({direction})=>direction === 'left' && '10px'};
right: ${({direction})=>direction === 'right' && '10px'};
z-index:2;
`

const Wrapper=styled.div`
height: 100%;
display: flex;
flex-direction: row;
transform: translateX(${({slideIndex})=>slideIndex*-100}vw);
transition: all 1.5s ease;
`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color:${({bg})=>bg};
`
const ImageContainer=styled.div`
flex: 1;
height: 100%;
`

const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`
const Title=styled.h1`
font-size: 78px;
`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:1px;
text-transform: uppercase;
`
const Button=styled.button`
padding: 10px;
font-size:20px;
background-color: transparent;
cursor: pointer;
`

const Image=styled.img`
height: 80%;
`

const Slider = () => {

const [slideIndex,setslideIndex]=useState(0)

const handleClick=(direction)=>{
 if(direction==='left'){
     setslideIndex(slideIndex > 0 ? slideIndex-1 : 2);
 }
 else{
     setslideIndex(slideIndex < 2 ? slideIndex+1 : 0);
 }
}
 
const navigate=useNavigate()

    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow >
            <Wrapper slideIndex={slideIndex}>
              {SlideData.map((slide) =>( 
                <Slide bg={slide.bg}>
                    <ImageContainer>
                        <Image src={slide.image} />
                    </ImageContainer>
                    <InfoContainer>
                       <Title>{slide.title}</Title>
                       <Desc>{slide.desc}</Desc>
                       <Button onClick={()=>navigate(`/products/${slide.category}`)}>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
              ))} 
            </Wrapper>
            <Arrow direction='right' onClick={handleClick}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )

}

export default Slider
