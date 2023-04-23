import React from 'react'
import { Route, useLocation } from 'react-router-dom'

import DirectionBtn from '../direction-btn/DirectionBtn'
import FlightNavigation from '../flight-navigation/FlightNavigation'
import FlightsTable from '../flights-table/FlightsTable'
import SearchForm from '../search-form/SearchForm'

import './main.scss'

const Main = () => {
  const { pathname } = useLocation()

  const showTable = pathname === '/departures' || pathname === '/arrivals'

  return (
    <main className="main">
      <section className="search-section">
        <h2 className="title">flight search</h2>
        <SearchForm />
        <Route exact path="/">
          <DirectionBtn />
        </Route>

        {showTable && <FlightNavigation />}
      </section>

      {showTable && <FlightsTable />}
    </main>
  )
}

export default Main
