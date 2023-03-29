const apiUrl = 'https://api.iev.aero/api/flights'

export const fetchFlightsListData = date =>
    fetch(`${apiUrl}/${date}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(res => res.body)
