const playSound = ({ keyCode }) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
};

const removePlayingClass = e => {
    if (e.propertyName === 'transform')
        e.target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

window.addEventListener('keydown', playSound);
