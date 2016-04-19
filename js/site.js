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
    $('.button-indicator .btn-default').click(function () {
        $(this).toggleClass('btn-clearbg');
    });
    

});
