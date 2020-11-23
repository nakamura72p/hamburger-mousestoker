$(function() {

  var stalker = $("#stalker");

  $(document).on("mousemove", function(e) {
    var x = e.pageX;
    var y = e.pageY;

    setTimeout(function() {
      stalker.css({
        "opacity": ".7",
        "transform": "translate(" + x + "px," + y + "px)"
      });
    }, 300);
  });

  $(".nav__toggle").on({
    "mouseenter": function() {

      stalker.addClass("active");
    },
    "mouseleave": function() {
      stalker.removeClass("active");

    }
  });

  $(".nav__toggle").click(function() {
    $(".nav").toggleClass('nav--open');
  });
});

// $(function() {
//   $('.nav__toggle').hover(function() {
//
//     $('.i-top').css({
//       "top": "0"
//     }, 1000);
//     $('.i-bottom').css({
//       "bottom": "0"
//     }, 1000);
//
//   }, function() {
//
//     $('.i-top').css({
//       "top": "2px"
//     }, 1000);
//     $('.i-bottom').css({
//       "bottom": "2px"
//     }, 1000);
//
//   });
// });


$(function() { // できないところ
  $('.nav-open .nav__toggle').hover(function() {
    $('.i-top').css({
      "top": "2px"
    });
    $('.i-bottom').css({
      "bottom": "2px"
    });
  });
});

$(function(){
  $('.nav__menu li').hover(function(){
    $('.nav__menu li').not(this).toggleClass('-js-li');
  });
});
