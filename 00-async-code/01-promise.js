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

getUser()
   .then((user) => {
      getPhoneNumber(user.id)
         .then((number) => {
            getAdress(user.id)
               .then((address) => {
                  console.log({
                     user: user,
                     number: number,
                     address: address,
                  });
               })
               .catch((error) => console.error(error));
         })
         .catch((error) => console.error(error));
   })
   .catch((error) => console.error(error));

   getUser().then((user) => {
       console.log(user)
       Promise.all([getPhoneNumber(user.id), getAdress(user.id)]).then((res) => console.log(res))
   })

