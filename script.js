function convertToRoman(num) {
    const obj = {
        0: ['M', 1000], 
        1: ['D', 500], 
        2: ['C', 100], 
        3: ['L', 50], 
        4: ['X', 10], 
        5: ['V', 5], 
        6: ['I', 1]
    };

    // Special cases for subtraction
    const subtractionRules = {
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM'
    };

    let romanNumeral = '';

    // Handle special subtraction cases
    for (let value in subtractionRules) {
        value = parseInt(value);
        while (num >= value) {
            romanNumeral += subtractionRules[value];
            num -= value;
        }
    }

    // Handle the standard conversion
    for (let i = 0; i < Object.keys(obj).length; i++) {
        while (num >= obj[i][1]) {
            romanNumeral += obj[i][0];
            num -= obj[i][1];
        }
    }

    return romanNumeral;
}

// Test the function with an example
console.log(convertToRoman(36)); // Should print XXXVI

// do not edit below this line
module.exports = convertToRoman;
