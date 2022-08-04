// Dropdowns function
// function is created the way that it'll work for all dropdowns on the page
// if they just follow the same html structure

function activateDropdown () {

    if (document.querySelector(".dropdowns")) {
        document.querySelectorAll(".dropdowns").forEach(dropdownsContainer => {
            dropdownsContainer.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.addEventListener("click", () => {

                    dropdown.classList.add("active")

                    dropdownsContainer.querySelectorAll(".dropdown").forEach(dropdown2 => {

                        if (dropdown2 !== dropdown) {
                            dropdown2.classList.remove("active");
                        } 

                    });

                });
            });
        });
    }

}

activateDropdown();

// End of Dropdowns function

// Carousel/Swiper

// core version + navigation, pagination modules:
  import Swiper, { Navigation } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/swiper.scss';

  Swiper.use([Navigation]);

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    allowSlideNext: true,
    allowSlidePrev: true,
    parallax: true,
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiper.on('slideChange', function() {
      var realIndex = swiper.realIndex;
      if (realIndex == 0) {
        document.querySelector(".swiper-button-prev").style.display = "none";
      } else {
        document.querySelector(".swiper-button-prev").style.display = "block";
      }
    });

// End of Carousel/Swiper