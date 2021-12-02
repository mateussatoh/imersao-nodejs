const { getPeople } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for (let index = 0; index < this.length; index++) {
        finalValue = callback(finalValue, this[index], this);
    }
    return finalValue;
 };
 
async function query() {
   try {
      const { results } = await getPeople("a");
      const height = results.map((person) => parseInt(person.height))
      const heightSum = height.myReduce((heightA, heightB) => heightA + heightB, 0)
      console.log(heightSum)
   } catch (error) {
      console.error(error);
   }
}

query();
