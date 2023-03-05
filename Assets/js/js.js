const btnDark = document.querySelector(".btnDark");
const btnLight = document.querySelector(".btnLight");

let elLight = document.querySelector('#light');
let elDark = document.querySelector('#dark');
let elImgOne = document.querySelector('.one');
let elImgTwo = document.querySelector('.two');

btnDark.addEventListener('click', ()=>{
    elLight.style.display = "none";
    elDark.style.display = "flex";
    elImgOne.style.display = 'none';
    elImgTwo.style.display = 'block';
});

btnLight.addEventListener('click', ()=>{
    elLight.style.display = "flex";
    elDark.style.display = "none";
    elImgOne.style.display = 'block';
    elImgTwo.style.display = 'none';
});