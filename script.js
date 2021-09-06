const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500 //500px

hero.addEventListener('mousemove', function (event) {
    const { offsetWidth: width , offsetHeight: height } = hero
    let {offsetX:x , offsetY:y } = event

    x+=event.target.offsetLeft;
    y+= event.target.offsetTop;

    const yWalk = Math.round((x / width * walk ) - (walk / 2))
    const xWalk = Math.round((y / height * walk ) - (walk / 2))
    console.log(xWalk , yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(238,82,83,.7),
    ${yWalk}px ${xWalk}px 0 rgba(52,31,151,.7),
    ${xWalk * -1}px ${yWalk *-1}px 0 rgba(143,212,10,.7),
    ${xWalk}px ${yWalk *-1}px 0 rgba(18,22,400,.7),
    ${yWalk *-1}px ${xWalk *-1}px 0 rgba(86,143,25,.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(102,17,186,.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(243,104,224,.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(254,202,87,.7)`


})