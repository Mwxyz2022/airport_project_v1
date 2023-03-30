import moment from 'moment'
import * as flightsGateway from './gateway'

export const GET_FLIGHTS_LIST = 'AIRPORT/GET_FLIGHTS_LIST'

export const flightsListRecieved = flightsList => {
    const action = {
        type: GET_FLIGHTS_LIST,
        payload: {
            flightsList,
        },
    }
    return action
}

export const getFlightsList = (searchText, searchDate) => {
    const thunkAction = function (dispatch) {
        flightsGateway
            .fetchFlightsListData(searchDate || moment().format('DD-MM-YYYY'))
            .then(flightData => {
                const dep = flightData.departure
                const arr = flightData.arrival

                const filteredDep = dep.filter(flight => {
                    const toCity = flight['airportToID.city_en'].toLowerCase()

                    const flightNum = flight.codeShareData
                        .map(codeShareData => codeShareData.codeShare)
                        .toString()
                        .toLowerCase()

                    const airline = flight.codeShareData
                        .map(codeShareData => codeShareData.airline.en.name)
                        .toString()
                        .toLowerCase()

                    return (
                        toCity.includes(searchText.toLowerCase()) ||
                        flightNum.includes(searchText.toLowerCase()) ||
                        airline.includes(searchText.toLowerCase())
                    )
                })

                const filteredArr = arr.filter(flight => {
                    const fromCity = flight['airportFromID.city_en'].toLowerCase()

                    const flightNum = flight.codeShareData
                        .map(codeShareData => codeShareData.codeShare)
                        .toString()
                        .toLowerCase()

                    const airline = flight.codeShareData
                        .map(codeShareData => codeShareData.airline.en.name)
                        .toString()
                        .toLowerCase()

                    return (
                        fromCity.includes(searchText.toLowerCase()) ||
                        flightNum.includes(searchText.toLowerCase()) ||
                        airline.includes(searchText.toLowerCase())
                    )
                })

                return { departure: filteredDep, arrival: filteredArr }
            })
            .then(flightsList => dispatch(flightsListRecieved(flightsList)))
            .catch(error => {
                throw new Error(error.message)
            })
    }

    return thunkAction
}
