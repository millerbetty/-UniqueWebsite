import { EWeatherType, TWeatherMap } from './type'
import { SkyconsType } from 'react-skycons'
import { MenuProps } from 'antd'
// 导航栏
export const navLinks = [
  { href: '/', title: '首页' },
  { href: '/collections', title: '专辑' },
  { href: '/about', title: '关于' }
]

export enum EAvatorKey {
  create = 'create',
  setting = 'setting'
}

export const avatorItems = [
  {
    label: '发布文章',
    key: EAvatorKey.create
  },
  {
    label: '设置',
    key: EAvatorKey.setting
  }
]
export const avatorRouteMap = {
  [EAvatorKey.create]: '/create', // 对应 '发布文章' 的路由
  [EAvatorKey.setting]: '/setting'
}
// 天气
export const getweatherMap: TWeatherMap = {
  [EWeatherType.CLEAR_DAY]: { icon: 'icon1', type: SkyconsType.CLEAR_DAY },
  [EWeatherType.PARTLY_CLOUDY_DAY]: {
    icon: 'icon3',
    type: SkyconsType.PARTLY_CLOUDY_DAY
  },
  [EWeatherType.CLOUDY]: { icon: 'icon5', type: SkyconsType.CLOUDY },
  [EWeatherType.RAIN]: { icon: 'icon11', type: SkyconsType.RAIN },
  [EWeatherType.FOG]: { icon: 'icon10', type: SkyconsType.FOG },
  [EWeatherType.SNOW]: { icon: 'icon8', type: SkyconsType.SNOW },
  [EWeatherType.WIND]: { icon: 'icon9', type: SkyconsType.WIND }
}

//学习分类
export const learnCategories = [
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'Vue',
  'React',
  'Webpack',
  'Npm',
  'Plugin',
  'Other'
]

