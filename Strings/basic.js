let str = "diary";

console.log(str);
console.log(str[0]);
console.log(str.charAt(2));

console.log(str.charCodeAt(2));

// concat(str1, str2)
let str1 = "car";
let str2 = "race";
str = str1.concat('/',str2);
console.log(str);

// includes(search string,position)
// case sensitive
str = 'Today is sunday.Have a nice day.Is it cold?'
console.log(str.includes('nice'));
console.log(str.includes('Nice'));

// indexOf
/*
The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.
*/
console.log(str.indexOf('i'));

// lastIndexOf
// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring.

console.log(str.lastIndexOf('i'));

// padStart
// padStart(targetLength, padString);
str = '9990343441'
console.log(str.padStart(12, '+91'));

// padEnd
str = '50000'
console.log(str.padEnd(8, '.00'));

// repeat
const mood = 'happy'
const moodEverday = mood.repeat(10)
console.log(moodEverday);

// replace
// replace(pattern, replacement)

str = "js is a dynamic language, i like js,js has async nature"

console.log(str.replace('js','javascript'));
console.log(str.replaceAll('js', 'javascript'));

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// slice(start,end)

// split(separator, limit)
str = 'i am a human'
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('a'));


// trim
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
str = '  hi   there   '
console.log(str.trim());