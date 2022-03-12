import './styles/antdCustom.less' // AntD Custom Styles
import {Layout, Menu, Carousel} from 'antd'
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons'
import React from 'react'

import c1 from '/assets/images/c1.jpeg'
import c2 from '/assets/images/c2.jpeg'
import c3 from '/assets/images/c3.jpeg'
import c4 from '/assets/images/c4.jpeg'

const features = [
  {
    title:'CERTIFIED INSTRUCTOR',
    description:'Since 2015 I have been bringing the IDF way of shooting to you. With courses both in the US and Canada. I taught the Israeli shooting doctrine to dozens of students both civilians, police, men and women. I head the course and bring years of experience also being a shooting instructor in the Israeli defense force and instructing civilians world wide.'
  },
  {
    title:'IPSC SHOOTER',
    description:'I was introduced to handguns only when I finished my army service in Ipsc shooting . So I did a course to be certified and now am a professional competition shooter in Israel and abroad. My fist handgun was the S&W mnp pro and now sponsored by a boutique handgun company in Israel called BUL ARMORY.'
  },
  {
    title:'IDF VETERAN',
    description:'In my IDF service I had to know and learn down to the smallest detail about all the rifle and machine guns that the IDF uses so i could certify infantry combat unites. Today I\'m exposed to other guns by being a presenter of many gun company’s in Israel and the USA such as: SILVER SHADOW, IWI, LAHAV, FAB DEFENCE, FOBUS HOLSTERS and currently working for EMTAN SMALL ARMS and ROMTES targets. I also presents ZAHAL company and promote tactical clothing , holster and target company\'s.'
  },
]

function App() {
  const {Header, Content, Footer} = Layout

  return (
    <Layout >
      <div style={{
        height: '34px',
        backgroundColor: 'hsla(201, 59%, 11%, 1)',
        paddingTop: '14px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center'
      }} >
        <InstagramOutlined style={{fontSize: '22px', margin: '12px'}} />
        <FacebookOutlined style={{fontSize: '22px', margin: '12px'}} />
        <LinkedinOutlined style={{fontSize: '22px', margin: '12px'}} />
      </div >
      <Header >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
          <Menu.Item key="1" >Home</Menu.Item >
          <Menu.Item key="2" >Courses</Menu.Item >
          <Menu.Item key="3" >Achievements</Menu.Item >
          <Menu.Item key="4" >News</Menu.Item >
          <Menu.Item key="5" >Contact</Menu.Item >
        </Menu >
      </Header >

      <Content >
        <Carousel autoplay style={{
          backgroundColor: 'white',
          height: '32rem',
          width: '100%'
        }} >
          <div key={'1'} >
            <img src={c1} style={{height: '32rem', width: '100%', objectFit: 'contain'}} alt="img" />
          </div >
          <div key={'2'} >
            <img src={c2} style={{height: '32rem', width: '100%', objectFit: 'contain'}} alt="img" />
          </div >
          <div key={'3'} >
            <img src={c3} style={{height: '32rem', width: '100%', objectFit: 'contain'}} alt="img" />
          </div >
          <div key={'4'} >
            <img src={c4} style={{height: '32rem', width: '100%', objectFit: 'contain'}} alt="img" />
          </div >
        </Carousel >

        <div style={{
          backgroundColor: 'red',
          width: '100%',
          height: '32rem',
          display:'flex',
          flexDirection:'row'
        }}>
          {
            features.map((feature:any,  key:any)=>{
              return(
                <div style={{
                  backgroundColor: 'green',
                  width: '100%',
                  height: '32rem',
                  margin:'2rem',
                  padding:'2rem',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <div key={key}>
                    {feature.title}
                  </div>
                  <div key={key}>
                    {feature.description}
                  </div>
                </div>
              )
            })
          }
        </div >
      </Content >

      <Footer style={{textAlign: 'center', color: 'white'}} >
        Cynthia Yaacoub ©2022 Created by OneDayLab
      </Footer >
    </Layout >
  )
}

export default App
