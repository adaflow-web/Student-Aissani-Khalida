var answerIsCorrect = true ;
var UserInput = prompt("Do you want to convert a value? (yes / No)");

function convertOne (euro) {
    
    var message = ("the result is ");
    var result = euro * 1.082;
    return message + result.toString();
}

function convertTwo (celsius){

    var message = ("the result is ");
    var result = (celsius * 9/5) + 32;
    return message + result.toString();
}

function convertThree (liters){
    var message = ("the result is ");
    var result = liters * 33.814;
    return message + result.toString();

}


if (answerIsCorrect){
    
    var UserInputOne = prompt("Which Conversion? chf/Fahrenheit/OZ");

    if (UserInputOne == "chf") {
        var UserInputTwo = prompt("Which value do you to convert?");
        result = convertOne (UserInputTwo);
        console.log (result);
    
    } else if (UserInputOne == "Fahrenheit") {
        var UserInputTwo = prompt("Which value do you to convert?");
        result = convertTwo (UserInputTwo);
        console.log (result);
    
    } else if (UserInputOne == "OZ") {
        var UserInputTwo = prompt("Which value do you to convert?");
        result = convertThree (UserInputTwo);
        console.log (result);


    } else {

        console.log("The conversion is not supported!");
    }

    
} 




