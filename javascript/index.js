window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
      })});

const menu = document.querySelector(".bar-menu-mob");

menu.addEventListener("click", function() {
  const open = document.getElementById("menu-mobile");
  open.setAttribute("style", "left:0")
});

const closed = document.querySelector(".close-menu-mob");

closed.addEventListener("click", function(){
  const close = document.getElementById("menu-mobile");
  close.setAttribute("style", "left:-100%")  
})

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider-2'), {
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: '.dots-2',
      arrows: {
        prev: '.glider-prev-2',
        next: '.glider-next-2'
      },
      responsive: [
        {
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    })});
