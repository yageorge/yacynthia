import React from 'react'
import child from '../../../../public/assets/images/child_safety_course.jpeg'
import gunCleaning from '../../../../public/assets/images/gun_cleaning_course.jpeg'
import pistol from '../../../../public/assets/images/pistol_range_course.jpeg'
import defence from '../../../../public/assets/images/self_defence_course.jpeg'

import './courses.less'

const Courses = () => {
  return (
    <div className={'courses__wrapper'} >
      {
        courses.map((course: any, key: any) => {
          return (
            <div key={key} className={'course__wrapper'} >
              <div className={'course__content'} >
                  {course.image}
                <div className={'course__title h3__b'} >
                  {course.title}
                </div >
                <div className={'course__desc h1'} >
                  {course.description}
                </div >
              </div >
            </div >
          )
        })
      }
    </div >
  )
}

export default Courses


const courses = [
  {
    title: 'PISTOL RANGE TRAINING',
    description: 'Add description to this course',
    image: <img src={pistol} className={'course__image'} alt='img' />
  },
  {
    title: 'CHILD SAFETY COURSE',
    description: 'Add description to this course',
    image: <img src={child} className={'course__image'} alt='img' />
  },
  {
    title: 'GUN CLEANING COURSE',
    description: 'Add description to this course',
    image: <img src={gunCleaning} className={'course__image'} alt='img' />
  },
  {
    title: 'SELF-DEFENCE COURSE',
    description: 'Add description to this course',
    image: <img src={defence} className={'course__image'} alt='img' />
  }
]