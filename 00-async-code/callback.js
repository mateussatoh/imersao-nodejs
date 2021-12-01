function getUser(callback) {
   setTimeout(
      () =>
         callback(null, {
            id: 1,
            name: "Mateus",
            birthDate: new Date(),
         }),
      1000
   );
}

function getPhoneNumber(userId, callback) {
   setTimeout(
      () =>
         callback(null, {
            number: "123456789",
            ddd: "21",
         }),
      2000
   );
}
function getAdress(userId, callback) {
   setTimeout(
      () =>
         callback(null, {
            city: "Teresopolis",
            state: "RJ",
         }),
      2000
   );
}

getUser((error, user) => {
   if (error) {
      console.error(error);
      return;
   }
   console.log(user);
   getPhoneNumber(user.id, (error1, phoneNumber) => {
      if (error1) {
         console.error(error1);
         return;
      }
      console.log(phoneNumber);
      getAdress(user.id, (error2, address) => {
         if (error2) {
            console.error(error2);
            return;
         }
         console.log(address);
      });
   });
});
