function* factorial(n) {
    for (let i = 1, r = 1; i <= n; i++) {
        yield r *= i;
    }
}

for (const n of factorial(5)) {
    console.log(n);
}
