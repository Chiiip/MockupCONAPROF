(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
  $('.modal').modal();
  $('.modal-trigger').modal();
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $('.scroll-animations .animated').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('fadeIn');
    }
  });

  $('.count-up').each(function() {
    if (isScrolledIntoView(this) === true) {
    const valor = $(this).attr("value");
    const valorNumerico = Number.parseInt(valor);
    const id = $(this).attr("id");
    const demo = new CountUp(id, 0, valorNumerico);
    demo.start();
    $(this).removeClass('count-up');
    }
  });

  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeIn');
      }
    });

    $('.count-up').each(function() {
      if (isScrolledIntoView(this) === true) {
      const valor = $(this).attr("value");
      const valorNumerico = Number.parseInt(valor);
      const id = $(this).attr("id");
      const demo = new CountUp(id, 0, valorNumerico);
      demo.start();
      $(this).removeClass('count-up');
      }
    });

  });
});


function initMap() {
  var salvador = {lat: -12.9704, lng: -38.5124};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: salvador, gestureHandling: 'greedy'});
  var marker = new google.maps.Marker({position: salvador, map: map});
}
