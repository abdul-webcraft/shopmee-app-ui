import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

const MainCarosel = () => {

    const items = MainCaroselData.map((item)=><img className='cursor-pointer h-[28rem] w-[100rem] '  role='presentation' src={item.image} alt=""/>)
    
  return (
    <div>
      <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      
    />
    </div>
  )
}

export default MainCarosel
