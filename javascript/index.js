window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      })});
