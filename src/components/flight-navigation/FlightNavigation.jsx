import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { isActiveBtn } from './flightNavigationUtils.js'

import DirectionIcon from '../../images/direction.svg'
import DateSelect from '../date-select/DateSelect'

import './flightNavigation.scss'

const FlightNavigation = () => {
  const { pathname, search } = useLocation()

  const depClass = isActiveBtn('departures', pathname)
  const arrClass = isActiveBtn('arrivals', pathname)

  return (
    <section className="optional">
      <div className="navigation">
        <Link to={{ pathname: '/departures', search }} className={`departures${depClass}`}>
          <div className="departures__container">
            <DirectionIcon className="departures__icon" />
            <span className="departures__title">departures</span>
          </div>
        </Link>
        <Link to={{ pathname: '/arrivals', search }} className={`arrivals${arrClass}`}>
          <div className="arrivals__container">
            <DirectionIcon className="arrivals__icon" />
            <span className="arrivals__title">arrivals</span>
          </div>
        </Link>
      </div>
      <DateSelect />
    </section>
  )
}

export default FlightNavigation
