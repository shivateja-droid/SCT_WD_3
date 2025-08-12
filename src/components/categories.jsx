import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel'



const Categories = () => {
    return (
        <>
            <Navbar />
            <div className='w-full flex mx-auto justify-center items-center h-[500px] relative'>
                <Carousel
                    baseWidth={300}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
            <Footer />
        </>
    )
}

export default Categories;
