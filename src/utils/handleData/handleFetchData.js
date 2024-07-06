const fetchData = async (endpoint) => {
    const response = await fetch(`${endpoint.uri}`, {
        method: "GET",
        headers: endpoint.headers
    });

    if (response.status !== 200) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    const data = await response.json()

    return {[endpoint.responseName]: data};
};

const fetchAllData = async (endpoints) => {
    const resultsArray = await Promise.all(
        endpoints.map(fetchData)
    );

    const combinedResults = resultsArray.reduce((acc, result) => {
        return { ...acc, ...result };
    }, {});

    return combinedResults;
};

export { fetchAllData };