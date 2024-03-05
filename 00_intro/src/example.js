// JavaScript Code with errors
// We used TypeScript and jsDoc to fix them

// async function getUsers(userId) {
//   const res = await $.ajax({
//     url: `users/${userId}`,
//     dataType: "json",
//   });

//   return {
//     id: +res.id,
//     name: res.name,
//     birthDate: new Date(res.birthDate),
//   };
// }

// getUsers(1).then((user) => {
//   user.id = "1234";
//   user.birthDate = "02/10/2000";
// });

// getUsers("2").then((user) => {
//   console.log(user);
// });

// Fix
/**
 *
 * @param {number} userId
 * @returns
 */
async function getUsers(userId) {
  const res = await $.ajax({
    url: `users/${userId}`,
    dataType: "json",
  });

  return {
    id: +res.id,
    name: res.name,
    birthDate: new Date(res.birthDate),
  };
}

getUsers(1).then((user) => {
  user.id = 1234;
  user.birthDate = new Date("02/10/2000");
});

getUsers(2).then((user) => {
  console.log(user);
});
