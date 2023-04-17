let userList = [
  {
    fisrtName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    fisrtName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    fisrtName: "세찬",
    lastName: "양",
    email: "yang@gmail.com",
  },
  {
    fisrtName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
];
console.log(userList);

let userList2 = userList.map(function (user) {
  return {
    fullName: user.lastName + user.fisrtName,
    fisrtName: user.fisrtName,
    lastName: user.lastName,
    email: user.email,
  };
});
console.log(userList2);
