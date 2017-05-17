const argv = process.argv;

let result = 0;
for (let i = 2, len = argv.length; i < len; i++) {
    result += Number(argv[i]);
}
console.log(result);
