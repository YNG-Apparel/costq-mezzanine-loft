AOS.init();

      function showSideBar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }

      function closeSideBar() {
        const close = document.querySelector(".sidebar");
        close.style.display = "none";
      }

      var slidesK = document.querySelectorAll(".slide-k");
      var buttonsK = document.querySelectorAll(".slider-btn-k");
      let currentSlideK = 0;

      var manualNavK = function (manual) {
        slidesK.forEach(function (slide) {
          slide.classList.remove("activeK");

          buttonsK.forEach((btn) => {
            btn.classList.remove("activeK");
          });
        });

        slidesK[manual].classList.add("activeK");
        buttonsK[manual].classList.add("activeK");
      };

      buttonsK.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
          manualNavK(i);
          // currentSlideK - i;
        });
      });

      var repeatK = function (activeClass) {
        let active = document.getElementsByClassName("activeK");

        let i = 0;
        var repeaterK = function () {
          setTimeout(function () {
            [...active].forEach(function (activeSlide) {
              activeSlide.classList.remove("activeK");
            });

            slidesK[i].classList.add("activeK");
            buttonsK[i].classList.add("activeK");
            i++;
            // currentSlide=i;

            if (slidesK.length == i) {
              i = 0;
            }
            repeaterK();
          }, 3500);
        };
        repeaterK();
      };
      repeatK();
        //  rahhh
      var slidesB = document.querySelectorAll(".slide-b");
      var buttonsB = document.querySelectorAll(".slider-btn-b");
      let currentSlideB = 0;

      var manualNavB = function (manual) {
        slidesB.forEach(function (slide) {
          slide.classList.remove("activeB");
          buttonsB.forEach((btn) => {
            btn.classList.remove("activeB");
          });
        });

        slidesB[manual].classList.add("activeB");
        buttonsB[manual].classList.add("activeB");
      };

      buttonsB.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
          manualNavB(i);
          // currentSlideB - i;
        });
      });

      var repeatB = function (activeClass) {
        let active = document.getElementsByClassName("activeB");

        let i = 0;
        var repeaterB = function () {
          setTimeout(function () {
            [...active].forEach(function (activeSlide) {
              activeSlide.classList.remove("activeB");
            });

            slidesB[i].classList.add("activeB");
            buttonsB[i].classList.add("activeB");
            i++;
            // currentSlide=i;

            if (slidesB.length == i) {
              i = 0;
            }
            repeaterB();
          }, 3500);
        };
        repeaterB();
      };
      repeatB();