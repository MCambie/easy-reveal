
var height = $(window).height();

function show () {
  $( ".revealable" ).each(function() {
    var fromTop = $(this).offset().top;
    var scroll = $(window).scrollTop();
    if ((scroll + (height- 100)) >= fromTop) {
      $(this).addClass('revealed');
    }
  });
}
show();
$(window).on('scroll', function() {
  show();
})





























