import React, { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import gsap from 'gsap'
import styles from './index.module.less'
import { getWeather } from '@/service'
import Skycons from 'react-skycons'
import { getweatherMap } from '@/constants/home'
import { EWeatherType } from '@/constants/type'
import { ReactTyped } from 'react-typed'
import { RetweetOutlined } from '@ant-design/icons'
import { learnCategories } from '@/constants/home'
const FirstContent: FC = () => {
  const [weatherType, setWeatherType] = useState<EWeatherType>(
    EWeatherType.CLEAR_DAY
  )
  const [temp, setTemp] = useState('')
  const [isReverse, setIsReverse] = useState(false)
  useEffect(() => {
    const tl = gsap.timeline()
    // 在 useEffect 中创建动画
    tl.fromTo('#green', { x: -100 }, { x: 10, duration: 1 })
      .fromTo('#blue', { x: -100 }, { x: 15, duration: 1 }, '+=0.5')
      .fromTo('#orange', { x: -100 }, { x: 20, duration: 1 }, '+=0.5')
    getWeather('440300').then((res) => {
      setWeatherType(res.weather)
      setTemp(res.temperature)
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleReverse = () => {
    setIsReverse(!isReverse)
  }
  useEffect(() => {
    const banner = document.querySelector('.banner')

    banner?.classList.toggle('reverse', isReverse)
  }, [isReverse])

  return (
    <div className={`h-full  w-1/2 ml-[25%] z-10`}>
      <div className='left-1/4 -translate-x-1/2 w-px h-28 bg-black ml-[50%]'></div>
      <div
        className={`${
          styles.banner
        } h-1/2 overflow-hidden relative p-3 rounded-lg banner ${
          isReverse ? styles.reverse : ''
        }`}
      >
        <div style={{ display: `${isReverse ? 'none' : 'block'}` }}>
          <RetweetOutlined
            className='absolute right-3'
            onClick={handleReverse}
          />
          <div className='flex gap-3 items-center text-2xl text-[rgb(180,219,229)] mb-3'>
            <Skycons
              color='#c0f0f0'
              type={getweatherMap[weatherType].type}
              size={80}
              animate={true}
            />
            <span>{temp}&#8451;</span>
          </div>
          <div className='flex gap-4 text-[rgb(29,78,87)]'>
            <div className='flex items-center justify-start text-[rgb(29,78,87)] w-1/2 writing-vertical-rl text-orientation-upright'>
              <div
                id='green'
                className='w-4 h-36 bg-[rgba(29,78,89,0.5)] rounded-full flex items-center justify-center'
              >
                <div>大家好 我是</div>
              </div>
              <div
                id='blue'
                className='w-4  bg-[rgba(29,78,89,0.5)]  rounded-full flex items-center justify-center'
              >
                <div>小宋搬砖第一名</div>
              </div>
              <div
                id='orange'
                className='w-4  bg-[rgba(29,78,89,0.5)]  rounded-full flex items-center justify-center'
              >
                <div>这是我的个人网站</div>
              </div>
            </div>
            <div>
              <ReactTyped
                strings={['恭喜你发现了这个宝藏网站', '希望你能找到有趣的东西']}
                typeSpeed={20}
                backSpeed={30}
                loop
                showCursor
                cursorChar='！'
                className={`${styles.banner_title} text-5xl text-[rgb(29,78,87)]`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.back}  ${
            isReverse ? 'flex' : 'hidden'
          } flex-col gap-3 `}
        >
          <div className='flex justify-end mb-2'>
            <RetweetOutlined
              className='cursor-pointer'
              onClick={handleReverse}
            />
          </div>

          <div className='grid grid-cols-3 gap-3'>
            {learnCategories.map((item, index) => {
              return (
                <Button
                  key={index}
                  className='flex items-center gap-3 mb-3'
                >
                  {item}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex-1'></div>
    </div>
  )
}

FirstContent.displayName = 'FirstContent'
export default FirstContent

