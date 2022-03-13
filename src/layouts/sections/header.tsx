import React from 'react'
import {Layout} from 'antd'
import NavMenu from './navMenu'
import BrandLogo from '../../components/images/brandLogo'

import './header.less'

const MainHeader = () => {
  const {Header} = Layout
  return (
    <Header className={'header'}>
      <div className={'header__wrapper'} >
        <div className={'brandLogo__wrapper'} >
          <BrandLogo />
        </div >
        <NavMenu />
      </div >
    </Header >
  )
}

export default MainHeader