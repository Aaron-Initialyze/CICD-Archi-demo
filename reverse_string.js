var string = "hello,"


//------------------ Using reverse(), split(), join() method -------------------------

function reverseString(str){

    // use split() method to split the string in array
    var splitString = str.split("")         // [ 'h', 'e', 'l', 'l', 'o', ',' ] if not giving anything inside (""), it will split each charac 
                                            // split() will give hello,
    // use the reverse() to reverse the string
    var rev = splitString.reverse()

    // use join() to join the array into string
    var joinArr = rev.join("")

    return joinArr;
}

console.log('Using reverse(), split(), join() method = ' + reverseString(string));


// chaining them together
function ChainReverseString(str) {
    return str.split("").reverse().join("");
}
console.log('Using chaining method = ' + ChainReverseString(string));


// ---------------------------- Reverse a String With a Decrementing For Loop-------------------

function decReverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
 console.log('Reverse a String With a Decrementing For Loop = ' + decReverseString(string));


// my trail


