import React from 'react'
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons'
import {Layout} from 'antd'

import './footer.less'

const MainFooter = () => {
  const {Footer} = Layout
  return (
    <Footer>
      <div className={'footer__wrapper'} >
        <div className={'footer__social__wrapper'} >
          <InstagramOutlined className={'social__icon'} />
          <FacebookOutlined className={'social__icon'} />
          <LinkedinOutlined className={'social__icon'} />
        </div >
        <span className={'h1'} >
        Cynthia Yaacoub ©2022 Created by OneDayLab
      </span ></div >
    </Footer >
  )
}

export default MainFooter