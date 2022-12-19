var audioGreatJobControl = document.getElementById('audioGreatJob');
var audioTryAgainControl = document.getElementById('audioTryAgain');
var audioaudioCompletedHWControl = document.getElementById('audioCompletedHW');
var workingScript = window.location.pathname;
var workingDir = workingScript.substring(0, workingScript.lastIndexOf("/"));
//window.alert(workingDir);

function fnCalculateQuestionsLimit() {
    var vQLimit = 0;

    if (document.getElementById("txtAS").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtAS").value);

    if (document.getElementById("txtAC").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtAC").value);

    if (document.getElementById("txtAT").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtAT").value);

    if (document.getElementById("txtAM").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtAM").value);

    if (document.getElementById("txtSS").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtSS").value);

    if (document.getElementById("txtSM").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtSM").value);

    if (document.getElementById("txtSC").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtSC").value);

    if (document.getElementById("txtST").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtST").value);
    if (document.getElementById("txtMS").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtMS").value);

    if (document.getElementById("txtMM").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtMM").value);

    if (document.getElementById("txtMC").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtMC").value);

    if (document.getElementById("txtMT").value != "")
        vQLimit = vQLimit + parseInt(document.getElementById("txtMT").value);

    document.getElementById("lblQlimit").innerText = vQLimit;
}

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

function fnOnComplexitySelection() {
    var ischkAS = document.getElementById("chkAS").checked;
    var ischkAM = document.getElementById("chkAM").checked;
    var ischkAC = document.getElementById("chkAC").checked;
    var ischkAT = document.getElementById("chkAT").checked;
    var ischkSS = document.getElementById("chkSS").checked;
    var ischkSM = document.getElementById("chkSM").checked;
    var ischkSC = document.getElementById("chkSC").checked;
    var ischkST = document.getElementById("chkST").checked;
    var ischkMS = document.getElementById("chkMS").checked;
    var ischkMM = document.getElementById("chkMM").checked;
    var ischkMC = document.getElementById("chkMC").checked;
    var ischkMT = document.getElementById("chkMT").checked;

    if (ischkAS || ischkAM || ischkAC || ischkAT)
        document.getElementById("chkAdditions").checked = true;

    if (!ischkAS && !ischkAM && !ischkAC && !ischkAT)
        document.getElementById("chkAdditions").checked = false;

    if (ischkSS || ischkSM || ischkSC || ischkST)
        document.getElementById("chkSubtractions").checked = true;

    if (!ischkSS && !ischkSM && !ischkSC && !ischkST)
        document.getElementById("chkSubtractions").checked = false;

    if (ischkMS || ischkMM || ischkMC || ischkMT)
        document.getElementById("chkMultiplications").checked = true;

    if (!ischkMS && !ischkMM && !ischkMC && !ischkMT)
        document.getElementById("chkMultiplications").checked = false;
}

function fnValidateSettings() {
    var ischkAdditions = document.getElementById("chkAdditions").checked;
    var ischkSubtractions = document.getElementById("chkSubtractions").checked;
    var ischkMultiplications = document.getElementById("chkMultiplications").checked;
    var ischkAS = document.getElementById("chkAS").checked;
    var ischkAM = document.getElementById("chkAM").checked;
    var ischkAC = document.getElementById("chkAC").checked;
    var ischkAT = document.getElementById("chkAT").checked;
    var ischkSS = document.getElementById("chkSS").checked;
    var ischkSM = document.getElementById("chkSM").checked;
    var ischkSC = document.getElementById("chkSC").checked;
    var ischkST = document.getElementById("chkST").checked;
    var ischkMS = document.getElementById("chkMS").checked;
    var ischkMM = document.getElementById("chkMM").checked;
    var ischkMC = document.getElementById("chkMC").checked;
    var ischkMT = document.getElementById("chkMT").checked;

    var vResult = true;

    if (!(ischkAdditions || ischkSubtractions || ischkMultiplications)) {
        window.alert("Dear Parent, you have not made any selection !");
        vResult = false;
    }
    else if (ischkAdditions) {
        if (!(ischkAS || ischkAM || ischkAC || ischkAT)) {
            window.alert("Dear Parent, you have not selected the complexity for Additions !");
            vResult = false;
        }
    }
    else if (ischkSubtractions) {
        if (!(ischkSS || ischkSM || ischkSC || ischkST)) {
            window.alert("Dear Parent, you have not selected the complexity for Subtractions !");
            vResult = false;
        }
    }
    else if (ischkMultiplications) {
        if (!(ischkMS || ischkMM || ischkMC || ischkMT)) {
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

    fnCalculateQuestionsLimit();
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

        var vQCount = parseInt(document.getElementById("lblAS").innerText) +
            parseInt(document.getElementById("lblAM").innerText) +
            parseInt(document.getElementById("lblAC").innerText) +
            parseInt(document.getElementById("lblAT").innerText) +
            parseInt(document.getElementById("lblSS").innerText) +
            parseInt(document.getElementById("lblSM").innerText) +
            parseInt(document.getElementById("lblSC").innerText) +
            parseInt(document.getElementById("lblST").innerText) +
            parseInt(document.getElementById("lblMS").innerText) +
            parseInt(document.getElementById("lblMM").innerText) +
            parseInt(document.getElementById("lblMC").innerText) +
            parseInt(document.getElementById("lblMT").innerText)
            ;



        document.getElementById("lblAnsweredCorrectly").innerText = parseInt(document.getElementById("lblAnsweredCorrectly").innerText) + 1;
        document.getElementById("divMsgCorrect").style.display = "block";
        document.getElementById("divMsgIncorrect").style.display = "none";
        
        vQLimit = parseInt(document.getElementById("lblQlimit").innerText);
        if (vQLimit != 0 && parseInt(document.getElementById("lblAnsweredCorrectly").innerText) == vQLimit) {
            document.getElementById("lblMsgCorrect").innerText = "Great Job Nihas ! You have completed your Home Work";
            document.getElementById("btnSubmit").disabled=true;
            document.getElementById("btnClear").disabled=true;
            document.getElementById("btnNeg").disabled=true;
            document.getElementById("btn1").disabled=true;
            document.getElementById("btn2").disabled=true;
            document.getElementById("btn3").disabled=true;
            document.getElementById("btn4").disabled=true;
            document.getElementById("btn5").disabled=true;
            document.getElementById("btn6").disabled=true;
            document.getElementById("btn7").disabled=true;
            document.getElementById("btn8").disabled=true;
            document.getElementById("btn9").disabled=true;
            document.getElementById("btn0").disabled=true;
            document.getElementById("btnX").disabled=true;
            audioaudioCompletedHWControl.play()
        }
        else
        {
        audioGreatJobControl.play();
        }
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
