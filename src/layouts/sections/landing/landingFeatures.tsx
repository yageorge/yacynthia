import React from 'react'
import './landingFeatures.less'
import {RocketOutlined, ThunderboltOutlined, StarOutlined} from '@ant-design/icons'

const LandingFeatures = () => {
  return (
    <div className={'features__wrapper'} >
      {
        features.map((feature: any, key: any) => {
          return (
            <div key={key} className={'feature__wrapper'}>
              <div className={'feature__content'} >
                <div>
                  {feature.icon}
                </div>
                <div className={'h3'} >
                  {feature.title}
                </div >
                <div
                  className={'h1'}
                  style={{
                    marginTop: '1rem'
                  }}
                >
                  {feature.description}
                </div >
              </div >
            </div >
          )
        })
      }
    </div >
  )
}

export default LandingFeatures

const features = [
  {
    title: 'CERTIFIED INSTRUCTOR',
    description: 'Since 2015 I have been bringing the IDF way of shooting to you. With courses both in the US and Canada. I taught the Israeli shooting doctrine to dozens of students both civilians, police, men and women. I head the course and bring years of experience also being a shooting instructor in the Israeli defense force and instructing civilians world wide.',
    icon: <ThunderboltOutlined className={'feature__icon'}/>
  },
  {
    title: 'IPSC SHOOTER',
    description: 'I was introduced to handguns only when I finished my army service in Ipsc shooting . So I did a course to be certified and now am a professional competition shooter in Israel and abroad. My fist handgun was the S&W mnp pro and now sponsored by a boutique handgun company in Israel called BUL ARMORY.',
    icon: <RocketOutlined className={'feature__icon'}/>
  },
  {
    title: 'IDF VETERAN',
    description: 'In my IDF service I had to know and learn down to the smallest detail about all the rifle and machine guns that the IDF uses so i could certify infantry combat unites. Today I\'m exposed to other guns by being a presenter of many gun company’s in Israel and the USA such as: SILVER SHADOW, IWI, LAHAV, FAB DEFENCE, FOBUS HOLSTERS and currently working for EMTAN SMALL ARMS and ROMTES targets. I also presents ZAHAL company and promote tactical clothing , holster and target company\'s.',
    icon: <StarOutlined className={'feature__icon'}/>
  },
  {
    title: 'STUNTS TRAININGS',
    description: 'Training actors with basics and advanced firearms, shooting, and combat skills',
    icon: <StarOutlined className={'feature__icon'}/>
  }
]