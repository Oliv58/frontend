// src/api/axios.ts
import axios from 'axios'

const buchApi = axios.create({
  baseURL: '/rest', // passe das an dein Backend an
  headers: {
    'Content-Type': 'application/json',
  },
})

export default buchApi
