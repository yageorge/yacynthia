import React from 'react'
import {OverPack} from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin'

import './metrics.less'

TweenOne.plugins.push(Children)

const Metrics = () => {
  return (
    <div className={'metrics__wrapper'} >
      {
        metrics.map((metric: any, key: any) => {
          return (
            <OverPack >
              <QueueAnim
                key={key}
                leaveReverse
                type={'bottom'}
                duration={1000} >
                <div key={key} className={'metric__wrapper'} >
                  <div className={'metric__content'} >
                    <OverPack >
                      <TweenOne
                        animation={{
                          duration: 1250,
                          Children: {value: metric.value, floatLength: 0}
                        }}
                        className={'metric__content__value'}>
                        0
                      </TweenOne >
                    </OverPack >
                    <div className={'h1'} >
                      {metric.title}
                    </div >
                  </div >
                </div >
              </QueueAnim >
            </OverPack >

          )
        })
      }
    </div >
  )
}

export default Metrics

const metrics = [
  {
    title: 'TRAINED MEMBERS',
    value: '265'
  },
  {
    title: 'AWARDS',
    value: '12'
  }
]