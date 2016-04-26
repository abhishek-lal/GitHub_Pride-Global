$(function () {
    $('.diff-email label').click(function () {
        $(this).hide();
        $('#diff-email').show();
    });
    $('.modal-footer .btn-primary,.close').click(function () {
        $('#diff-email').val($(this).attr('placeholder'));
        $('#diff-email').hide();
        $('.diff-email label').show();
    });

    //$('.button-indicator .btn').click(function () {
    //    $(this).toggleClass('btn-default btn-clearbg');
    //});

    // Dashboard left-right cols equal height//    
    //var rightContHeight = $(".right-container").outerHeight() + 40 + 'px';
    //var leftContHeight = $(".left-container").outerHeight() + 'px';

    //alert(rightContHeight);
    //$('.left-container').css({ "height": rightContHeight });

    

});
