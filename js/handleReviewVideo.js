const linkVideo = `<iframe width="560" height="315" 
src="https://www.youtube.com/embed/ijNnxdW5WWw" 
title="YouTube video player" frameborder="0" allow="accelerometer;
 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 allowfullscreen>
 </iframe>
`;

export const handleVideoReview = () => {
    const reviewVideo = document.querySelector('.review__video');
    const rvModal = document.querySelector('.rv__modal');
    const video = document.querySelector('.rv__modal div');

    const iconClose = document.querySelector('.rv__modal i');
    window.onclick = (e) => {
        if (e.target === rvModal) {
            video.innerHTML = ``;
            rvModal.style.display = 'none';
        }
    };

    iconClose.onclick = () => {
        video.innerHTML = ``;

        rvModal.style.display = 'none';
    };

    reviewVideo.onclick = () => {
        rvModal.style.display = 'flex';
        video.innerHTML = linkVideo;
    };
};
