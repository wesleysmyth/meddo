$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* hide menu when menu item is clicked on tablet and mobile */ 

// $("a.menu-a").click(function(){
//     $("ul.nav.navbar-nav.navbar-right").addClass("collapse");
// });


// $(".navbar-toggle").click(function(){
//     $("ul.nav.navbar-nav.navbar-right").removeClass("collapse");
// });

/* hide menu when clicking outside the menu area */ 

// $(document).ready(function(){
//     $(document).mouseup(function(e){
//        var menu = $('.nav navbar-nav navbar-right');
//        if (!menu.is(e.target) // The target of the click isn't the container.
//        && menu.has(e.target).length === 0) // Nor a child element of the container
//        {
//         $("ul.nav.navbar-nav.navbar-right").addClass("collapse");

//       }
//     });
// });

/* hide menu on scroll */ 
// var prev = 0;
// var $window = $(window);
// var nav = $('.navbar-right');

// $window.on('scroll', function(){
//   var scrollTop = $window.scrollTop();
//   nav.css('display', 'none');
//   prev = scrollTop;
// });




