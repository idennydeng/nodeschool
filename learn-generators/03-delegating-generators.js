function* flat(arr) {
    if (Array.isArray(arr)) {
        for (const item of arr) yield* flat(item);
    } else {
        yield arr;
    }
}

const A = [1, [2, [3, 4], 5], 6];
for (const f of flat(A)) {
    console.log(f);
}
