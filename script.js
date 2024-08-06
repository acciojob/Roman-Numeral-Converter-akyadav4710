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
	     const values = 
        [1000, 900, 500, 400, 100, 
         90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = 
        ['M', 'CM', 'D', 'CD', 'C', 
         'XC', 'L', 'XL', 'X', 'IX', 
         'V', 'IV', 'I'];
    let result = '';

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}

// Test the function with an example
//console.log(convertToRoman(36)); // Should print XXXVI

// do not edit below this line
module.exports = convertToRoman;
