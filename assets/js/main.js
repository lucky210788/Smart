$(document).ready(function () {
    // slider
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// tabs
function openTab(evt, tabNumber) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " active";
}