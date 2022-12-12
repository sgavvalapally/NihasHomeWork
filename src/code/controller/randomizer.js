function fnRandomizer_SetFields(caller_id) {
    var vA = null;
    var vB = null;

    const arSel = [];

    var ischkAdditions = document.getElementById("chkAdditions").checked;
    var ischkSubtractions = document.getElementById("chkSubtractions").checked;
    var ischkMultiplications = document.getElementById("chkMultiplications").checked;

    if (document.getElementById("chkAddLvlSimple").checked) { arSel.push("AS"); }
    if (document.getElementById("chkAddLvlMedium").checked) { arSel.push("AM"); }
    if (document.getElementById("chkAddLvlComplex").checked) { arSel.push("AC"); }
    if (document.getElementById("chkAddLvlTough").checked) { arSel.push("AT"); }

    if (document.getElementById("chkSubtractLvlSimple").checked) { arSel.push("SS"); }
    if (document.getElementById("chkSubtractLvlMedium").checked) { arSel.push("SM"); }
    if (document.getElementById("chkSubtractLvlComplex").checked) { arSel.push("SC"); }
    if (document.getElementById("chkSubtractLvlTough").checked) { arSel.push("ST"); }

    if (document.getElementById("chkMultiLvlSimple").checked) { arSel.push("MS"); }
    if (document.getElementById("chkMultiLvlMedium").checked) { arSel.push("MM"); }
    if (document.getElementById("chkMultiLvlComplex").checked) { arSel.push("MC"); }
    if (document.getElementById("chkMultiLvlTough").checked) { arSel.push("MT"); }

    if (arSel.length > 0) {
        var vIndex = Math.floor(Math.random() * arSel.length);
        var vChoice = arSel[vIndex];
    }

    switch (vChoice) {
        case "AT":
            vA = Math.floor(Math.random() * 1000);
            vB = Math.floor(Math.random() * 1000);
            document.getElementById("lblOperator").innerText = "+";
            break;
        case "AC":
            vA = Math.floor(Math.random() * 101);
            vB = Math.floor(Math.random() * 101);
            document.getElementById("lblOperator").innerText = "+";
            break;
        case "AM":
            vA = Math.floor(Math.random() * 11);
            vB = Math.floor(Math.random() * 11);
            document.getElementById("lblOperator").innerText = "+";
            break;
        case "AS":
            vA = Math.floor(Math.random() * 6);
            vB = Math.floor(Math.random() * 6);
            document.getElementById("lblOperator").innerText = "+";
            break;
        case "ST":
            vA = Math.floor(Math.random() * 1000);
            vB = Math.floor(Math.random() * 1000);
            document.getElementById("lblOperator").innerText = "-";
            break;
        case "SC":
            vA = Math.floor(Math.random() * 101);
            vB = Math.floor(Math.random() * 101);
            document.getElementById("lblOperator").innerText = "-";
            break;
        case "SM":
            vA = Math.floor(Math.random() * 21);
            vB = Math.floor(Math.random() * 21);
            document.getElementById("lblOperator").innerText = "-";
            break;
        case "SS":
            vA = Math.floor(Math.random() * 6);
            vB = Math.floor(Math.random() * 6);
            document.getElementById("lblOperator").innerText = "-";
            break;
        case "MT":
            vA = Math.floor(Math.random() * 21);
            vB = Math.floor(Math.random() * 11);
            break;
        case "MC":
            vA = Math.floor(Math.random() * 11);
            vB = Math.floor(Math.random() * 11);
            break;
        case "MM":
            vA = Math.floor(Math.random() * 6);
            vB = Math.floor(Math.random() * 11);
            break;
        case "MS":
            vA = Math.floor(Math.random() * 4);
            vB = Math.floor(Math.random() * 11);
            break;
        default:
            break;
    }

    document.getElementById("txtResult").value = "";

    if (document.getElementById("lblOperator").innerText == "-" && parseInt(vA) < parseInt(vB)) {
        document.getElementById("fieldA").innerHTML = vB;
        document.getElementById("fieldB").innerHTML = vA;
    }
    else {
        document.getElementById("fieldA").innerHTML = vA;
        document.getElementById("fieldB").innerHTML = vB;
    }

    if (caller_id != "btnSubmitSettings") {
        document.getElementById("lblTotalQuestions").innerText = parseInt(document.getElementById("lblTotalQuestions").innerText) + 1;
    }
}
