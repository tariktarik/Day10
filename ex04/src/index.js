var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
}
function myFunction(myObj) {
    var playerNumber7 = myObj["7"];
    var playerNumber10 = myObj["10"];
    var playerNumber11 = myObj["11"]
    return {playerNumber7, playerNumber10, playerNumber11};
}
console.log(myFunction(players));
module.exports = myFunction(players, myFunction);