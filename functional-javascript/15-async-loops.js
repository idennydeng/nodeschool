module.exports = (userIds, load, done) => {
    const len = userIds.length;
    const users = [];
    let count = 0;

    userIds.forEach((id, index) => {
        load(id, (user) => {
            count++;
            users[index] = user;
            if (count === len) done(users);
        });
    });
};
