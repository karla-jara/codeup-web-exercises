/**
 * Write your solutions here
 */

'use strict';

/** Q1: When the button with the id of change-bg-color is clicked the background of the page should turn blue.**/
//
// function bgClick(){
//     $('body').css('background-color','blue')
// }
// $('#change-bg-color').click(bgClick);

$('#change-bg-color').click(function (){
    $('body').css('background', 'blue')
})

/** Q2: When a button that belongs to the btn class is clicked, change the background color of that button to this color: #93f2e5 **/

$('.btn').click(function (){
    $(this).css('background-color', '#93f2e5')
});


/** Q3: When the button with the id of reset-btn is clicked make sure it reloads the page and restores everything back to the initial state **/

$('#reset-btn').click(function (){
    location.reload();
});


/** Q4: When a star is being hovered by the mouse: get the selected data attribute value from the star being hovered and display it in the element with the id of review-result **/

$('.star').hover(function (){
    var dataValue = $(this).attr('data-value');
    $('#review-result').html(dataValue);
});


/** Q5: When the button with the id of go-to-btn is clicked change the window location to the url specified in the URL input with the id of custom-url. Consider adding http:// to your URLS if you want to test external domains **/

$("#go-to-btn").click(function(){
    var newURL = $("#custom-url").val();
    window.location = newURL;
});



/** Q6: When the button with an id of append-to-ul is clicked, append a li with the content of text to the ul with the id of append-to-me **/

$('#append-to-ul').click(function(){
    var newLi = "<li>text</li>";
    $('#append-to-me').append(newLi);
});


/** Q7: Two seconds after the page loads, the heading with the id of message should change it's text to "Goodbye, World!". **/

$(document).ready(function (){
    setTimeout(function (){
        $('#message').html("Goodbye, World!")
    }, 2000);
});


/** Q8: When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked should change to yellow. When a list item that has a yellow background is clicked, the background should change back to the original background  **/

$('#hl-toggle li').click(function (){
    $(this).toggleClass('star')
});




/** Q9: When the button with the id of upcase-name is clicked, the element with the id of output should display the text "Your name uppercased is: " + the value of the input element with the id of input transformed to uppercase **/

$('#upcase-name').click(function (){
    var nameValue = $('#input').val();
    $('#output').html("Your name uppercased is: " + nameValue.toUpperCase());     //.text instead of .html also works
});


/** Q10 : Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that was clicked should be doubled **/

$('#font-grow li').dblclick(function(){
    // console.log(parseFloat($(this).css('font-size')));
    var currentSize= parseFloat($(this).css('font-size'))
    // also works without the parseFloat
    var doubleSize = (currentSize * 2) + 'px';
    $(this).css('font-size', doubleSize);
});


// Hide certain element on click

$("button").click(function(){
    $(".test").hide();
});
