function* upper(items) {
    for (const item of items) {
        try {
            yield item.toUpperCase();
        } catch (e) {
            yield null;
        }
    }
}

const badItems = ['a', 'B', 1, 'c'];
for (const item of upper(badItems)) {
    console.log(item);
}
