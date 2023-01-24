//current day 
var today = moment()
$('#currentDay'). text (today.format('DD MMMM YYYY'));
//console.log(currentDay)
var inputs = [{
    time: 9,
    input:"",
},{
    time: 10,
    input:"",    
},{
    time: 11,
    input:"",
},{
    time: 12,
    input:"",
},{
    time: 13,
    input:"",
},{
    time: 14,
    inputs:"",
},{
    time: 15,
    input:"",
}, {
    time: 16,
    input:"",
},{
    time: 17,
    input:"",
}, ];
//create variables to target each timeblock
var pastColor =""
var presentColor =""
var futureColor =""  
var time = thisHour
var thisHour = moment(time).format('H')
var timeblocks = $('.timeblock')
//create blocks for information, time, date and save button.
timeblocks.each(function(i){
var displayTime = $("<div>")
displayTime.addClass("col-1 border")
displayTime.text(i + 9)
var textArea = $("<textarea>")
textArea.addClass("col-10 border")
textArea.attr("id", i + 9)
var saveButton = $("<button>")
saveButton.addClass("col-1 border save")
saveButton.text("save")
$(this).append(displayTime, textArea, saveButton)
var hour = $(this).attr('data-hour'); 
hour = parseInt(hour, 10)
thisHour = parseInt(thisHour, 10)


if (hour < thisHour){
    $(this).css('background-color','orange', pastColor, saveButton.hover)
} else if (hour == thisHour){
    $(this).css('background-color','red', presentColor)    
    } else {
    $(this).css('background-color', 'green', futureColor)   
 }
});   

//save to local storage and recall
$(".save").on("click", function(event){ 
event.preventDefault()
var userInput = $(this).siblings("textArea").val()
var time = $(this).siblings("div").text()
localStorage.setItem(time, userInput)
var saveMsg = "Saved to local storage"
$(saveMsg).ready(function(){
    $("saveMsg")
});

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))  
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))
});
