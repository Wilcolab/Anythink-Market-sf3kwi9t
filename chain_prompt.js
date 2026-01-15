function toKebabCase(str) {
    return str
        // Insert hyphens before uppercase letters in camelCase/PascalCase
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase();
}

module.exports = toKebabCase;