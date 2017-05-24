const inputs = process.argv.slice(2);
const result = inputs.map(s => s[0]).reduce((ret, c) => ret + c);
console.log(`[${inputs}] becomes "${result}"`);
