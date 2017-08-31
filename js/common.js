var character_length = 31;
var index = 0;
var letters =  $("#input_text").val();
var current_string = letters.substring(index, index + character_length);

var wordcount = 0;

$("#target").text(current_string);
$(window).keypress(function(evt){

    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var charTyped = String.fromCharCode(charCode);
    if(charTyped == letters.charAt(index)){
        if(charTyped == " "){
            wordcount ++;
            $("#wordcount").text(wordcount);
        }
        index ++;
        current_string = letters.substring(index, index + character_length);
        $("#target").text(current_string);
        $("#your-attempt").append(charTyped);
        if(index == letters.length){
            wordcount ++;
            $("#wordcount").text(wordcount);
            finished();
        }
    }else{
        $("#your-attempt").append("<span class='wrong'>" + charTyped + "</span>");
        errors ++;
        $("#errors").text(errors);
    }
});

var errors = 0;

function finished(){
    alert("Errors:" + errors);
}
