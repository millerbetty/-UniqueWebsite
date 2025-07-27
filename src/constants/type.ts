import { SkyconsType } from 'react-skycons/lib/Skycons'

export enum EWeatherType {
  'CLEAR_DAY' = '晴',
  'PARTLY_CLOUDY_DAY' = '多云',
  'CLOUDY' = '阴',
  'RAIN' = '雨',
  'FOG' = '雾',
  'SNOW' = '雪',
  'WIND' = '风'
}
export type TWeatherMap = Record<
  EWeatherType,
  { icon: String; type: SkyconsType }
>

