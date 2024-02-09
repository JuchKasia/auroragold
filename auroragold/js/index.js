const blur = document.querySelector('.blur');
const body = document.body;


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar');
    const linkItems = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.navbar-collapse');

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }

    linkItems.forEach(item => item.addEventListener('click', () => {
        navList.classList.remove('show');
    }))

    window.addEventListener('scroll', addShadow);
})


/// added / close blur and scroll when open / close menu
iconBurger.addEventListener('click', () => {
    blur.classList.toggle('open');
    body.classList.toggle('scroll');
});

function closeMenu() {
    blur.classList.remove('open');
    body.classList.remove('scroll');
}


// change current year
const footerYear = document.querySelector('.footer__year');
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
