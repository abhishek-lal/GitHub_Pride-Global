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
    // for Audit Logs 
    $(".audit-filter").hide();
    var auditVal = ($('#auditType option:selected').val());
    $("#" + auditVal).toggle();

    $('#auditType').change(function (event) {
        $(".audit-filter").hide();
        var auditVal = ($('#auditType option:selected').val());
        $("#" + auditVal).toggle();
    });
    
    $('.link-toggle').click(function () {
        $(this).prev('span').toggle();
        var $this = $(this);
        $this.toggleClass('see-more');
        if ($this.hasClass('see-more')) {
                $this.text('See more');
            } else {
                $(this).text('Less');
            }
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
