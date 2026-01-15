/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various delimiters (spaces, dashes, underscores)
 * and converts it to camelCase, where the first word is lowercase and subsequent
 * words have their first letter capitalized.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, dashes, or underscores as delimiters.
 * @returns {string} The converted camelCase string, or an error message if validation fails.
 * 
 * @throws {string} Returns 'Error: Input must be a string' if input is not a string type.
 * @throws {string} Returns 'Error: Input cannot be empty or whitespace only' if input is empty or contains only whitespace.
 * 
 * @example
 * toCamelCase('First Name'); // Returns: 'firstName'
 * toCamelCase('user_id'); // Returns: 'userId'
 * toCamelCase('mobile-number'); // Returns: 'mobileNumber'
 * toCamelCase('SCREEN_NAME'); // Returns: 'screenName'
 * toCamelCase('My name is  Dieko'); // Returns: 'myNameIsDieko'
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with various delimiters (spaces, dashes, underscores)
 * and converts it to dot.case, where all words are lowercase and joined with dots.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, dashes, or underscores as delimiters.
 * @returns {string} The converted dot.case string, or an error message if validation fails.
 * 
 * @throws {string} Returns 'Error: Input must be a string' if input is not a string type.
 * @throws {string} Returns 'Error: Input cannot be empty or whitespace only' if input is empty or contains only whitespace.
 * 
 * @example
 * toDotCase('First Name'); // Returns: 'first.name'
 * toDotCase('user_id'); // Returns: 'user.id'
 * toDotCase('mobile-number'); // Returns: 'mobile.number'
 * toDotCase('SCREEN_NAME'); // Returns: 'screen.name'
 * toDotCase('My name is  Dieko'); // Returns: 'my.name.is.dieko'
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        return 'Error: Input must be a string';
    }

    // Validate non-empty or whitespace-only input
    if (input.trim().length === 0) {
        return 'Error: Input cannot be empty or whitespace only';
    }

    // Normalize multiple spaces to single space, then split by space, dash, or underscore
    const words = input
        .trim()
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .split(/[\s\-_]+/) // Split by space, dash, or underscore
        .filter(word => word.length > 0); // Remove empty strings

    // Convert first word to lowercase, rest to capitalize first letter
    const camelCased = words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');

    return camelCased;
}

// Test cases
console.log(toCamelCase('First Name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('mobile-number')); // mobileNumber
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('My name is  Dieko')); // myNameIsDieko
console.log(toCamelCase(123)); // Error: Input must be a string
console.log(toCamelCase('   ')); // Error: Input cannot be empty or whitespace only

function toDotCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        return 'Error: Input must be a string';
    }

    // Validate non-empty or whitespace-only input
    if (input.trim().length === 0) {
        return 'Error: Input cannot be empty or whitespace only';
    }

    // Normalize multiple spaces to single space, then split by space, dash, or underscore
    const words = input
        .trim()
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .split(/[\s\-_]+/) // Split by space, dash, or underscore
        .filter(word => word.length > 0); // Remove empty strings

    // Convert all words to lowercase and join with dots
    const dotCased = words
        .map(word => word.toLowerCase())
        .join('.');

    return dotCased;
}

// Test cases
console.log(toDotCase('First Name')); // first.name
console.log(toDotCase('user_id')); // user.id
console.log(toDotCase('mobile-number')); // mobile.number
console.log(toDotCase('SCREEN_NAME')); // screen.name
console.log(toDotCase('My name is  Dieko')); // my.name.is.dieko
console.log(toDotCase(123)); // Error: Input must be a string
console.log(toDotCase('   ')); // Error: Input cannot be empty or whitespace only

