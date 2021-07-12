const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    if (user.name === userName) {
      updatedUsers = allUsers.map((user) => !user.active === user.active);
    } else {
      updatedUsers = allUsers.map((user) => user);
    };
    resolve(updatedUsers);
  });
};
console.log(updatedUsers);
const logger = updatedUsers => console.table(updatedUsers);

/*
 * Зараз працює так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Повинно працювати так
 */
toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Poly').then(logger);
// toggleUserState(users, 'Ajax').then(logger);
// toggleUserState(users, 'Lux').then(logger);