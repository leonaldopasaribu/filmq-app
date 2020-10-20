const API_KEY = 'faf7e5bb&s'

const config = (baseUrl = '') => cb => cb(baseUrl, API_KEY)

export default config
