import React from 'react'
import {RocketOutlined, StarOutlined, ThunderboltOutlined} from '@ant-design/icons'

import './brands.less'

const Brands = () => {
  return (
    <div className={'brands__wrapper'} >
      {
        brands.map((brand: any, key: any) => {
          return (
            <div key={key} className={'brand__wrapper'}>
              <div className={'brand__content'} >
                <div>
                  {brand.icon}
                </div>
                <div className={'h3'}>
                  {brand.title}
                </div >
              </div >
            </div >
          )
        })
      }
    </div >
  )
}

export default Brands


const brands = [
  {
    title: 'Mossberg',
    icon: <ThunderboltOutlined className={'brand__icon'}/>
  },
  {
    title: 'Beretta',
    icon: <RocketOutlined className={'brand__icon'}/>
  },
  {
    title: 'Heckler and Koch',
    icon: <StarOutlined className={'brand__icon'}/>
  },
  {
    title: 'Remington',
    icon: <StarOutlined className={'brand__icon'}/>
  }
]