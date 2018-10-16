$(document).ready(function(){
  $('.about__gallery-slider').slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    accessibility: false,
    responsive: [
        {
          breakpoint: 745,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
  });

  $('.how-we-make__table-container').append('<button type="button" class="how-we-make__table-container-button"></button>');
  $('.how-we-make__table-container-button').on('click', function(){
    var scrollDistance = $(this).parent().children('.how-we-make__table').width() - $(this).parent().width();
    $(this).parent().animate({scrollLeft: scrollDistance }, 300);
  })

  $('.how-we-make__table-container').on('scroll', function(){
    $('.how-we-make__table-container-button', this).hide();
  });

  $('.button').on('click', function(evt){
    evt.preventDefault();
    $('#modal').show();
    $('#name').focus();
  });

  $('#mbutton-close').on('click', function(){
    $('#modal').hide();
  });
});
