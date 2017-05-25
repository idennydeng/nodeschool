function askFoo() {
    return new Promise(resolve => resolve('foo'));
}

function* askGenerator() {
    try {
        console.log(yield askFoo());
    } catch (e) {
        console.log(e);
    }
}

function run(generator) {
    const it = generator();
    const rt = it.next();
    if (!rt.done) rt.value.then(it.next.bind(it), it.throw.bind(it));
}

run(askGenerator);
