import React,{useState} from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useNavigate} from "react-router-dom";
import { Home } from '@mui/icons-material';
import {useDispatch,useSelector} from "react-redux"
import { LoginUser } from '../redux/apiCalls';


const Container=styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      display: flex;
      justify-content: center;
      align-items: center;
      ${mobile({flexDirection:"column" })}
  `
const LogoContainer=styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
${mobile({ marginTop:"-100px" })}
`
const Logo=styled.h1`
font-size: 150px;
${mobile({ fontSize: "50px" })}

`
const LogoLine=styled.span`
font-size:20px;
${mobile({ fontSize: "10px",marginBottom:"5px" })}

`

const Wrapper=styled.div`
width: 50%;
padding:50px 20px;
width: 40%;
background-color: white;
border-radius: 40px;
${mobile({ width: "75%"})}

`
const Title=styled.h1`
font-size: 24px;
font-weight: 600;
`
const Form =styled.form`
display: flex;
flex-wrap: wrap;
margin-bottom: 10px;
`
const Input=styled.input`
flex: 1;
min-width:40%;
border: 0.5px solid #888;
border-radius:10px;
margin: 20px 10px 0 0;
padding: 10px;
font-weight: 600;
`
const Button=styled.button`
width: 40%;
margin-top: 10px;
border: none;
border-radius: 10px;
padding: 15px 20px;
background-color: teal;
color: #fff;
cursor:pointer;
&:disabled{
  cursor:not-allowed;
  background-color:#8ee6e9;
}
`

const LinkContainer=styled.div`
display:flex;
flex-direction:column;
margin:5px 0;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  margin:0 5px;
  ${mobile({fontSize:"10px"})}
`;


const Login = () => {

  const navigate=useNavigate();
  const [username,setuserName]=useState("");
  const [password,setpassWord]=useState("");
  const dispatch = useDispatch();
  const {isFetching,error,currentUser}=useSelector((state)=>state.user)
  

  const handleClick=async (e)=>{
   e.preventDefault()
  //  login(dispatch,{username:userName,password:passWord})   
  //state variable name should be same as key variable nameree
  LoginUser(dispatch,{username,password})
  }



    return (
        <Container>
        <LogoContainer >
        <Logo>LEET.</Logo>
        <LogoLine>Modern way of shopping</LogoLine>
        </LogoContainer>
        <Wrapper>
        <Home onClick={()=>navigate("/")} style={{cursor:"pointer", fontSize:"30px"}}/>
              <Title>LOG IN</Title>
              <Form>
              <Input onChange={(e)=>setuserName(e.target.value)} placeholder='Email/Phone'/>
              <Input onChange={(e)=>setpassWord(e.target.value)} placeholder='Password'  />
              </Form>
              <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
              {error && <Error>Something went wrong...</Error>}
              <LinkContainer>
              <Link onClick={()=>navigate("/login")}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <Link onClick={()=>navigate("/register")}>CREATE A NEW ACCOUNT</Link>
              </LinkContainer>
          </Wrapper>
        </Container>
    )
}

export default Login
