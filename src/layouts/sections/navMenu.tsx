import React from 'react'
import {Menu} from 'antd'

const NavMenu = () => {
  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
      <Menu.Item key='1' style={{alignSelf:'center'}}>Home</Menu.Item >
      <Menu.Item key='2' style={{alignSelf:'center'}}>Courses</Menu.Item >
      <Menu.Item key='3' style={{alignSelf:'center'}}>Achievements</Menu.Item >
      <Menu.Item key='4' style={{alignSelf:'center'}}>News</Menu.Item >
      <Menu.Item key='5' style={{alignSelf:'center'}}>Contact</Menu.Item >
    </Menu >
  )
}

export default NavMenu