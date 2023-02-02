const page = document.body.style;
page.background = "#2E2D2D"; //Background escuro;
page.color = 'white'; //Letra branca;

let buttonAvaliacoes = document.getElementsByClassName('fichava')[0];
let info_ava = document.getElementsByClassName('texto_ava')[0];
buttonAvaliacoes.addEventListener('click', function () {
    if (info_ava.classList.contains('texto_ava')) {
        info_ava.ClassList.remove('texto_ava');
        info_ava.style.display = "none";
        info_ava.style.display = "block";
    } else {
        info_ava.classList.add('texto_ava');
    }
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
