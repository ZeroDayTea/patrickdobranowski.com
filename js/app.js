(function(){
  'use strict';

  new WOW().init();
})();

$(document).ready(function() {
    // default page
    $('#page-content').load("/about");

    // handle button clicks
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        console.log(target);
        if(target == "/writing") {
            window.open("https://squ1rrel.dev/author/ZeroDayTea/", "_blank");
        }
        else {
            $('#page-content').load(target);
        }
    });
});
