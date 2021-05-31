$(function () {
    // menu link active
    $('.menu-list__link').on('click', function (event) {
        event.preventDefault();
        $('.menu-list__link').removeClass('menu-list__link--active');
        $(this).toggleClass('menu-list__link--active');        
    });
    // btn to-top       
    $(window).on('scroll', function () {
        let scrolled = window.pageYOffset;
        let btn = document.querySelector('.to-top');
        if (scrolled > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });
    $('.to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 20
        }, 600);
    });
    // favorite icon
    $('.card__favorite-btn').on('click', function () {
        $(this).toggleClass('card__favorite-btn--active');
    });
    // sort-btn arrow
    $('.sort-btn').on('click', function () {
        $(this).toggleClass('sort-btn--active');
    });
    // mobile menu
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
    });
    // Validate form
    function validateForm(form) {
        $(form).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "Введите почтый ящик",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }
    validateForm('#form-newsletter');
    // Alert modal
    $('.card__favorite-btn').on('click', function (e) {
        if ($(e.target).hasClass('card__favorite-btn--active')) {
            $('.overlay, #alert-modal').fadeIn('slow');
            $('.modal-alert__descr').text('Товар добавлен в избранное!');
            $('body').css('overflow', 'hidden');
        } else {
            $('.overlay, #alert-modal').fadeIn('slow');
            $('.modal-alert__descr').text('Товар удален из избранного');
            $('body').css('overflow', 'hidden');
        }
    });
    $('.modal-alert__close').on('click', function () {
        $('.overlay, #alert-modal').fadeOut('slow');
        $('body').css('overflow', '');
    });
    $(document).click(function (e) {
        if ($(e.target).is('.overlay')) {
            $('.overlay, #alert-modal').fadeOut('slow');
            $('body').css('overflow', '');
        }
    });
    // Sorting
    let containerEl = document.querySelector('.catalog__inner');   
    let mixer = mixitup(containerEl, {
        animation: {
            duration: 1000,
            nudge: true,
            reverseOut: false,
            effects: "fade scale(0.27) translateZ(-100px)"
        }
    });
});