import { EWeatherType, TWeatherMap } from './type'
import { SkyconsType } from 'react-skycons'
// 导航栏
export const navLinks = [
  { href: '/', title: '首页' },
  { href: '/collections', title: '专辑' },
  { href: '/about', title: '关于' }
]

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

