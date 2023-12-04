
$('.slider').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    autoplay: true,
    dots:true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '1px',
                slidesToShow: 2,
                centerPadding: '1px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


$('.slider__tablet').slick({
  dots:true,
  autoplaySpeed:3000,
  autoplay:true,
});