import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import DateSelect from '../date-select/DateSelect'

import { isActiveBtn } from './flightNavigationUtils'

import './flightNavigation.scss'

const FlightNavigation = ({ setSearchValue }) => {
    const { pathname, search } = useLocation()

    const historyDate = new URLSearchParams(search).get('date')
    const searchParam = !search ? `?date=${historyDate}` : search

    const depClass = isActiveBtn('departures', pathname)
    const arrClass = isActiveBtn('arrivals', pathname)

    return (
        <section className="optional">
            <div className="navigation">
                <Link
                    to={{ pathname: '/departures', search: searchParam }}
                    className={`departures${depClass}`}
                >
                    <div className="departures__container">
                        <svg
                            className="departures__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 39.32 22.34"
                        >
                            <path
                                d="M20,25.11H3.42c-.52,0-.72-.18-.85-.7-.69-2.89-1.43-5.78-2.14-8.67,0-.18-.24-.56.06-.61.58-.1,2.18-.9,2.54-.41.68.93,1.92,2.59,2.54,3.55A1.48,1.48,0,0,0,7,19.06c2.76,0,5.53,0,8.29,0,.79,0,1-.21.8-1C15,13.73,13.82,9.36,12.8,5c-.57-2.47-.9-1.92,1.47-2.13,1.54-.14,2.26.56,3,1.76,2.62,4.44,5.41,8.78,8,13.27a2.28,2.28,0,0,0,2.47,1.2c3,0,6.07,0,9.1,0a2.94,2.94,0,0,1,2.67,4.15,3.16,3.16,0,0,1-3.23,1.93c-3.68-.05-7.35,0-11,0H20Z"
                                transform="translate(-0.33 -2.83)"
                            />
                        </svg>
                        <span className="departures__title">departures</span>
                    </div>
                </Link>
                <Link
                    to={{ pathname: '/arrivals', search: searchParam }}
                    className={`arrivals${arrClass}`}
                >
                    <div className="arrivals__container">
                        <svg
                            className="arrivals__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 39.32 22.34"
                        >
                            <path
                                d="M20,25.11H3.42c-.52,0-.72-.18-.85-.7-.69-2.89-1.43-5.78-2.14-8.67,0-.18-.24-.56.06-.61.58-.1,2.18-.9,2.54-.41.68.93,1.92,2.59,2.54,3.55A1.48,1.48,0,0,0,7,19.06c2.76,0,5.53,0,8.29,0,.79,0,1-.21.8-1C15,13.73,13.82,9.36,12.8,5c-.57-2.47-.9-1.92,1.47-2.13,1.54-.14,2.26.56,3,1.76,2.62,4.44,5.41,8.78,8,13.27a2.28,2.28,0,0,0,2.47,1.2c3,0,6.07,0,9.1,0a2.94,2.94,0,0,1,2.67,4.15,3.16,3.16,0,0,1-3.23,1.93c-3.68-.05-7.35,0-11,0H20Z"
                                transform="translate(-0.33 -2.83)"
                            />
                        </svg>
                        <span className="arrivals__title">arrivals</span>
                    </div>
                </Link>
            </div>
            <DateSelect setSearchValue={setSearchValue} historyDate={historyDate} />
        </section>
    )
}

export default FlightNavigation
