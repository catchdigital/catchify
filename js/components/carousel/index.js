import { Carousel } from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('[data-carousel-autoinit] .carousel');
  var instances = M.Carousel.init(elems, {});
  console.log(elems);
});
