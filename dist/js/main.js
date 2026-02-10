//////////////////////////////////////////////////////////////////
// [ Fixed headers ]

window.onscroll = function () {
    const windowScroll = window.scrollY;
    let fixedMenu;

    if (window.innerWidth >= 992) {
        // For Desktop screens
        fixedMenu = document.querySelector('.fixed-header-desktop');
        if (fixedMenu) {
            if (windowScroll > 200) {
                fixedMenu.classList.add('js-fixed');
            } else {
                fixedMenu.classList.remove('js-fixed');
            }
        }
    } else {
        // For Mobile screens
        fixedMenu = document.querySelector('.fixed-header-mobile');
        if (fixedMenu) {
            if (windowScroll > 100) {
                fixedMenu.classList.add('js-fixed');
            } else {
                fixedMenu.classList.remove('js-fixed');
            }
        }
    }
};

//////////////////////////////////////////////////////////////////
// Mega-menu on Desktop

const megaMenuItems = document.querySelectorAll('.has-mega-menu');

megaMenuItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    const megaMenu = item.querySelector('.mega-menu');

    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!megaMenu.matches(':hover')) {
                navLink.classList.remove('active');
                megaMenu.classList.remove('active');
            }
        }, 100);
    });

    item.addEventListener('mouseenter', () => {
        navLink.classList.add('active');
        megaMenu.classList.add('active');
    });
});

// Tabs inside mega-menu on Desktop

const megaMenus = document.querySelectorAll('.mega-menu');

megaMenus.forEach(megaMenu => {
    const navTabs = megaMenu.querySelectorAll('.mega-menu__nav-tabs a');
    const tabPanes = megaMenu.querySelectorAll('.mega-menu__tab-pane');

    navTabs.forEach(tab => {
        tab.addEventListener('mouseover', () => {
            const targetTabId = tab.getAttribute('data-nav-tab');

            navTabs.forEach(navTab => {
                navTab.classList.remove('active');
            });
            tab.classList.add('active');

            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
});

//////////////////////////////////////////////////////////////////
// Клик по кнопкам, вызывающим всплывающие меню

const mobileToggle = document.querySelector('.navbar-mobile__offcanvas-toggle');
const desktopToggle = document.querySelector('.navbar-desktop__offcanvas-toggle');

function toggleOverflow(isExpanded) {
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
}

function handleToggleClick(e) {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    toggleOverflow(isExpanded);
}

mobileToggle.addEventListener('click', handleToggleClick);
desktopToggle.addEventListener('click', handleToggleClick);

//////////////////////////////////////////////////////////////////
// Кастомные выпадашки на мобильном меню

const mobileSubmenuTogglers = document.querySelectorAll('.submenu-toggler');

mobileSubmenuTogglers.forEach(toggler => {
    toggler.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open');
            this.classList.toggle('submenu-active');
        }
    });
});

//////////////////////////////////////////////////////////////////
// Мобильное меню "Каталог"

const invokerCatalogBtn = document.querySelector('.mobile-catalog-menu-invoker');
const closeCatalogBtn = document.querySelector('.mobile-catalog-menu-close');
const catalogContainer = document.querySelector('.mobile-collapse-menu__catalog-container');

if (invokerCatalogBtn && closeCatalogBtn && catalogContainer) {
    invokerCatalogBtn.addEventListener('click', function () {
        catalogContainer.classList.add('open');
        catalogContainer.style.animation = 'slideLeft 0.5s ease forwards';
    });

    closeCatalogBtn.addEventListener('click', function () {
        setTimeout(() => {
            catalogContainer.classList.remove('open');
        }, 300);
        catalogContainer.style.animation = 'slideRight 0.5s ease forwards';
    });
}

document.querySelectorAll('.catalog-menu-item__link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const subsBlock = link.nextElementSibling;
        subsBlock.classList.add('open');
        subsBlock.style.animation = 'slideLeft 0.5s ease forwards';
    });
});

document.querySelectorAll('.catalog-menu-subs-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const subsBlock = btn.parentElement;
        setTimeout(() => {
            subsBlock.classList.remove('open');
        }, 300);
        subsBlock.style.animation = 'slideRight 0.5s ease forwards';
    });
});

//////////////////////////////////////////////////////////////////
// Кнопка "Нравится" у товаров

const likeButtons = document.querySelectorAll('.product-item__like-btn');

likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            button.classList.add('active');
        }
    });
});

const wishlistBtn = document.querySelectorAll('.js-toggle-active');

wishlistBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            button.classList.add('active');
        }
    });
});

//////////////////////////////////////////////////////////////////
// [ Swiper Sliders ]

var swiperHeroSlider = new Swiper(".swiperHeroSlider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiperHeroSlider-next",
        prevEl: ".swiperHeroSlider-prev",
    },
});

var swiperCategoriesCircles = new Swiper(".swiperCategoriesCircles", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
    freeMode: true,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    navigation: {
        nextEl: ".swiperCategoriesCircles-next",
        prevEl: ".swiperCategoriesCircles-prev",
    },
    breakpoints: {
        992: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
    },
});

var swiperShopsLocation = new Swiper(".swiperShopsLocation", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperShopsLocation-next",
        prevEl: ".swiperShopsLocation-prev",
    },
});

var swiperBlogSlider = new Swiper(".swiperBlogSlider", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
    // slidesOffsetBefore: 12,
    // slidesOffsetAfter: 12,
    navigation: {
        nextEl: ".swiperBlogSlider-next",
        prevEl: ".swiperBlogSlider-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});

// product-item page

var swiperProductGalleryThumbs = new Swiper(".swiperProductGalleryThumbs", {
    slidesPerView: 4,
    spaceBetween: 12,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 6,
            spaceBetween: 12,
        },
    },
});
var swiperProductGalleryHero = new Swiper('.swiperProductGalleryHero', {
    slidesPerView: 1,
    spaceBetween: 12,
    grabCursor: true,
    thumbs: {
        swiper: swiperProductGalleryThumbs,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
    },
});

// catalog page

var swiperRecommendProduct = new Swiper(".swiperRecommendProduct", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    slidesOffsetBefore: 22,
    slidesOffsetAfter: 22,
    navigation: {
        nextEl: ".swiperRecommendProduct-next",
        prevEl: ".swiperRecommendProduct-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 22,
        },
    },
});

var swiperRecommendProduct02 = new Swiper(".swiperRecommendProduct02", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 22,
        },
    },
});

// Слайдер пользователей

var swiperUserCommentary = new Swiper(".swiperUserCommentary", {
    slidesPerView: 3.8,
    spaceBetween: 12,
    grabCursor: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
    },
});

// Слайдер коллекций

var swiperProductCollection = new Swiper(".swiperProductCollection", {
    slidesPerView: "auto",
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiperProductCollection-next",
        prevEl: ".swiperProductCollection-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});

// Слайдер каталогов

var swiperProductCatalog = new Swiper(".swiperProductCatalog", {
    slidesPerView: "auto",
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiperProductCatalog-next",
        prevEl: ".swiperProductCatalog-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});

// Слайдер подборки товаров

var swiperFeaturedProducts = new Swiper(".swiperFeaturedProducts", {
    slidesPerView: 2,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperFeaturedProducts-next",
        prevEl: ".swiperFeaturedProducts-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 34,
        },
    },
});

// Готовые решения

var swiperReadyMadeSolutions = new Swiper(".swiperReadyMadeSolutions", {
    slidesPerView: 1,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperReadyMadeSolutions-next",
        prevEl: ".swiperReadyMadeSolutions-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 34,
        },
    },
});

var swiperProductSertification = new Swiper(".swiperProductSertification", {
    slidesPerView: 2,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperProductSertification-next",
        prevEl: ".swiperProductSertification-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 34,
        },
    },
});

var swiperShopHero = new Swiper(".swiperShopHero", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiperShopHero-next",
        prevEl: ".swiperShopHero-prev",
    },
});

var swiperShopBrands = new Swiper(".swiperShopBrands", {
    slidesPerView: 2.15,
    spaceBetween: 32,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,
        },
    },
});

var swiperDesignersCircles = new Swiper(".swiperDesignersCircles", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
});

var swiperSolutionItemGallery = new Swiper(".swiperSolutionItemGallery", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});

var swiperDesignerWork = new Swiper(".swiperDesignerWork", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 22,
        },
        992: {
            spaceBetween: 22,
        },
    },
});

var swiperCollectionItemHero = new Swiper(".swiperCollectionItemHero", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperCollectionItemHero-next",
        prevEl: ".swiperCollectionItemHero-prev",
    },
});

// swiperAbout

var swiperAbout = new Swiper('.swiperAbout', {
    spaceBetween: 12,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});

/////////////

swiperAbout.on('transitionEnd', () => {
    const activeIndex = swiperAbout.activeIndex;
    const accordionButtons = document.querySelectorAll('#accordionAbout .accordion-button');
    const accordionCollapses = document.querySelectorAll('#accordionAbout .accordion-collapse');

    accordionButtons.forEach((button, index) => {
        if (index === activeIndex) {
            button.setAttribute('aria-expanded', 'true');
            button.classList.remove('collapsed');
            accordionCollapses[index].classList.add('show');
        } else {
            button.setAttribute('aria-expanded', 'false');
            button.classList.add('collapsed');
            accordionCollapses[index].classList.remove('show');
        }
    });
});

document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        swiperAbout.slideTo(target);
    });
});

var swiperProfileOrderCardGoodsList = new Swiper(".swiper-profile-order-card-goods-list", {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: false,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },
});

Fancybox.bind("[fancybox-dialog]", {});

//////////////////////////////////////////////////////////////////
// Табы на странице "Товара"

document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.custom-tab-nav-js .nav-link');
    let tabContents = document.querySelectorAll('.product-tab');
    let reviewLink = document.querySelector('.product-tab-link-js');
    let reviewsTab = document.getElementById('product-tab-reviews');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            if (!tab.classList.contains('active')) {
                tabs.forEach((node) => {
                    node.classList.remove('active');
                });
                tab.classList.add('active');

                tabContents.forEach((content) => {
                    content.classList.remove('show');
                });
                tabContents[index].classList.add('show');
            }
        });
    });

    if (reviewLink && reviewsTab && tabs[2]) {
        reviewLink.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            tabs[2].classList.add('active');

            tabContents.forEach((content) => {
                content.classList.remove('show');
            });
            reviewsTab.classList.add('show');

            window.scrollTo({
                top: reviewsTab.offsetTop - 200,
                behavior: 'smooth'
            });
        });
    }
});

//////////////////////////////////////////////////////////////////
// Enable bootstrap popovers and tooltips

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//////////////////////////////////////////////////////////////////
// Сетка на странице "Готовые решения"

const solutions = document.querySelectorAll('[id^="tab-solutions"]');

solutions.forEach((solution) => {
    const rows = solution.querySelectorAll('.row');

    rows.forEach((row) => {
        const cols = row.querySelectorAll(".col");

        cols.forEach((col, index) => {
            if (index > 2) {
                col.style.display = "none"; // Скрываем все элементы col, начиная с четвертого
            }
        });

        if (cols.length > 3) {
            const button = document.createElement("button");
            button.textContent = "Посмотреть все";
            button.classList.add("btn", "show-more-button");
            row.parentNode.appendChild(button);

            let isHidden = true; // Переменная для отслеживания состояния отображения элементов col

            button.addEventListener("click", function () {
                cols.forEach((col, index) => {
                    if (index > 2) {
                        col.style.display = isHidden ? "block" : "none"; // Переключаем отображение элементов col
                    }
                });

                isHidden = !isHidden; // Инвертируем значение переменной isHidden
                button.classList.toggle("active"); // Добавляем или удаляем класс active
            });
        }
    });
});

//////////////////////////////////////////////////////////////////
// Кнопка "Назад"

function goBack() {
    window.history.back();
}

// Функция инициализации для проверки высоты текста и скрытия кнопки, если текст короткий
function initializeTextBlocks() {
    document.querySelectorAll(".hide-text-block").forEach((block) => {
        const hideTextContent = block.querySelector(".hide-text-content");
        const hideButton = block.querySelector(".toggle-hide-text");

        // Проверяем, нужно ли показывать кнопку
        if (hideTextContent.scrollHeight <= 90) { // 90px — начальная высота видимого текста
            hideButton.style.display = "none";
        } else {
            hideButton.style.display = "inline-block";
        }
    });
}

// Обработчик клика для кнопок
document.addEventListener("click", (event) => {
    const hideButton = event.target.closest(".toggle-hide-text");

    if (!hideButton) return;

    const hideTextContent = hideButton.previousElementSibling; // Блок текста перед кнопкой

    // Анимация раскрытия и скрытия текста
    if (hideTextContent.classList.contains("js-collapsed")) {
        // Раскрытие текста
        hideTextContent.style.height = `${hideTextContent.scrollHeight}px`; // Полная высота текста
        hideTextContent.classList.remove("js-collapsed");
        hideButton.classList.add("js-active");
    } else {
        // Скрытие текста
        hideTextContent.style.height = "90px"; // Возвращаем начальную видимую высоту
        hideTextContent.classList.add("js-collapsed");
        hideButton.classList.remove("js-active");
    }
});

// Запускаем проверку при загрузке страницы
document.addEventListener("DOMContentLoaded", initializeTextBlocks);

//////////////////////////////////////////////////////////////////
// Страница "Оформление заказа"

$(document).ready(function () {
    // Переменная для отслеживания мобильного состояния
    let isMobile = $(window).width() < 768;

    // Обновляем состояние при ресайзе
    $(window).on('resize', function () {
        isMobile = $(window).width() < 768;
    });

    // Функция для определения контейнера прокрутки
    function getScrollContainer($element) {
        // Ищем активное модальное окно (с классом show)
        const $activeModal = $('.modal.show');

        // Проверяем, находится ли элемент внутри активного модального окна
        if ($activeModal.length && $element.closest('.modal').is($activeModal)) {
            return $activeModal;
        }
        return null; // Основная страница
    }

    // Функция для плавной прокрутки к элементу с задержкой
    function scrollToElement($element) {
        if (!isMobile) return; // Только на мобильных

        setTimeout(function () {
            const $container = getScrollContainer($element);

            if ($container && $container.length) {
                // Прокрутка внутри модального окна
                const elementTop = $element.offset().top;
                const containerTop = $container.offset().top;
                const scrollPosition = elementTop - containerTop - 150;

                $container.animate({
                    scrollTop: scrollPosition
                }, 300);
            } else {
                // Прокрутка основной страницы
                const offset = $element.offset();
                if (offset) {
                    $('html, body').animate({
                        scrollTop: offset.top - 150
                    }, 300);
                }
            }
        }, 300); // Задержка 300ms для корректной работы анимаций
    }

    // Обработчик для родительских radio
    $(document).on('change', '[data-parent-radio]', function () {
        const $card = $(this).closest('.checkout-radio-card');
        const group = $card.data('group');
        const $body = $card.find('.checkout-radio-card__body');

        $card.toggleClass('js-active', this.checked);
        if (this.checked) {
            $body.stop(true, true).slideDown(300);
            scrollToElement($card);
        } else {
            $body.stop(true, true).slideUp(300);
        }

        $(`.checkout-radio-card[data-group="${group}"]`).not($card).each(function () {
            $(this).removeClass('js-active')
                .find('.checkout-radio-card__body').slideUp(300)
                .find('[data-child-radio]').prop('checked', false);
            $(this).find('.item-pickup-option').removeClass('js-active')
                .find('.item-pickup-option__body').slideUp(300);
        });
    });

    // Обработчик для дочерних radio
    $(document).on('change', '[data-child-radio]', function () {
        const $option = $(this).closest('.item-pickup-option');
        const $card = $(this).closest('.checkout-radio-card');

        if ($option.length) {
            $card.find('.item-pickup-option').not($option)
                .removeClass('js-active')
                .find('.item-pickup-option__body').slideUp(300);

            $option.toggleClass('js-active', this.checked)
                .find('.item-pickup-option__body')
                .stop(true, true)[this.checked ? 'slideDown' : 'slideUp'](300);

            if (this.checked) {
                scrollToElement($option);
            }
        }
    });

    // Инициализация начального состояния
    $('[data-parent-radio]:checked').each(function () {
        $(this).closest('.checkout-radio-card')
            .addClass('js-active')
            .find('.checkout-radio-card__body').show();
    });

    $('[data-child-radio]:checked').each(function () {
        const $option = $(this).closest('.item-pickup-option');
        if ($option.length) {
            $option.addClass('js-active')
                .find('.item-pickup-option__body').show();
        }
    });
});

// CUSTOM CODE

class ConditionalFormManager {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (!this.form) return;
        
        this.currentTab = 'selfPickup';
        this.init();
    }

    init() {
        // Условные триггеры
        this.triggers = this.form.querySelectorAll('[data-conditional-trigger]');
        this.triggers.forEach(trigger => {
            trigger.addEventListener('change', (e) => {
                this.updateConditions();
                
                if (e.target.hasAttribute('data-reset-children')) {
                    this.resetDependentBlocks(e.target);
                }
            });
        });

        // Кнопки сохранения адресов
        this.setupSaveButtons();
        
        // Кнопки удаления опций
        this.setupDeleteButtons();
        
        // Загрузка сохранённых адресов
        this.loadSavedAddresses();

        this.setupBootstrapTabListeners();
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.updateConditions();
    }

    /**
     * 💾 Настройка кнопок сохранения адресов
     */
    setupSaveButtons() {
        const saveButtons = this.form.querySelectorAll('[data-save-address]');
        
        saveButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const selectId = btn.dataset.saveAddress;
                const fields = btn.dataset.fields.split(',');
                this.saveAddress(selectId, fields);
            });
        });
    }

    /**
     * 💾 Сохранение нового адреса
     */
    saveAddress(selectId, fields) {
        const select = document.getElementById(selectId);
        if (!select) return;

        // Собираем значения полей
        const values = {};
        let isValid = true;

        fields.forEach(field => {
            const input = document.getElementById(`${selectId}_${field}`);
            if (input) {
                values[field] = input.value.trim();
                
                // Проверка обязательных полей
                if (input.hasAttribute('data-required-when-visible') && !values[field]) {
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            this.showToast('Заполните все обязательные поля', 'warning');
            return;
        }

        // Формируем полный адрес
        const fullAddress = this.buildFullAddress(values, fields);

        // Создаём новую опцию
        const option = document.createElement('option');
        option.value = `saved_${Date.now()}`; // Уникальный ID
        option.textContent = fullAddress;
        option.dataset.addressData = JSON.stringify(values);

        // Вставляем перед "НОВЫЙ АДРЕС"
        const nolistOption = select.querySelector('option[value="nolist"]');
        select.insertBefore(option, nolistOption);

        // Выбираем новый адрес
        select.value = option.value;
        this.updateConditions();

        // Очищаем форму
        this.clearAddressForm(selectId, fields);

        // Сохраняем в localStorage
        this.saveSelectToStorage(selectId);

        this.showToast('Адрес сохранён!', 'success');
    }

    /**
     * 🏗️ Формирование полного адреса
     */
    buildFullAddress(values, fields) {
        const parts = [];
        
        if (values.street) parts.push(values.street);
        if (values.house) parts.push(`д. ${values.house}`);
        if (values.building) parts.push(`корп. ${values.building}`);
        if (values.entrance) parts.push(`вх. ${values.entrance}`);
        if (values.pavilion) parts.push(`пав. ${values.pavilion}`);
        if (values.office) parts.push(`оф. ${values.office}`);
        if (values.shopName) parts.push(`(${values.shopName})`);
        
        return parts.join(', ');
    }

    /**
     * 🧹 Очистка формы адреса
     */
    clearAddressForm(selectId, fields) {
        fields.forEach(field => {
            const input = document.getElementById(`${selectId}_${field}`);
            if (input) input.value = '';
        });
    }

    /**
     * 🗑️ Настройка кнопок удаления
     */
    setupDeleteButtons() {
        const deleteButtons = this.form.querySelectorAll('[data-delete-option]');
        
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const selectId = btn.dataset.deleteOption;
                this.deleteSelectedOption(selectId);
            });
        });
    }

    /**
     * 🗑️ Удаление выбранной опции
     */
    deleteSelectedOption(selectId) {
        const select = document.getElementById(selectId);
        if (!select) return;

        const selectedValue = select.value;
        
        if (!selectedValue || selectedValue === 'nolist') {
            this.showToast('Выберите адрес для удаления', 'warning');
            return;
        }

        // Нельзя удалять статические адреса (не начинаются с "saved_")
        if (!selectedValue.startsWith('saved_')) {
            this.showToast('Этот адрес нельзя удалить', 'warning');
            return;
        }

        if (!confirm('Удалить этот адрес?')) return;

        // Удаляем опцию
        const option = select.querySelector(`option[value="${selectedValue}"]`);
        if (option) option.remove();

        // Сбрасываем select
        select.value = '';
        this.updateConditions();

        // Сохраняем в localStorage
        this.saveSelectToStorage(selectId);

        this.showToast('Адрес удалён', 'info');
    }

    /**
     * 💿 Сохранение select в localStorage
     */
    saveSelectToStorage(selectId) {
        const select = document.getElementById(selectId);
        if (!select || !select.hasAttribute('data-save-new-option')) return;

        const savedOptions = [];
        
        // Сохраняем только динамически добавленные опции
        select.querySelectorAll('option').forEach(option => {
            if (option.value.startsWith('saved_')) {
                savedOptions.push({
                    value: option.value,
                    text: option.textContent,
                    data: option.dataset.addressData
                });
            }
        });

        localStorage.setItem(`select_${selectId}`, JSON.stringify(savedOptions));
    }

    /**
     * 💿 Загрузка сохранённых адресов
     */
    loadSavedAddresses() {
        const selects = this.form.querySelectorAll('select[data-save-new-option]');
        
        selects.forEach(select => {
            const selectId = select.id;
            const saved = localStorage.getItem(`select_${selectId}`);
            
            if (saved) {
                try {
                    const options = JSON.parse(saved);
                    const nolistOption = select.querySelector('option[value="nolist"]');
                    
                    options.forEach(opt => {
                        const option = document.createElement('option');
                        option.value = opt.value;
                        option.textContent = opt.text;
                        option.dataset.addressData = opt.data;
                        
                        select.insertBefore(option, nolistOption);
                    });
                    
                    console.log(`✅ Загружено адресов для ${selectId}: ${options.length}`);
                } catch (error) {
                    console.error(`Ошибка загрузки ${selectId}:`, error);
                }
            }
        });
    }

    // ============================================
    // УСЛОВНАЯ ЛОГИКА
    // ============================================

    resetDependentBlocks(trigger) {
        const triggerName = trigger.id || trigger.name;
        const dependentBlocks = this.form.querySelectorAll(`[data-condition="${triggerName}"]`);
        
        dependentBlocks.forEach(block => {
            if (!block.classList.contains('active')) {
                this.clearBlockInputs(block);
            }
        });
    }

    clearBlockInputs(block) {
        const textInputs = block.querySelectorAll('input[type="text"], input[type="date"], textarea');
        textInputs.forEach(input => {
            input.value = '';
            input.classList.remove('is-invalid', 'is-valid');
        });

        const selects = block.querySelectorAll('select');
        selects.forEach(select => select.selectedIndex = 0);

        const radios = block.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);

        const checkboxes = block.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    }

    setupBootstrapTabListeners() {
        const tabTriggers = document.querySelectorAll('[data-bs-toggle="tab"]');
        
        tabTriggers.forEach(trigger => {
            trigger.addEventListener('shown.bs.tab', (event) => {
                const previousTab = this.currentTab;
                const newTabId = event.target.getAttribute('data-bs-target').replace('#', '');
                
                if (previousTab && previousTab !== newTabId) {
                    this.clearTabData(previousTab);
                }
                
                this.currentTab = newTabId;
            });
        });
    }

    clearTabData(tabId) {
        const tab = document.getElementById(tabId);
        if (!tab) return;
        
        this.clearBlockInputs(tab);
        
        const selects = tab.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
            select.dispatchEvent(new Event('change'));
        });
        
        this.updateConditions();
    }

    updateConditions() {
        const conditionalBlocks = this.form.querySelectorAll('[data-condition]');
        
        conditionalBlocks.forEach(block => {
            const conditionName = block.dataset.condition;
            const triggerValue = this.getTriggerValue(conditionName);
            
            let shouldShow = false;
            
            if (block.dataset.showWhen !== undefined) {
                const showWhen = block.dataset.showWhen.split(',');
                shouldShow = showWhen.includes(triggerValue);
            } else if (block.dataset.showWhenNot !== undefined) {
                const hideWhen = block.dataset.showWhenNot.split(',');
                shouldShow = !hideWhen.includes(triggerValue);
            }
            
            if (shouldShow) {
                block.classList.add('active');
                this.enableRequiredFields(block);
            } else {
                block.classList.remove('active');
                this.disableRequiredFields(block);
            }
        });
    }

    getTriggerValue(triggerName) {
        let trigger = this.form.querySelector(`#${triggerName}`);
        if (!trigger) {
            trigger = this.form.querySelector(`[name="${triggerName}"]:checked`);
        }
        return trigger ? trigger.value : '';
    }

    enableRequiredFields(block) {
        const fields = block.querySelectorAll('[data-required-when-visible]');
        fields.forEach(field => field.setAttribute('required', ''));
    }

    disableRequiredFields(block) {
        const fields = block.querySelectorAll('[data-required-when-visible]');
        fields.forEach(field => field.removeAttribute('required'));
    }

    showToast(message, type = 'success') {
        const container = document.querySelector('.toast-container');
        
        const config = {
            success: { icon: '✓', bgClass: 'bg-success', textClass: 'text-white' },
            danger: { icon: '✕', bgClass: 'bg-danger', textClass: 'text-white' },
            warning: { icon: '⚠', bgClass: 'bg-warning', textClass: 'text-dark' },
            info: { icon: 'ℹ', bgClass: 'bg-info', textClass: 'text-white' }
        };
        
        const { icon, bgClass, textClass } = config[type] || config.info;
        
        const toastEl = document.createElement('div');
        toastEl.className = `toast align-items-center ${bgClass} ${textClass} border-0`;
        toastEl.setAttribute('role', 'alert');
        
        toastEl.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <strong>${icon}</strong> ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;
        
        container.appendChild(toastEl);
        
        const toast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 3000
        });
        
        toast.show();
        
        toastEl.addEventListener('hidden.bs.toast', () => {
            toastEl.remove();
        });
    }

    handleSubmit(e) {
        const visibleRequiredFields = this.form.querySelectorAll(
            '.conditional-block.active [data-required-when-visible][required]'
        );

        let isValid = true;
        visibleRequiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (!isValid) {
            e.preventDefault();
            this.showToast('Заполните все обязательные поля', 'danger');
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const manager = new ConditionalFormManager('#checkoutForm');
    window.formManager = manager;
    
    console.log('✅ Форма заказа готова');
});