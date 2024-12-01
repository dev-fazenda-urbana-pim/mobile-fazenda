import axios from 'axios'
import { storage } from '../config/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const httpClient = axios.create({
  baseURL: "https://backend-fazenda.vercel.app",
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.request.use((config) => {
  const accessToken = AsyncStorage.getItem(storage.ACCESS_TOKEN)

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      if (error.response) {
        throw new Error(error.response.data.message)
      }

      if (error.code === 'ERR_NETWORK') {
        throw new Error(error.message)
      }
    } catch (error: unknown) {
      return Promise.reject(error)
    }
  },
)
