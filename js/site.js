$(function () {
    $('.diff-email label').click(function () {
        $(this).hide();
        $('#diff-email').show();
    });
    $('.modal-footer .btn-primary,.close,.modal-footer .btn-default').click(function () {
        $('#diff-email').val($(this).attr('placeholder'));
        $('#diff-email').hide();
        $('.diff-email label').show();
    });
    $("#resend-registration").on('hide.bs.modal', function () {
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

    
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $(".dropdown-search").select2({
        dropdownAutoWidth: false,
        width: 'resolve'
    });
    
    

    $("#carousel-one .right").click(function () {
        if ($(".active h2").html() == 'Funnel') {
            $('#carousel-two').removeClass('hide');
        }
        else {
            $('#carousel-two').addClass('hide');
        }
        if ($(".active h2").html() == 'Program Time to Fill') {
            $('#carousel-three').removeClass('hide');
        }
        else {
            $('#carousel-three').addClass('hide');
        }
    });
    $("#carousel-one .left").click(function () {
        if ($(".active h2").html() == 'Req Stage Gate') {
            $('#carousel-two').removeClass('hide');
        }
        else {
            $('#carousel-two').addClass('hide');
        }
        if ($(".active h2").html() == 'Supplier Score Card') {
            $('#carousel-three').removeClass('hide');
        }
        else {
            $('#carousel-three').addClass('hide');
        }
    });

    $('.date-pick').datepicker({
        format: "dd/mm/yyyy"
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