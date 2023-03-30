const apiUrl = 'https://api.iev.aero/api/flights'

export const fetchFlightsListData = date =>
    fetch(`${apiUrl}/${date}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch flights-list. Status: ${response.status} ${response.statusText}`,
                )
            }

            return response.json()
        })
        .then(res => res.body)
