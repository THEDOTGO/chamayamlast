// PHOTO GALLERY STARTS
$(".galleryCarousel").owlCarousel({
  loop: true,
  stagePadding: 400,
  margin: 100,
  nav: true,
  autoplay: true,
  navText: [
    "<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div><div class='num' id='num'>1/12</div>",
    "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>",
    "<div class='num' id='num'></div>",
  ],
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 20,
    },
    600: {
      items: 1,
      nav: true,
      stagePadding: 20,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});

// PHOTO GALLERY END


// TESTIMONIAL GALLERY STARTS

$(".testimonialCarousel").owlCarousel({
  loop: true,
  stagePadding: 400,
  margin: 100,
  nav: true,
  autoplay: true,
  navText: [
    "<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div><div class='num' id='count'>1/4</div>",
    "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>",
    "<div class='num' id='num'></div>",
  ],
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 20,
    },
    600: {
      items: 1,
      nav: true,
      stagePadding: 20,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});
// TESTIMONIAL GALLERY ENDS