import React from 'react'
import {Carousel} from 'antd'
import c1 from '../../../../public/assets/images/c1.jpeg'
import c2 from '../../../../public/assets/images/c2.jpeg'
import c3 from '../../../../public/assets/images/c3.jpeg'
import c4 from '../../../../public/assets/images/c4.jpeg'

const LandingCarousel = () => {
  return (
    <Carousel autoplay style={{
      height: '42rem',
      width: '100%',
      marginTop: '4rem'
    }} >
      <div key={'1'} >
        <img src={c1} style={{height: '42rem', width: '100%', objectFit: 'contain'}} alt="img" />
      </div >
      <div key={'2'} >
        <img src={c2} style={{height: '42rem', width: '100%', objectFit: 'contain'}} alt="img" />
      </div >
      <div key={'3'} >
        <img src={c3} style={{height: '42rem', width: '100%', objectFit: 'contain'}} alt="img" />
      </div >
      <div key={'4'} >
        <img src={c4} style={{height: '42rem', width: '100%', objectFit: 'contain'}} alt="img" />
      </div >
    </Carousel >
  )
}

export default LandingCarousel