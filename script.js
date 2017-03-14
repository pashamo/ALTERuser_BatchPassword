function stringParser() {
    document.getElementById("data").innerHTML = "";
    document.getElementById("alterCMD").innerHTML = "";

    var password = document.getElementById("pwd").value;
    var documentInput = document.getElementById("input").value;

    var splitText = documentInput.split("\n");

    document.getElementById("data").innerHTML = password + "<br><br>" + splitText;

    for (var i = 0; i < splitText.length; i++) {
        document.getElementById("alterCMD").innerHTML = document.getElementById("alterCMD").innerHTML + "ALTER USER \"" + splitText[i] + "\" PROFILE \"ENDUSER2\" IDENTIFIED BY \"" + password + "\" account unlock;<br>" ;
    }
}
