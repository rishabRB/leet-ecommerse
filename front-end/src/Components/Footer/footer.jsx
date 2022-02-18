import { Facebook, Instagram, MailOutline,Room, Phone, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container=styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const Left=styled.div`
flex: 1;
display: flex;
padding: 20px;
flex-direction:column;
`
const Logo=styled.h1``
const Desc=styled.div`
margin: 20px 0;
`
const SocialContainer=styled.div`
display: flex;

`

const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${(props)=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
cursor: pointer;

`


const Center=styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title=styled.h3`
margin-bottom: 30px;
`

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right=styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Payment=styled.img`
width: 50%;
`



const Footer = () => {
    return (
        <Container>
          <Left>
            <Logo> LEET.</Logo>
            <Desc>
             There are many variations of passages of Lorem Ipsum available, but
             the majority have suffered alteration in some form, by injected
             humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E20023'>
                     <Pinterest />
                </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>Usefull Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
          </Center>
          <Right>
            <Title >Contact</Title>
            <ContactItem> <Room style={{marginRight:'10px'}}/> BCE Bhagalpur,Bhagalpur</ContactItem>
            <ContactItem><Phone style={{marginRight:'10px'}}/>+919304915269</ContactItem>
            <ContactItem><MailOutline style={{marginRight:'10px'}}/>bibhuty82@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
        </Container>
        
    )
}

export default Footer
