module.exports = function toReadable (number) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = "hundred";

    if (number < 10) return ones[number];
    if (number >= 10 && number < 20) return teens[number - 10];
    if (number >= 20 && number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 ? " " + ones[number % 10] : "");
    }
    if (number >= 100 && number < 1000) {
        return ones[Math.floor(number / 100)] + " " + hundreds + (number % 100 ? " " + toReadable(number % 100) : "");
    }
}
