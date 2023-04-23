import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useUpdateQueryParam } from '../../hooks/useUpdateQueryParam'

const SearchForm = () => {
  const { search } = useLocation()
  const updateQuery = useUpdateQueryParam()
  const queryValue = new URLSearchParams(search).get('search') || ''

  const [value, setValue] = useState(queryValue)

  const onSubmit = event => {
    event.preventDefault()

    updateQuery('search', value)
  }

  const onSearchHandler = event => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (queryValue && value !== queryValue) {
      updateQuery('search', queryValue)
      setValue(queryValue)
    }
  }, [search])

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__input">
        <i className="icon fa-solid fa-magnifying-glass"></i>
        <input
          className="input"
          type="text"
          placeholder="Airline, destination or flight #"
          id="search"
          onChange={onSearchHandler}
          value={value}
        />
      </div>

      <button className="search-form__button" type="submit">
        search
      </button>
    </form>
  )
}

export default SearchForm
