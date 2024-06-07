function transformString(str) {
    const len = str.length;

    if (len % 15 === 0) {
        // Remove spaces from the string first before reversing
        let reversedStr = '';
        const string = str.replace(/\s+/g, '');
        const len = string.length;

        //Reverse the string
        for (let i = len - 1; i >= 0; i--) {
            reversedStr += string[i];
        }
        let asciiStr = '';
        for (let i = 0; i < len; i++) {
            asciiStr += reversedStr.charCodeAt(i) + ' ';
        }
        return asciiStr.trim();
    } else if (len % 5 === 0) {
        // Replace each character with its ASCII code
        let asciiStr = '';
        for (let i = 0; i < len; i++) {
            asciiStr += str.charCodeAt(i) + ' ';
        }
        return asciiStr.trim();
    } else if (len % 3 === 0) {
        // Remove spaces from the string first before reversing
        let reversedStr = '';
        let string = str.replace(/\s+/g, '');
        const len = string.length;

        //Reverse the string
        for (let i = len - 1; i >= 0; i--) {

            reversedStr += string[i];
        }
        return reversedStr;
    } else {
        // Return the string as is
        return str;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
