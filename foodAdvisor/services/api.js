import API_URL from './api.config'
import axios from "axios"

const api = {}

async function apiGet(url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

api.getRestaurants = () => {
  return apiGet('restaurants')
}

export default api
