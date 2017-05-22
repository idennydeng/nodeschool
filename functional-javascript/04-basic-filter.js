module.exports = messages => messages.map(obj => obj.message).filter(str => str.length < 50);
