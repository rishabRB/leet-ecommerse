import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Home } from '@mui/icons-material';
import { publicRequest } from '../requestMethod';




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
const Agreement=styled.span`
font-size: 12px;
margin: 40px 0;
${mobile({display:'none'})}
`
const Button=styled.button`
width: 40%;
margin-top: 10px;
border: none;
border-radius: 10px;
padding: 15px 20px;
background-color: teal;
color: #fff;
`
const LinkContainer=styled.div`
margin:5px 2px;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Success = styled.span`
  color:green;
  margin:0 5px;
  ${mobile({fontSize:"10px"})}
`;

const Error = styled.span`
  color: red;
  margin:0 5px;
  ${mobile({fontSize:"10px"})}
`;

const Register = () => {

  const navigate=useNavigate();
  const [user,setuser]=useState({fullname:"",username:"",password:"",mobile:"",email:"",confirmPassword:""})
  const [success,setsuccess]=useState(null)

  const handleClick=async(e)=>{
    e.preventDefault();
  if(user.password!==user.confirmPassword){
      alert("PASSWORD NOT MATCH ")
    }
  else if(user.mobile.length!==10){
    alert("MOBILE SHOULD CONTAIN 10 DIGITS")
  }  
  else{
    await publicRequest.post("/auth/register",user).then(()=>{
      setsuccess(true)
      setTimeout(()=>{
        navigate("/login")
      },1000)
      setsuccess(null)
    }).catch((err)=>{
      setsuccess(false)
      console.log(err)
    })
  }
}

const handleupdate=(e)=>{
  setuser({...user,[e.target.name]:e.target.value})

}



    return (
        <Container>
        <LogoContainer>
        <Logo>LEET.</Logo>
        <LogoLine>Modern way of shopping</LogoLine>
        </LogoContainer>
        <Wrapper>
        <Home onClick={()=>navigate("/")} style={{cursor:"pointer", fontSize:"30px"}}/>

              <Title>CREATE AN ACCOUNT</Title>
              <Form onSubmit={handleClick}>
              <Input required name="fullname" type="text" placeholder=' Full name' onChange={handleupdate}/>
              <Input required name="username" type="text" placeholder='Username' onChange={handleupdate} />
              <Input name="mobile"  type="tel" placeholder='Mobile number' onChange={handleupdate} />
              <Input required name="email" placeholder="Email" type="email" onChange={handleupdate}/>
              <Input required name="password" placeholder='Password' type='password' onChange={handleupdate} />
              <Input required name="confirmPassword" placeholder='Confirm Password' type='password' onChange={handleupdate}/>
              <Input style={{backgroundColor:"teal"}} type="submit" value="CREATE" />
              </Form>
              <Agreement>
                  By creating an account,I consent to the processing of my personal date in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              {success && <Success>Account created ! Redirecting to login page</Success>}
              {success==false && <Error>Something went wrong...</Error>}
              <LinkContainer>
              <Link onClick={()=>navigate("/login")}>ALREADY HAVE AN ACCOUNT</Link>
              </LinkContainer>
          </Wrapper>
        </Container>
    )
}

export default Register
