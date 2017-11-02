$(document).ready(function() {
    //grid
    $(".listing-item ").hover(function() {
        $(this).addClass("isHover");
    }, function() {
        $(this).removeClass("isHover");
    });

    //bx-result
    $('.Faceting-header').click(function() {
        if ($('.bx-filtres').hasClass('active-filtre')) {
            $('.bx-filtres').removeClass('active-filtre');
            $('.Faceting-header').show();
            $('.bx-map').show();
        } else {
            $('.bx-filtres').addClass('active-filtre');
            $('.Faceting-header').hide();
            $('.bx-map').hide();
        }
    });

    $('.Listing-button1').click(function() {
        $('.bx-filtres').addClass('active-filtre');
        $('.Faceting-header').hide();
        $('.bx-map').hide();
    });

    $('.title-result span , .Listing-button2').click(function() {
        $('.bx-filtres').removeClass('active-filtre');
        $('.Faceting-header').show();
        $('.bx-map').show();
    });

    //check box
    $('.Faceting-item ').click(function() {
        $(this).toggleClass('active');
    });

    // select tabs intro result
    $('.Faceting-title ').click(function() {
        $(this).toggleClass('isClosed').parent().toggleClass('hide-choise');
    });

    //datepicker
    var dateToday = new Date();
    var dates = $("#datepicker1").datepicker({
        defaultDate: dateToday,
        changeMonth: false,
        numberOfMonths: 1,
        minDate: dateToday,
    });
    var dates = $("#datepicker2").datepicker({
        defaultDate: "+3w",
        changeMonth: false,
        numberOfMonths: 1,
        minDate: dateToday,
    });

});

$(document).ready(function() {
  $('#countDown').countdown('2017/12/14', function(event) {
    $('#days').html(event.strftime('%D'));
    $('#hours').html(event.strftime('%H'));
    $('#minutes').html(event.strftime('%M'));
    $('#seconds').html(event.strftime('%S'));
    });
});
