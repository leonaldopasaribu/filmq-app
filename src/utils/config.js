const API_KEY = '98558322'

const config = (baseUrl = '') => cb => cb(baseUrl, API_KEY)

export default config
