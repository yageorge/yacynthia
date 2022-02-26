import './styles/antdCustom.less' // AntD Custom Styles
import {Layout, Menu, Carousel} from 'antd'
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons'
import React from 'react'

import c1 from '/assets/images/c1.jpeg'
import c2 from '/assets/images/c2.jpeg'
import c3 from '/assets/images/c3.jpeg'
import c4 from '/assets/images/c4.jpeg'

const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  const {Header, Content, Footer} = Layout

  return (
    <Layout >
      <div style={{
        height:'34px',
        backgroundColor: 'hsla(201, 59%, 11%, 1)',
        paddingTop:'14px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'end',
        alignItems:'center'
      }}>
        <InstagramOutlined style={{fontSize:'22px', margin:'12px'}}/>
        <FacebookOutlined style={{fontSize:'22px', margin:'12px'}}/>
        <LinkedinOutlined style={{fontSize:'22px', margin:'12px'}}/>
      </div>
      <Header >
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} >
          <Menu.Item key='1' >Home</Menu.Item >
          <Menu.Item key='2' >Courses</Menu.Item >
          <Menu.Item key='3' >Achievements</Menu.Item >
          <Menu.Item key='4' >News</Menu.Item >
          <Menu.Item key='5' >Contact</Menu.Item >
        </Menu >
      </Header >
      <Content style={{padding: '0 0px'}} >
        <Layout style={{padding: '24px 0'}} >
          <Content style={{padding: '0 0', minHeight: 480}} >
            <Carousel autoplay>

                <img src={c1} style={{height:'600px', objectFit:'cover'}} alt='img' />

                <img src={c2} style={{height:'600px', objectFit:'cover'}} alt='img' />

                <img src={c3} style={{height:'600px', objectFit:'cover'}} alt='img' />

                <img src={c4} style={{height:'600px', objectFit:'cover'}} alt='img' />

            </Carousel>
          </Content >
        </Layout >
      </Content >
      <Footer style={{textAlign: 'center', color: 'white'}} >
        Cynthia Yaacoub ©2022 Created by OneDayLab
      </Footer >
    </Layout >
  )
}

export default App
