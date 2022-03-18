import './styles/antdCustom.less' // AntD Custom Styles
import {Layout} from 'antd'
import React from 'react'

import LandingCarousel from './layouts/sections/landing/carousel'
import LandingFeatures from './layouts/sections/landing/landingFeatures'
import MainFooter from './layouts/sections/footer'
import MainHeader from './layouts/sections/header'
import Metrics from './layouts/sections/landing/metrics'
import Brands from './layouts/sections/landing/brands'
import c5 from '../public/assets/images/c5.jpeg'
import Courses from './layouts/sections/landing/courses'

function App() {
  const {Content} = Layout

  return (
    <Layout style={{}}>
        <MainHeader/>
        <Content >
          <LandingCarousel />
          <LandingFeatures />
          <div>
            <img src={c5} style={{height: '42rem', width: '100%', objectFit: 'contain'}} alt="img" />
          </div>
          <Metrics/>
          <Courses/>
          <Brands/>
        </Content >
        <MainFooter/>
    </Layout >
  )
}

export default App
