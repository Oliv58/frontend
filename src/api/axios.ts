// src/api/axios.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/rest', // passe das an dein Backend an
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // wenn du Cookies nutzt (z.B. mit Keycloak)
})

export default axiosInstance
