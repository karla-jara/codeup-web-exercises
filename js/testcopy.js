/**
 * Write your solutions here
 */
$(document).ready(function(){
    //#1

    $('#change-bg-color').on('click',function () {
        $('body').css('background-color', 'blue')
    });

    $('#change-bg-color').click(function (){
    $('body').css('background-color', 'blue')
})

    //#2

    $("body").children(".btn").on('click',function () {
        $(this).css('background-color', 'blue')
    });

    //#3

    $('#reset-btn').click(function() {
        location.reload();
    })

    //#4
    // var valueStar;
    // $("p").children(".star").on('hover',function () {
    //     valueStar = $('#review-result').html('dataValue')
    // });

    $('.star').hover(function (){
        var dataValue = $(this).attr('data-value');
        $('#review-result').html(dataValue)
    })

    //#5

    $('#go-to-btn').click(function () {
        var newUrl = $('#custom-url').val();
        window.location = newUrl;

        // $('label').css('color', "black")
    });

    //#6
    $('#append-to-ul').click(function() {
        var newLi = '<li>text</li>';
        $("#append-to-me").append('newLi');
    })

    //#7

    $(document).ready(function(){
        $('#message').html('goodbye,world');
    }, 2000);

    //8
    $('#h1-toggle li').click(function(){
        $(this).toggleClass('star')})

})
