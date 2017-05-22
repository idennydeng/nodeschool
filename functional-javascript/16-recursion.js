function getDependencies(tree, result) {
    result = result || [];
    if (!(tree && tree.dependencies)) return result;

    Object.keys(tree.dependencies).forEach((name) => {
        const lib = tree.dependencies[name];
        const value = `${name}@${lib.version}`;
        if (result.indexOf(value) === -1) result.push(value);
        getDependencies(lib, result);
    });

    return result.sort();
}

module.exports = getDependencies;
