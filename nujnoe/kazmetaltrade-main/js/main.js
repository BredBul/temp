document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__nav');
    if(iconMenu) {
        iconMenu.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    }

    // Закрытие меню при клике
    const menuLinks = document.querySelectorAll('.menu__link');
    
    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                // Закрытие меню при клике X
                if(iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }
            }
        }
    }

    // Slider section
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationTooltips: ['Главная', 'О компании', 'Как заказать', 'Оплата', 'Прайс', 'Отзывы', 'Контакты'],
        showActiveTooltip: true,
        anchors:['hero', 'about', 'order', 'payment', 'price', 'testimonials', 'contacts'],
        normalScrollElements: '.accordion__block, .contacts__map',
        responsiveWidth: 951,
    })

    // Accordion
    function initAcc(elem, option){
        document.addEventListener('click', function (e) {
            if (!e.target.matches(elem+' .accordion__link')) return;
            else{
                if(!e.target.parentElement.classList.contains('active')){
                    if(option==true){
                        let elementList = document.querySelectorAll(elem+' .accordion__item');
                        Array.prototype.forEach.call(elementList, function (e) {
                            e.classList.remove('active');
                        });
                    }            
                    e.target.parentElement.classList.add('active');
                }else{
                    e.target.parentElement.classList.remove('active');
                }
            }
        });
    }
    initAcc('.accordion.v1', true);

    // inputMask
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);

    // Modal window
    let btns = document.querySelectorAll("*[data-modal-btn]");

    for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='"+name+"']");
        modal.style.display = "block";
        let close = modal.querySelector(".modal__close");
        close.addEventListener('click', function() {
        modal.style.display = "none";
        })
    })
    }
    window.onclick = function (e) {
    if(e.target.hasAttribute('data-modal-window')) {
        let modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
        }
    }
    }

    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
        Visible (map);
    });
        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        Visible (map);
});


// Header Scroll BG
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
})

// Yandex Map
setTimeout(function(){
    let elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function getYaMap(){
    ymaps.ready(init);
    let myMap,
    myPlacemark1,
    myPlacemark2;
    function init(){
        // Создание карты.
            myMap = new ymaps.Map("map", {
            center: [43.51583407764735,73.20454185556727],
            zoom: 6
        });

        myMap.controls
            .remove('trafficControl')
            .remove('geolocationConrol')
            .remove('searchControl')
            .remove('typeSelector');

        // myMap.behaviors.disable([
        // 'drag'
        // ]);

        myPlacemark1 = new ymaps.Placemark([43.3410295745422,76.96583], {
        balloonContentHeader: 'Филиал г. Алматы',
        balloonContent: 'пр. Суюнбая, 152Г'
        });
        myPlacemark2 = new ymaps.Placemark([42.29497538416909,69.64130883600399], {
        balloonContentHeader: 'Филиал г. Шымкент',
        balloonContent: 'ул. Койкелди Батыра, 26'
        });
        myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
    };
}