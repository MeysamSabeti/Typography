const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500 //500px

hero.addEventListener('mousemove', function (event) {
    const { offsetWidth: width , offsetHeight: height } = hero
    let {offsetX:x , offsetY:y } = event

    y+=event.target.offsetLeft;
    x+= event.target.offsetTop;


})