"use strict";

$(document).ready(function (){

//Remove your custom jQuery code from previous exercises.
//
// Add jQuery code that will change the background color of an h1 element when clicked.
//
// Make all paragraphs have a font size of 18px when they are double clicked.
//
// Set all li text color to red when the mouse is hovering; reset to black when it is not.



    // on click changes h1 background to black


    $('h1').click(
        function(h1_e){
            $(this).css('background-color', 'coral');
    });

    //on double click changes paragraphs to 18px

    $('p').dblclick(
        function(p_e){
            $(this).css('font-size', '24px');
    });

    // on hover over changes font to red
    // on hover out changes font to black

    $('li').hover(
        function(){
            $(this).css('color', 'red');
        },
        function (){
            $(this).css('color', 'black');
        });

    // alert Important message

    var contentImportant = $('#message').html();
    alert(contentImportant);

    //





























    // alert("The DOM has fully loaded");
    //
    //
    // // Element selectors examples below vvv
    // $('p').css({'font-size':'30px', 'backgroundColor':'purple', 'color' : 'fuchsia'});
    // $('li').css({'font-size':'70px', 'color':'rebeccapurple'});
    // $('h1').css('color', 'blue');
    // $('div').css({'background-color':'lavender', 'font-size':'50px', 'color':'red'});
    // $('body').css('background-color', 'lightgrey');
    // $('div').html('New text inside of my div tag, courtesy of jquery!')
    // $('p').html('This is a brand new text in my p tag, cus jquery replaced it!')
    //
    // // all selector example below
    // $('*').css({'font-style':'italic', 'font-family':'sans-serif'});
    //
    // // this ones neat, courtesy of Victor
    // // $("*").click(function(){
    // //     $('*').hide()
    // // })
    // // $('*').dblclick(function(){
    // //     $('*').show()
    // // })
    //
    // // jQuery Exercise Below
    //
    // $('#message').html(alert('This is really important, please pay attention'));


    
});