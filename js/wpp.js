const wppWrap = document.querySelector('.wpp__wrap');
const sections = document.querySelectorAll('section');

const addActiveLink = (className) => {
    const links = document.querySelectorAll('.nwpp__menu ul li a');
    links.forEach((a) => {
        a.classList.remove('active');
        if (a.classList.contains(className)) {
            a.classList.add('active');
        }
    });
};

document.addEventListener(
    'scroll',
    (e) => {
        sections.forEach((section) => {
            let id = '';
            if (pageYOffset > section.offsetTop - screen.height + 300) {
                id = section.getAttribute('id');
            }
            if (id) {
                addActiveLink(id);
            }
        });
    },
    false
);
