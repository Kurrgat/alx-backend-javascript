function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            // Assuming the API call was successful
            resolve("Response from API");
        }, 1000); // Simulating a 1-second delay
    });
}

export default getResponseFromAPI;
