const util = require("util");

function getUser() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         return resolve({
            id: 1,
            name: "Mateus",
            birthDate: new Date(),
         });
      }, 1000);
   });
}

function getPhoneNumber(userId) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!userId) {
            return reject(new Error("You need to provide a user ID"));
         }
         return resolve({
            number: "123456789",
            ddd: "21",
         });
      }, 1000);
   });
}
function getAdress(userId) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!userId) {
            return reject(new Error("You need to provide a user ID"));
         }

         return resolve({
            city: "Teresopolis",
            state: "RJ",
         });
      }, 2000);
   });
}

query();
async function query() {
   try {
      const user = await getUser();
      const queryResult = await Promise.all([
         getPhoneNumber(user.id),
         getAdress(user.id),
      ]);
      console.log(user, ...queryResult);
   } catch (error) {
      console.error(error);
   }
}
