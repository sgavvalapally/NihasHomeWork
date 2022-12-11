function fnRandomizer_SetFields(caller_id)
{
    var vA = null;
    var vB = null;

    var ischkAdditions = document.getElementById("chkAdditions").checked;
    var ischkSubtractions = document.getElementById("chkSubtractions").checked;
    var ischkMultiplications = document.getElementById("chkMultiplications").checked;
    // window.alert("ischkAdditions");
    if(ischkAdditions)
    {
        var ischkAddLvlSimple = document.getElementById("chkAddLvlSimple").checked;
        var ischkAddLvlMedium = document.getElementById("chkAddLvlMedium").checked;
        var ischkAddLvlComplex = document.getElementById("chkAddLvlComplex").checked;
        var ischkAddLvlTough = document.getElementById("chkAddLvlTough").checked;

        switch (true) {
            case ischkAddLvlTough:
                vA = Math.floor(Math.random() * 1000);
                vB = Math.floor(Math.random() * 1000);
                break;
            case ischkAddLvlComplex:
                vA = Math.floor(Math.random() * 101);
                vB = Math.floor(Math.random() * 101);
                break;
            case ischkAddLvlMedium:
                vA = Math.floor(Math.random() * 11);
                vB = Math.floor(Math.random() * 11);
                break;
            case ischkAddLvlSimple:
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 6);
                break;
            default:
                break;
        }
        document.getElementById("lblOperator").innerText = "+";
     }

     if(ischkSubtractions)
     {
        var ischkSubtractLvlSimple = document.getElementById("chkSubtractLvlSimple").checked;
        var ischkSubtractLvlMedium = document.getElementById("chkSubtractLvlMedium").checked;
        var ischkSubtractLvlComplex = document.getElementById("chkSubtractLvlComplex").checked;
        var ischkSubtractLvlTough = document.getElementById("chkSubtractLvlTough").checked;

        switch (true) {
            case ischkSubtractLvlTough:
                vA = Math.floor(Math.random() * 1000);
                vB = Math.floor(Math.random() * 1000);
                break;
            case ischkSubtractLvlComplex:
                vA = Math.floor(Math.random() * 101);
                vB = Math.floor(Math.random() * 101);
                break;
            case ischkSubtractLvlMedium:
                vA = Math.floor(Math.random() * 21);
                vB = Math.floor(Math.random() * 21);
                break;
            case ischkSubtractLvlSimple:
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 6);
                break;
            default:
                break;
        }
        document.getElementById("lblOperator").innerText = "-";
     }

     if(ischkMultiplications)
     {
        var ischkMultiLvlSimple = document.getElementById("chkMultiLvlSimple").checked;
        var ischkMultiLvlMedium = document.getElementById("chkMultiLvlMedium").checked;
        var ischkMultiLvlComplex = document.getElementById("chkMultiLvlComplex").checked;
        var ischkMultiLvlTough = document.getElementById("chkMultiLvlTough").checked;

        switch (true) {
            case ischkMultiLvlTough:
                vA = Math.floor(Math.random() * 21);
                vB = Math.floor(Math.random() * 11);
                break;
            case ischkMultiLvlComplex:
                vA = Math.floor(Math.random() * 11);
                vB = Math.floor(Math.random() * 11);
                break;
            case ischkMultiLvlMedium:
                vA = Math.floor(Math.random() * 6);
                vB = Math.floor(Math.random() * 11);
                break;
            case ischkMultiLvlSimple:
                vA = Math.floor(Math.random() * 4);
                vB = Math.floor(Math.random() * 11);
                break;
            default:
                break;
        }
        document.getElementById("lblOperator").innerText = "x";
     }
    
    document.getElementById("txtResult").value = "";
    document.getElementById("fieldA").innerHTML = vA;
    document.getElementById("fieldB").innerHTML = vB;

    if(caller_id !="btnSubmitSettings")
    {
        document.getElementById("lblTotalQuestions").innerText = parseInt(document.getElementById("lblTotalQuestions").innerText) + 1;
    }
}
