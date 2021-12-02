const { getPeople } = require("./service");

Array.prototype.myFilter = function (callback) {
   const filteredArray = [];
   for (index in this) {
      const result = callback(this[index], index, this);
      if (!result) continue;
      filteredArray.push(this[index]);
   }
   return filteredArray;
};

async function query() {
   try {
      const { results } = await getPeople("a");

      const larsFamily = results.myFilter((person, index, list) =>
         person.name.toLowerCase().includes("lars")
      );

      const larsFamilyNames = larsFamily.map((person) => person.name);
      console.log(larsFamilyNames);
   } catch (error) {
      console.error(error);
   }
}

query();
