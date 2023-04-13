import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import moment from 'moment'

import './flightTable.scss'

import { terminalStyles, getFlightStatus } from './flightTableUtils'

import * as flightListSelector from '../../../gateway/selectors'

const FlightsTable = ({ flightsDep, flightsArr }) => {
    const { pathname } = useLocation()
    let flightList = []

    if (pathname === '/departures' && flightsDep) {
        flightList = flightsDep
    }

    if (pathname === '/arrivals' && flightsArr) {
        flightList = flightsArr
    }

    return (
        <table className="flight-table">
            {flightList.length ? (
                <>
                    <thead>
                        <tr className="flight-table__line__header">
                            <th className="header__item terminal">Terminal</th>
                            <th className="header__item loctime">Local time</th>
                            <th className="header__item destination">Destination</th>
                            <th className="header__item status ">Status</th>
                            <th className="header__item airline">Airline</th>
                            <th className="header__item flight-num">Flight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flightList.map(flight => {
                            const {
                                term,
                                timeDepShedule,
                                timeTakeofFact,
                                status,
                                timeToStand,
                                timeLandFact,
                            } = flight

                            const destinationDep = flight['airportToID.city_en']
                            const destinationArr = flight['airportFromID.city_en']

                            const infoData = flight.codeShareData

                            return (
                                <tr className="flight-table__line__flight" key={flight.ID}>
                                    <th className="flight-table__item terminal">
                                        <span
                                            className="flight-terminal"
                                            style={terminalStyles(term)}
                                        >
                                            {term}
                                        </span>
                                    </th>
                                    <th className="flight-table__item loctime">
                                        {moment(timeDepShedule || timeToStand).format('H:mm')}
                                    </th>
                                    <th className="flight-table__item destination">
                                        {destinationDep || destinationArr}
                                    </th>
                                    <th className="flight-table__item status">
                                        {getFlightStatus(status, timeTakeofFact || timeLandFact)}
                                    </th>
                                    <th className="flight-table__item airline">
                                        {infoData.map(airplaneInfo => {
                                            const logo = airplaneInfo.airline.en.logoSmallName
                                            const key = airplaneInfo.airline.en.id
                                            const { name } = airplaneInfo.airline.en
                                            return (
                                                <div className="airline__company" key={key}>
                                                    <img
                                                        src={logo}
                                                        alt={name}
                                                        className="airline__company__logo"
                                                    />
                                                    <span className="airline__company__title">
                                                        {name}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </th>
                                    <th className="flight-table__item flight-num">
                                        {infoData.map(airplaneInfo => {
                                            const flightNum = airplaneInfo.codeShare
                                            const key = airplaneInfo.airline.en.id

                                            return <span key={key}>{flightNum}</span>
                                        })}
                                    </th>
                                    <th className="flight-table__item details">
                                        <a href="#" className="flight-details">
                                            Flight details
                                        </a>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </>
            ) : (
                <tbody className="nothing-found">
                    <tr>
                        <th>
                            <span>No Flight</span>
                        </th>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

const mapState = state => ({
    flightsDep: flightListSelector.depFlightListSelector(state),
    flightsArr: flightListSelector.arrFlightListSelector(state),
})

export default connect(mapState, null)(FlightsTable)
