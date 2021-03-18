function myFunction(myObj, checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    return "Not Found!";

    // Only change code above this line
}
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title"));
module.exports = myFunction;