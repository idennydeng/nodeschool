module.exports = (goodUsers) => {
    const ids = new Set(goodUsers.map(user => user.id));
    return submittedUsers => submittedUsers.every(user => ids.has(user.id));
};
