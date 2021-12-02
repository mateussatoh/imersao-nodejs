const assert = require("assert");
const { getPeople } = require('./service');

describe('SWAPI tests', () => {
    it('Deve buscar o R2D2 e trazer o nome.', async () => {
        const name = "R2-D2"
        const response = await getPeople(name)
        assert.equal(response.results[0].name, name)
    }
)})