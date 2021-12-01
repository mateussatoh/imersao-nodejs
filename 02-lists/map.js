const service = require("./service");

Array.prototype.myMap = function (callback) {
   const newMappedArray = [];
   for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i);
      newMappedArray.push(result);
   }
   return newMappedArray;
};

async function query() {
   try {
      const response = await service.getPeople("a");
      let names = [];
      console.time("foreach");
      response.results.forEach((person) => names.push(person.name));
      console.timeEnd("foreach");
      console.log(names);

      names = [];
      console.time("map");
      names = response.results.map((person) => person.name);
      console.timeEnd("map");
      console.log(names);

      names = [];
      console.time("mymap");
      names = response.results.myMap((person) => person.name);
      console.timeEnd("mymap");
      console.log(names);
   } catch (error) {
      console.error(error);
   }
}

query();
