import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = [
    <img src="https://images.bewakoof.com/t320/women-s-black-friends-slim-fit-t-shirt-238063-1651248028-4.jpg" alt="" />,
    <img src="https://images.bewakoof.com/t320/navy-blue-half-sleeve-t-shirt-232381-1635412162-5.jpg" alt="" />,
    <img src="https://images.bewakoof.com/t320/jet-black-half-sleeve-t-shirt-232388-1635410396-5.jpg" alt="" />,
    <img src="https://images.bewakoof.com/t320/women-s-black-t-shirt-232388-1651248108-1.jpg" alt="" />,
    <img src="https://images.bewakoof.com/t320/men-s-white-solid-polo-t-shirt-443183-1649996647-1.jpg" alt="" />,
    <img src="https://images.bewakoof.com/t320/red-demon-half-sleeve-t-shirt-497029-1652075360-1.jpg" alt="" />
     
];


    export const Carousel = () => (
        <AliceCarousel
            animationType="fadeout" 
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
           
        />
    );
