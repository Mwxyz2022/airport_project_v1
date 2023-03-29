import React, { useState } from 'react'
import { Route, useLocation, useHistory } from 'react-router-dom'
import moment from 'moment'

import { connect } from 'react-redux'
import * as flightsActions from '../../gateway/actions'

import DirectionBtn from './direction-btn/DirectionBtn'
import FlightNavigation from './flight-navigation/FlightNavigation'
import FlightsTable from './flightstable/FlightsTable'

import './main.scss'
import { setHistoryUrl } from '../../utils/utils'

const Main = ({ getFlightsList }) => {
    const { pathname, search } = useLocation()
    const history = useHistory()

    const [searchValue, setSearchValue] = useState('')

    const onSearchHandler = event => {
        setSearchValue(event.target.value)
    }

    const onSubmit = async event => {
        event.preventDefault()

        const dateFromUrl = new URLSearchParams(search).get('date')
        const searchDate = !dateFromUrl ? moment().format('DD-MM-YYYY') : dateFromUrl

        setHistoryUrl(history, searchValue, searchDate)
        getFlightsList(searchValue, searchDate)
    }

    return (
        <main className="main">
            <section className="search-section">
                <h2 className="title">flight search</h2>

                <form className="search-form" onSubmit={onSubmit}>
                    <div className="search-form__input">
                        <i className="icon fa-solid fa-magnifying-glass"></i>
                        <input
                            className="input"
                            type="text"
                            placeholder="Airline, destination or flight #"
                            id="search"
                            onChange={onSearchHandler}
                            value={searchValue}
                        />
                    </div>

                    <button className="search-form__button" type="submit">
                        search
                    </button>
                </form>

                <Route exact path="/">
                    <DirectionBtn />
                </Route>

                {pathname !== '/' && <FlightNavigation setSearchValue={setSearchValue} />}
            </section>

            {pathname !== '/' && <FlightsTable />}
        </main>
    )
}

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList,
}

export default connect(null, mapDispatch)(Main)

// return (
//     <main className="main">
//         <section className="main__search">
//             <div className="container">
//                 <h2 className="title">flight search</h2>
//                 <div className="search">
//                     <form className="form" onSubmit={onSubmit}>
//                         <div className="form__input">
//                             <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
//                             <input
//                                 className="input"
//                                 type="text"
//                                 placeholder="Airline, destination or flight #"
//                                 id="search"
//                                 onChange={onSearchHandler}
//                                 value={searchValue}
//                             />
//                         </div>

//                         <button className="form__btn" type="submit">
//                             search
//                         </button>
//                     </form>
//                 </div>

//                 <Route exact path="/">
//                     <DirectionBtn />
//                 </Route>

//                 {pathname !== '/' && <FlightNavigation setSearchValue={setSearchValue} />}
//             </div>
//         </section>

//         {pathname !== '/' && <FlightsTable />}
//     </main>
// )
