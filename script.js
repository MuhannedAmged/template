const imgChange = document.getElementsByClassName("change");
const headChange = document.getElementsByClassName("head");
const praChange = document.getElementsByClassName("prag");
const images = [
    'img/chicago.jpg',
    'img/la.jpg',
    'img/ny.jpg'
];
const heads = [
    'Chicago',
    'Los Angeles',
    'New York'
];
const paras = [
    "Thank you, Chicago - A night we won't forget.",
    'We had the best time playing at Venice Beach!',
    'The atmosphere in New York is lorem ipsum.'
    ];
let currentIndex = 0;

setInterval(() => {
    imgChange[0].style.backgroundImage = `url(${images[currentIndex]})`;
    headChange[0].textContent = heads[currentIndex];
    praChange[0].textContent = paras[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}, 4000);