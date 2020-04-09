import axios from 'axios'

export function apiFactory (serverName, options = {}, json) {
  // if (apiMap[serverName]) return apiMap[serverName]

  const kerApi = axios.create({
  })

  kerApi.interceptors.request.use((config) => {
    // const {url} = config
    // if (url && url === '/login') {
    //   return config
    // }

    // 添加token
    const token = localStorage.getItem('token')
    // const token = store.state.token || localStorage.accessToken
    if (token) {
      config.headers['ker-token'] = token
    }

    return config
  })

  return kerApi
}
