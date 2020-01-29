window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['#DB504A', '#FF6F59', '#254441', '#43AA8B', '#b5ad57', '#B2B09B'];

    pads.forEach((pad, i) => {
        pad.addEventListener('click', function() {
            sounds[i].currentTime = 0;
            sounds[i].play();
            createBubbles(i);
        });
    });

    const createBubbles = (i)=> {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[i];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});
