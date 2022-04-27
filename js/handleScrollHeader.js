export const handleScrollHeader = () => {
    const btnMenuMB = document.querySelector('.menuMB');
    const closeMN = document.querySelector('.closeMN');
    const headerMB = document.querySelector('.headerMB');
    const header = document.querySelector('header');

    btnMenuMB.onclick = () => {
        headerMB.style.transform = 'translateY(0)';
    };
    closeMN.onclick = () => {
        headerMB.style.transform = 'translateY(-100%)';
    };

    window.scroll(0, 0);
    let scroll = 0;
    window.onscroll = () => {
        let scrollTop = window.scrollY;
        if (scrollTop - scroll > 50) {
            header.style.transform = 'translateY(-100%)';
            scroll = scrollTop - 50;
        } else if (scroll - scrollTop > 10) {
            if (scroll - scrollTop > 30) scroll -= 30;
            header.style.transform = 'translateY(0%)';
        }
    };
};
