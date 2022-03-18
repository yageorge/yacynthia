import React from 'react'
import {RocketOutlined, StarOutlined, ThunderboltOutlined} from '@ant-design/icons'

import './brands.less'
import {Carousel} from 'antd'

const Brands = () => {
  return (
    <div className={'brands__wrapper'} >
      <Carousel
        slidesToShow={3}
        autoplay
        dots={false}
        easing={'ease-in-out'}
        effect={'scrollx'}
        style={{height: '8rem', width: '100%'}}
      >
        {
          brands.map((brand: any, key: any) => {
            return (
              <div key={key} className={'brand__wrapper'} >
                <div className={'brand__content'} >
                  <div >
                    {brand.icon}
                  </div >
                  <span className={'h3'} >
                    {brand.title}
                  </span >
                </div >
              </div >
            )
          })
        }
      </Carousel >
    </div >
  )
}

export default Brands


const brands = [
  {
    title: 'Mossberg',
    icon: <ThunderboltOutlined className={'brand__icon'} />
  },
  {
    title: 'Beretta',
    icon: <RocketOutlined className={'brand__icon'} />
  },
  {
    title: 'Heckler & Koch',
    icon: <StarOutlined className={'brand__icon'} />
  },
  {
    title: 'Remington',
    icon: <StarOutlined className={'brand__icon'} />
  }
]