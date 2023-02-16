const list = [
  { user: "user" },
  { user: "user4" },
  { user: "user" },
  { user: "user3" },
  { user: "user5" },
  { user: "user4" },
  { user: "user3" },
];

const uniqueIds = [];

const newList = list.reduce((user, value, index) => {
  if (!uniqueIds.includes(value.user)) {
    uniqueIds.push(value.user);
    user.push(value);
  }
  return user;
}, []);
console.log(newList);
