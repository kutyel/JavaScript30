const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    secondHand.style.transform = `rotate(${(now.getSeconds() * 6) + 90}deg)`;
    minHand.style.transform = `rotate(${(now.getMinutes() * 6) + 90}deg)`;
    hourHand.style.transform = `rotate(${(now.getHours() * 30) + 90}deg)`;
};

setInterval(setDate, 1000);
