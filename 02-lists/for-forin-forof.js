const service = require("./service");

async function query() {
    try {
        const response = await service.getPeople("a");
        let names = [];
        console.time("for");
        for (let i = 0; i < response.results.length; i++) {
            const { name } = response.results[i];
            names.push(name);
        }
        console.timeEnd("for");
        console.log(names)
        names = []
        console.time("forin");
        for (let i in response.results) {
            const { name } = response.results[i];
            names.push(name);
        }
        console.timeEnd("forin");
        console.log(names)

        names = []
        console.time("forof");
        for (person of response.results) {
            const { name } = person;
            names.push(name);
        }
        console.timeEnd("forof");
        console.log(names)
    } catch (error) {
        console.error(error);
    }
}

query();
