import React from 'react'

import './metrics.less'

const Metrics = () => {
  return (
    <div className={'metrics__wrapper'} >
      {
        metrics.map((metric: any, key: any) => {
          return (
            <div key={key} className={'metric__wrapper'}>
              <div className={'metric__content'} >
                <div className={'h8'}>
                  {metric.description}
                </div >
                <div className={'h1'} >
                  {metric.title}
                </div >
              </div >
            </div >
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
    description: '265'
  },
  {
    title: 'AWARDS',
    description: '12'
  }
]