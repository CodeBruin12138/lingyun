import axios from './request'

export const getGoodsList = (url: string, params: any) => {
  return axios.get('/goods/getGoodsList', { params })
}
