// (function ($) {
// })(jQuery);

$(document).ready(function() {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });

    // profile-overlay
    $('#client-overlay, #profile-overlay, #track-overlay, #staff-profile-overlay').hide();
    

    // DISPLAYING THE ADD CLIENT OVERLAY
    $('#addClientBtn').click(function() {
        $('#client-overlay').fadeIn();
    });

    $(document).mouseup(function(e) {
        var container = $('.client-tab');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#client-overlay, #profile-overlay, #track-overlay, #staff-profile-overlay').fadeOut();
        }
    });

    // DISPLAYING THE SEND MESSAGE OVERLAY
    $('#sendMessageButton').click(function() {
        $('#client-overlay').fadeIn();
    });

    // DISPLAYING THE PROFILE OVERLAY
    $('#profileOvelayBtn').click(function() {
        $('#profile-overlay').fadeIn();
    });

    // DISPLAYING THE ADD STAFF OVERLAY
    $('#addStaffBtn').click(function() {
        $('#client-overlay').fadeIn();
    });

    // DISPLAYING TRACK OVERLAY
    $('#trackOvelayBtn').click(function() {
        $('#track-overlay').fadeIn();
    });

    // DISPLAYING STAFF OVERLAY
    // staffprofileOvelayBtn
    $('#staffprofileOvelayBtn').click(function() {
        $('#staff-profile-overlay').fadeIn();
    });

    // filter button
    $('#filterButton').click(function(e) {
        e.stopPropagation();
        $('#filterOptions').toggle();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('#filterOptions').length && !$(e.target).is('#filterButton')) {
          $('#filterOptions').hide();
        }
    });


    // Context menu handling
    $("#myTable tbody tr").on("contextmenu", function(e) {
        // Prevent the default context menu
        e.preventDefault();
        
        // Show context menu
        showContextMenu(e.pageX, e.pageY);
        
        // Store the current row
        var currentRow = $(this);
        
    });

    $(".edit").click(function(e) {
        e.preventDefault();
        $(".sub-menu").toggle();
    });
    
    // Hide context menu on document click
    $(document).on("click", function(e) {
        if (!$(e.target).closest('#contextMenu').length) {
            hideContextMenu();
        }
    });
    
    function showContextMenu(x, y) {
        $("#contextMenu").css({
            display: "block",
            left: x,
            top: y
        });
    }
    
    function hideContextMenu() {
        $("#contextMenu").hide();
        $(".sub-menu").hide();
    }
    

});
