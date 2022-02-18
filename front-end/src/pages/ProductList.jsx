import React, { useState } from 'react'
import styled from 'styled-components';
import NavBar from '../Components/NavBar/navbar';
import Announcement from '../Components/Announcement/announcement'
import Footer from '../Components/Footer/footer';
import Products from '../Components/Products/Products';
import NewLetter from '../Components/NewLetter/NewLetter';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';



const Container=styled.div``
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;

`
const Filter=styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`

const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}

`

const Select=styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}

`

const Option=styled.option`

`

const ProductList = () => {
    const location=useLocation()
    const cat=location.pathname.split("/")[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState("")


    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };
     
    return (
       <Container>
        <NavBar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select name="color" onChange={handleFilters}>
            <Option disabled >Color</Option>
            <Option>gray</Option>
            <Option>red</Option>
            <Option>purple</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>green</Option>
        </Select>
        <Select name="size" onChange={handleFilters}>
            <Option disabled>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
        </Select>
        </Filter>   
        <Filter><FilterText>Sort Products:</FilterText>
        <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">High to Low</Option>
            <Option value="desc">Low to High</Option>   
        </Select>
        </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <NewLetter />
        <Footer />
       </Container>
    )
}

export default ProductList
