var audioGreatJobControl = document.getElementById('audioGreatJob');
var audioTryAgainControl = document.getElementById('audioTryAgain');
var workingScript = window.location.pathname;
var workingDir = workingScript.substring(0, workingScript.lastIndexOf("/"));
//window.alert(workingDir);

function fnSetFields(caller_id) {
    if (document.getElementById("lblIsFirstTimeLoaded").innerText == "False") {
        var vWelcomeMessage = "<h1> Dear Parent, Please make your selection for the homework now";
        document.getElementById("divMsgWelcome").style.display = "block";
        document.getElementById("divSettings").style.display = "block";
        document.getElementById("divValidationBanner").style.display = "none";
        document.getElementById("divCalculationFields").style.display = "none";
        document.getElementById("divKeyPad").style.display = "none";
        document.getElementById("divMsgWelcome").innerHTML = vWelcomeMessage;
        document.getElementById("lblIsFirstTimeLoaded").innerText = "True";
    }
    else {
        fnRandomizer_SetFields(caller_id);
    }
}

function fnValidateSettings() {
    var ischkAdditions = document.getElementById("chkAdditions").checked;
    var ischkSubtractions = document.getElementById("chkSubtractions").checked;
    var ischkMultiplications = document.getElementById("chkMultiplications").checked;
    var vResult = true;

    if (!(ischkAdditions || ischkSubtractions || ischkMultiplications)) {
        window.alert("Dear Parent, you have not made any selection !");
        vResult = false;
    }

    if (ischkAdditions) {
        var ischkAddLvlSimple = document.getElementById("chkAddLvlSimple").checked;
        var ischkAddLvlMedium = document.getElementById("chkAddLvlMedium").checked;
        var ischkAddLvlComplex = document.getElementById("chkAddLvlComplex").checked;
        var ischkAddLvlTough = document.getElementById("chkAddLvlTough").checked;

        if (!(ischkAddLvlSimple || ischkAddLvlMedium || ischkAddLvlComplex || ischkAddLvlTough)) {
            window.alert("Dear Parent, you have not selected the complexity for Additions !");
            vResult = false;
        }
    }

    if (ischkSubtractions) {
        var ischkSubtractLvlSimple = document.getElementById("chkSubtractLvlSimple").checked;
        var ischkSubtractLvlMedium = document.getElementById("chkSubtractLvlMedium").checked;
        var ischkSubtractLvlComplex = document.getElementById("chkSubtractLvlComplex").checked;
        var ischkSubtractLvlTough = document.getElementById("chkSubtractLvlTough").checked;

        if (!(ischkSubtractLvlSimple || ischkSubtractLvlMedium || ischkSubtractLvlComplex || ischkSubtractLvlTough)) {
            window.alert("Dear Parent, you have not selected the complexity for Subtractions !");
            vResult = false;
        }
    }

    if (ischkMultiplications) {
        var ischkMultiLvlSimple = document.getElementById("chkMultiLvlSimple").checked;
        var ischkMultiLvlMedium = document.getElementById("chkMultiLvlMedium").checked;
        var ischkMultiLvlComplex = document.getElementById("chkMultiLvlComplex").checked;
        var ischkMultiLvlTough = document.getElementById("chkMultiLvlTough").checked;

        if (!(ischkMultiLvlSimple || ischkMultiLvlMedium || ischkMultiLvlComplex || ischischkMultiLvlToughkSubtractLvlTough)) {
            window.alert("Dear Parent, you have not selected the complexity for Mutliplications !");
            vResult = false;
        }
    }

    return vResult;
}

function fnSubmitSettings(caller_id) {

    var vStatus = fnValidateSettings();

    if (!vStatus) {
        return false;
    }

    var vWelcomeMessage = "<h1> Dear Nihas, Start your Home Work now </h1>";
    document.getElementById("divMsgWelcome").innerHTML = vWelcomeMessage;
    document.getElementById("divMsgWelcome").style.display = "block";
    document.getElementById("divSettings").style.display = "none";
    document.getElementById("divValidationBanner").style.display = "none";
    document.getElementById("divCalculationFields").style.display = "block";
    document.getElementById("divMsgCorrect").style.display = "none";
    document.getElementById("divMsgIncorrect").style.display = "none";
    document.getElementById("divKeyPad").style.display = "block";

    fnSetFields(caller_id);
}

function fnKeyPadClick(caller_id) {

    let vPrevResult = document.getElementById("txtResult").value;
    let vNewesult = "";

    switch (caller_id) {
        case "btnX":
            if (vPrevResult.slice(0, -1) == "-") {
                vNewesult = "";
            }
            else {
                vNewesult = vPrevResult.slice(0, -1);
            }
            break;
        case "btnClear":
            vNewesult = "";
            break;
        case "btnNeg":
            vNewesult = parseInt(vPrevResult) * (-1);
            break;
        default:
            vNewesult = vPrevResult.concat(document.getElementById(caller_id).value);
            break;
    }
    document.getElementById("txtResult").value = vNewesult;
}

function fnValidateResult(caller_id) {

    var vA = document.getElementById("fieldA").innerText;
    var vB = document.getElementById("fieldB").innerText;
    var vUserAnswer = document.getElementById("txtResult").value;
    var vCorrectAnswer = null;

    document.getElementById("divMsgWelcome").style.display = "none";
    document.getElementById("divSettings").style.display = "none";
    document.getElementById("divValidationBanner").style.display = "block";
    document.getElementById("divCalculationFields").style.display = "block";
    document.getElementById("divKeyPad").style.display = "block";

    var vOperator = document.getElementById("lblOperator").innerText;

    switch (vOperator) {
        case "+":
            vCorrectAnswer = parseInt(vA) + parseInt(vB);
            break;
        case "-":
            vCorrectAnswer = parseInt(vA) - parseInt(vB);
            break;
        case "x":
            vCorrectAnswer = parseInt(vA) * parseInt(vB);;
            break;
        default:
            break;
    }

    if (parseInt(vUserAnswer) == parseInt(vCorrectAnswer)) {
        fnSetFields();
        document.getElementById("divMsgCorrect").style.display = "block";
        document.getElementById("divMsgIncorrect").style.display = "none";
        document.getElementById("lblAnsweredCorrectly").innerText = parseInt(document.getElementById("lblAnsweredCorrectly").innerText) + 1;
        audioGreatJobControl.play();
    }
    else {
        document.getElementById("divMsgCorrect").style.display = "none";
        document.getElementById("divMsgIncorrect").style.display = "block";
        document.getElementById("lblTotalQuestions").innerText = parseInt(document.getElementById("lblTotalQuestions").innerText) + 1;
        audioTryAgainControl.play();
    }

    var vTotalQuestions = document.getElementById("lblTotalQuestions").innerText;
    var vAnsweredCorrectly = document.getElementById("lblAnsweredCorrectly").innerText;
    var vScoreText = "<h1>Score : " + vAnsweredCorrectly + "/" + vTotalQuestions + "</h1>";

    document.getElementById("tdScoreCorrect").innerHTML = vScoreText;
    document.getElementById("tdScoreIncorrect").innerHTML = vScoreText;
}
