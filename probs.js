
//this function loops through a string and checks to see if there are any repeated characters, if there are, it returns false, if not true
function isUniqueChars(str) {
    //ASCII, ASCII extended or Unicode?

    if(str.length > 128){
        return false;
    }

    let theStr = str,
        charSet = [];

    for(let j = 0; j < theStr.length; j++){
        let val = str.charAt(j);
        if(charSet[val]){
            return false;
        }
        charSet[val] = true;
    }

    // console.log(theStr, charSet);

    return true;
}