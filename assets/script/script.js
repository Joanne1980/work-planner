//current day 
var today = moment()
$('#currentDay'). text (today.format('DD MMMM YYYY'));
console.log(currentDay)

//create variables to target each timeblock
var pastColor =""
var presentColor =""
var futureColor =""  
var time = thisHour
var thisHour = moment(time).format('H')
var timeblocks = $('.timeblock')
timeblocks.each(function(){

var hour = $(this).attr('data-hour'); 
hour = parseInt(hour, 10)
thisHour = parseInt(thisHour, 10)

if (hour < thisHour){
    $(this).css('background-color', pastColor)
} else if (hour == thisHour){
    $(this).css('background-color', presentColor)    
    } else {
    $(this).css('background-color', futureColor)   
 }
})   
//console.log(timeblock)



