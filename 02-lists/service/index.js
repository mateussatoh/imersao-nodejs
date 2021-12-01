const axios = require('axios');

const URL = "https://swapi.dev/api/people"

async function getPeople(name){
    const searchPeopleUrl = `${URL}/?search${name}&format=json`
    const response = await axios.get(searchPeopleUrl)
    return response.data
}

module.exports = {getPeople}
