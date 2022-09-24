// -------------DRIVER--------------
$(document).ready(function(){
    $("#button1").toggle(
        function(){
            $("#button1").css({"background-color": "blue"}).prop("value", "Imewashwa");
            passValue();
        },
        function(){
            $("#button1").css({"background-color": "red"}).prop("value", "Imezimwa");
            passValue();
    });
});

function passValue(){
    var loc = document.getElementById('button1').value;
    localStorage.setItem("location", loc);
    return false;
}

function place(){

}