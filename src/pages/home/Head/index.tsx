import React, { useEffect } from 'react'
import avatarImg from '../../../assets/img/avator1.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import style from './index.module.css'
import { EAvatorKey, navLinks } from '@/constants/home'
import { Dropdown, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import { avatorItems, avatorRouteMap } from '@/constants/home'
import { MenuProps } from 'antd'
//注册插件
gsap.registerPlugin(useGSAP)

const Head = () => {
  const { contextSafe } = useGSAP()
  const navigate = useNavigate()

  const handleLike = contextSafe(({ context }: { context: HTMLElement }) => {
    gsap.to(context, { rotation: '+=10', yoyo: true, repeat: 1 })
  })
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(avatorRouteMap[e.key as EAvatorKey])
  }
  return (
    <div className='bg-black '>
      <div className='container h-[80px] p-[10px] flex justify-between'>
        <Dropdown
          menu={{
            items: avatorItems,
            onClick: handleMenuClick
          }}
          placement='bottomRight'
          trigger={['click', 'hover']} // 设置点击触发，默认是 hover
        >
          <Avatar
            className='cursor-pointer'
            size='large'
            icon={
              <img
                className='w-4 h-4 rounded-md self-center'
                src={avatarImg}
                alt='头像'
              />
            }
          />
        </Dropdown>

        <div className='menu text-gray-50 flex gap-2'>
          {navLinks.map((item, index) => {
            return (
              <button
                key={index}
                className={style.btn}
                onClick={(e) => handleLike({ context: e.currentTarget })}
              >
                {item.title}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Head.displayName = 'Head'
export default Head

