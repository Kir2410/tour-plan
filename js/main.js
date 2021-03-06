$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button-next",
      prevEl: ".hotel-slider__button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });
  $(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg" });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom__visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay-visible");
    modalDialog.addClass("modal__dialog-visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay-visible");
    modalDialog.removeClass("modal__dialog-visible");
  }
  // Обработка форм
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Пожалуйста, укажите Ваше имя",
        minlength: "Имя должно быть не короче 2 букв",
      },
      phone: {
        required: "Пожалуйста, укажите Ваш номер телефона",
        minlength: "Номер должен быть не короче 11 цифр",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  AOS.init();
});
