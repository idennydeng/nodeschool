const user = {};
[user.username, user.email] = process.argv.slice(3);
console.log(user);
