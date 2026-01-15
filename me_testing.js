function toDotCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '.')
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[_-]/g, '.');
}

module.exports = toDotCase;