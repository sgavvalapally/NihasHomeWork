var audioGreatJobControl = document.getElementById('audioGreatJob');
var audioTryAgainControl = document.getElementById('audioTryAgain');
var workingScript = window.location.pathname;
var workingDir = workingScript.substring(0, workingScript.lastIndexOf("/"));
//window.alert(workingDir);

function fnSetFields() {
    var vWelcomeMessage = "<h1> Welcome Nihas ! Start your Home Work now";
    //"<h1> Welcome Neelima ! Make your selection for the homework now </h1>";
    document.getElementById("divMsgWelcome").innerHTML = vWelcomeMessage;
    document.getElementById("txtResult").value = "";
    document.getElementById("fieldA").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("fieldB").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("divMsgWelcome").style.display = "block";
    document.getElementById("divMsgCorrect").style.display = "none";
    document.getElementById("divMsgIncorrect").style.display = "none";

}

function fnKeyPadClick(btn_id) {

    let vPrevResult = document.getElementById("txtResult").value;
    let vNewesult = "";

    switch (btn_id) {
        case "btnX":
            vNewesult = vPrevResult.slice(0, -1);;
            break;
        case "btnClear":
            vNewesult = "";
            break;
        case "btnNeg":
            vNewesult = "-".concat(vPrevResult);
            break;
        default:
            vNewesult = vPrevResult.concat(document.getElementById(btn_id).value);
            break;
    }
    document.getElementById("txtResult").value = vNewesult;
}

function fnValidateResult() {

    let vSum = document.getElementById("txtResult").value;
    let vA = document.getElementById("fieldA").innerText;
    let vB = document.getElementById("fieldB").innerText;

    if (parseInt(vSum) == parseInt(vA) + parseInt(vB)) {
        fnSetFields();
        document.getElementById("divMsgWelcome").style.display = "none";
        document.getElementById("divMsgCorrect").style.display = "block";
        document.getElementById("divMsgIncorrect").style.display = "none";
        audioGreatJobControl.play();
    }
    else {
        document.getElementById("divMsgWelcome").style.display = "none";
        document.getElementById("divMsgCorrect").style.display = "none";
        document.getElementById("divMsgIncorrect").style.display = "block";
        //document.getElementById("txtResult").value="";
        audioTryAgainControl.play();
    }
}
