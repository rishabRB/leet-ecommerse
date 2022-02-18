import React from 'react'
import Announcement from '../Components/Announcement/announcement';
import Categories from '../Components/Categories/categories';
import Footer from '../Components/Footer/footer';
import NavBar from '../Components/NavBar/navbar';
import NewLetter from '../Components/NewLetter/NewLetter';
import Products from '../Components/Products/Products';
import Slider from '../Components/slider/slider'
const Home = () => {
    return (
        <>
        <Announcement />
        <NavBar />
        <Slider />
        <Categories />
        <Products />
        <NewLetter />
        <Footer />
        </>
    )
}

export default Home
