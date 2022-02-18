import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Announcement from '../Components/Announcement/announcement'
import Footer from '../Components/Footer/footer'
import NavBar from '../Components/NavBar/navbar'

const location=useLocation
console.log(location)

const Container=styled.div``

const Heading=styled.div`
display:flex;
width:100%;
font-size:40px;
justify-content:center;
align-items:center;
color:green;
`

const Success = () => {
    return (
         <Container>
             <Announcement />
            <NavBar />
            <Heading>Order Successfull</Heading>
            <Footer />
        </Container>
)}

export default Success
