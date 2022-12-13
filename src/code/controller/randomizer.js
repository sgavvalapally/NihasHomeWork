function fnRandomizer_SetFields(caller_id) {
    var vA = null;
    var vB = null;

    const arSel = [];

    var ischkAdditions = document.getElementById("chkAdditions").checked;
    var ischkSubtractions = document.getElementById("chkSubtractions").checked;
    var ischkMultiplications = document.getElementById("chkMultiplications").checked;

    if (document.getElementById("chkAS").checked) {
        if (document.getElementById("txtAS").value == "" || parseInt(document.getElementById("lblAS").innerText) < parseInt(document.getElementById("txtAS").value))
            arSel.push("AS");
    }
    if (document.getElementById("chkAM").checked) {
        if (document.getElementById("txtAM").value == "" || parseInt(document.getElementById("lblAM").innerText) < parseInt(document.getElementById("txtAM").value))
            arSel.push("AM");
    }
    if (document.getElementById("chkAC").checked) {
        if (document.getElementById("txtAC").value == "" || parseInt(document.getElementById("lblAC").innerText) < parseInt(document.getElementById("txtAC").value))
            arSel.push("AC");
    }
    if (document.getElementById("chkAT").checked) {
        if (document.getElementById("txtAT").value == "" || parseInt(document.getElementById("lblAT").innerText) < parseInt(document.getElementById("txtAT").value))
            arSel.push("AT");
    }

    if (document.getElementById("chkSS").checked) {
        if (document.getElementById("txtSS").value == "" || parseInt(document.getElementById("lblSS").innerText) < parseInt(document.getElementById("txtSS").value))
            arSel.push("SS");
    }
    if (document.getElementById("chkSM").checked) {
        if (document.getElementById("txtSM").value == "" || parseInt(document.getElementById("lblSM").innerText) < parseInt(document.getElementById("txtSM").value))
            arSel.push("SM");
    }
    if (document.getElementById("chkSC").checked) {
        if (document.getElementById("txtSC").value == "" || parseInt(document.getElementById("lblSC").innerText) < parseInt(document.getElementById("txtSC").value))
            arSel.push("SC");
    }
    if (document.getElementById("chkST").checked) {
        if (document.getElementById("txtST").value == "" || parseInt(document.getElementById("lblST").innerText) < parseInt(document.getElementById("txtST").value))
            arSel.push("ST");
    }

    if (document.getElementById("chkMS").checked) {
        if (document.getElementById("txtMS").value == "" || parseInt(document.getElementById("lblMS").innerText) < parseInt(document.getElementById("txtMS").value))
            arSel.push("MS");
    }
    if (document.getElementById("chkMM").checked) {
        if (document.getElementById("txtMM").value == "" || parseInt(document.getElementById("lblMM").innerText) < parseInt(document.getElementById("txtMM").value))
            arSel.push("MM");
    }
    if (document.getElementById("chkMC").checked) {
        if (document.getElementById("txtMC").value == "" || parseInt(document.getElementById("lblMC").innerText) < parseInt(document.getElementById("txtMC").value))
            arSel.push("MC");
    }
    if (document.getElementById("chkMT").checked) {
        if (document.getElementById("txtMT").value == "" || parseInt(document.getElementById("lblMT").innerText) < parseInt(document.getElementById("txtMT").value))
            arSel.push("MT");
    }

    if (caller_id != "btnSubmitSettings") {
        document.getElementById("lblTotalQuestions").innerText = parseInt(document.getElementById("lblTotalQuestions").innerText) + 1;
    }

    if (arSel.length > 0) {
        var vIndex = Math.floor(Math.random() * arSel.length);
        var vChoice = arSel[vIndex];

        switch (vChoice) {
            case "AT":
                vA = Math.floor(Math.random() * 1000);
                vB = Math.floor(Math.random() * 1000);
                document.getElementById("lblOperator").innerText = "+";
                document.getElementById("lblAT").innerText = parseInt(document.getElementById("lblAT").innerText) + 1;
                break;
            case "AC":
                vA = Math.floor(Math.random() * 101);
                vB = Math.floor(Math.random() * 101);
                document.getElementById("lblOperator").innerText = "+";
                document.getElementById("lblAC").innerText = parseInt(document.getElementById("lblAC").innerText) + 1;
                break;
            case "AM":
                vA = Math.floor(Math.random() * 11);
                vB = Math.floor(Math.random() * 11);
                document.getElementById("lblOperator").innerText = "+";
                document.getElementById("lblAM").innerText = parseInt(document.getElementById("lblAM").innerText) + 1;
                break;
            case "AS":
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 6);
                document.getElementById("lblOperator").innerText = "+";
                document.getElementById("lblAS").innerText = parseInt(document.getElementById("lblAS").innerText) + 1;
                break;
            case "ST":
                vA = Math.floor(Math.random() * 1000);
                vB = Math.floor(Math.random() * 1000);
                document.getElementById("lblOperator").innerText = "-";
                document.getElementById("lblST").innerText = parseInt(document.getElementById("lblST").innerText) + 1;
                break;
            case "SC":
                vA = Math.floor(Math.random() * 101);
                vB = Math.floor(Math.random() * 101);
                document.getElementById("lblOperator").innerText = "-";
                document.getElementById("lblSC").innerText = parseInt(document.getElementById("lblSC").innerText) + 1;
                break;
            case "SM":
                vA = Math.floor(Math.random() * 21);
                vB = Math.floor(Math.random() * 21);
                document.getElementById("lblOperator").innerText = "-";
                document.getElementById("lblSM").innerText = parseInt(document.getElementById("lblSM").innerText) + 1;
                break;
            case "SS":
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 6);
                document.getElementById("lblOperator").innerText = "-";
                document.getElementById("lblSS").innerText = parseInt(document.getElementById("lblSS").innerText) + 1;
                break;
            case "MT":
                vA = Math.floor(Math.random() * 21);
                vB = Math.floor(Math.random() * 11);
                document.getElementById("lblOperator").innerText = "x";
                document.getElementById("lblMT").innerText = parseInt(document.getElementById("lblMT").innerText) + 1;
                break;
            case "MC":
                vA = Math.floor(Math.random() * 11);
                vB = Math.floor(Math.random() * 11);
                document.getElementById("lblOperator").innerText = "x";
                document.getElementById("lblMC").innerText = parseInt(document.getElementById("lblMC").innerText) + 1;
                break;
            case "MM":
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 11);
                document.getElementById("lblOperator").innerText = "x";
                document.getElementById("lblMM").innerText = parseInt(document.getElementById("lblMM").innerText) + 1;
                break;
            case "MS":
                vA = Math.floor(Math.random() * 4);
                vB = Math.floor(Math.random() * 11);
                document.getElementById("lblOperator").innerText = "x";
                document.getElementById("lblMS").innerText = parseInt(document.getElementById("lblMS").innerText) + 1;
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
    }
}
