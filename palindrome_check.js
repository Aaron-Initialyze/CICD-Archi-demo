function palindromeCheck(arg){
    var data = arg
    
    var splitStr = arg.split("")

    var rev = splitStr.reverse()

    var joinStr = rev.join("")

    console.log(joinStr)

        if (data === joinStr){
            console.log("It is a palindrome ")
        }
        else
        {
            console.log("It is not a palindrome")
        }
}

palindromeCheck("yessey")