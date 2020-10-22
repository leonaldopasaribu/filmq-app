import { useCallback } from 'react'

const HandleResponse = useCallback((response, cb) => {
  const handleResults = {
    error: {
      error: true,
      data: [],
      total: 0
    },

  }

  const resultsType = response.Search ? 'content' : 'error'

  cb(handleResults[resultsType])
}, [])

export default HandleResponse
