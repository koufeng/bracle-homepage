import axios, { AxiosRequestConfig } from 'axios'

const HOST = process.env.REACT_APP_API_HOST;

interface MyResponseType<T> {
    code: number
    message: string
    success: boolean
    fail: boolean
    result: T
}

const instance = axios.create({
    baseURL: `${HOST}/v1`,
    timeout: 60000,
    // withCredentials: true,
    // proxy: {
    //   host: '',
    //   port: 80
    // },
    validateStatus(status) {
      return status >= 200 && status <= 500
    }
})

// function wait(ms: number): Promise<void> {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

const request = async <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
  try {
    const { data } = await instance.request<MyResponseType<T>>(config)
    return data
  } catch (err) {
    const message = 'Request Error'
    console.error(message)
    return {
      code: -1,
      message,
      success: false,
      fail: true,
      result: null as any,
    }
  }
}

export default request
