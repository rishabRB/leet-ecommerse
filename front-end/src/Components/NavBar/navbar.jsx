import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'
import { mobile } from '../../responsive'
import { useDispatch } from 'react-redux'
import {logout} from "../../redux/userRedux"


const Container=styled.div`
height: 60px;
${mobile({height:"50px"})}
`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`

const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language=styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`
const SearchContainer=styled.div`
  border: 1px solid #888;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input=styled.input`
border:0;
outline: none;
${mobile({ width: "50px" })}

`

const Center=styled.div`
flex: 1;
text-align: center;
`
const Logo=styled.h1`
font-size: 600;
${mobile({fontSize:"24px"})}
`

const Right=styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 5px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`


const NavBar = () => {

const quantity=useSelector(state=>state.cart.quantity)
const {currentUser}=useSelector(state=>state.user)
const dispatch = useDispatch()

const handleClick=()=>{
  dispatch(logout())
}


    return (
        <Container>
            <Wrapper>
            <Left>
             <Language>EN</Language>
             <SearchContainer>
                 <Input placeholder='search'/>
                 <Search /> 
             </SearchContainer>
            </Left>
            <Center>
              <Link to="/" style={{textDecoration:"none",color:"#111"}}>
              <Logo>LEET.</Logo>
              </Link>
            </Center>
            <Right>
           {!currentUser ? <Link to="/register" style={{color:"black",textDecoration:"none"}}>  
            <MenuItem>REGISTER</MenuItem>
            </Link> : <MenuItem>{currentUser.username.toUpperCase()}</MenuItem>}
           {currentUser ? <MenuItem style={{fontWeight:"500"}} onClick={handleClick}>LOG OUT</MenuItem> : <Link to="/login" style={{color:"black",textDecoration:"none"}}>  
            <MenuItem>SIGN IN</MenuItem>
            </Link>}
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            </Link>
             </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
