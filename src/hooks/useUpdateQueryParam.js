import { useHistory, useLocation } from 'react-router-dom'

export const useUpdateQueryParam = () => {
  const { pathname, search } = useLocation()
  const history = useHistory()

  const updateQueryParam = (paramName, value) => {
    const queryParams = new URLSearchParams(search)
    queryParams.set(paramName, value)

    const searchValue = queryParams.get('search')

    if (!searchValue) {
      queryParams.delete('search')
    }

    history.push({
      pathname: pathname === '/' ? '/departures' : pathname,
      search: queryParams.toString(),
    })
  }

  return updateQueryParam
}
