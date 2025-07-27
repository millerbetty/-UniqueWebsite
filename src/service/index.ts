import axios from 'axios'
import { IGetWeather } from './type'
//获取天气信息
export const getWeather = async (city: string): Promise<IGetWeather> => {
  try {
    const res = await axios.get(
      'https://restapi.amap.com/v3/weather/weatherInfo',
      {
        params: {
          key: '2c13d97a694e4a38fd22c5b4d7bac2be',
          city
        }
      }
    )
    const wetherDetail = res.data.lives[0]
    const { weather, temperature } = wetherDetail
    return Promise.resolve({ weather, temperature })
  } catch (err) {
    return Promise.reject(err)
  }
}

