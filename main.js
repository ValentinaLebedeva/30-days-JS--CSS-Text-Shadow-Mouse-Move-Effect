const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; //100px

function shadow(e) {
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 3px #7874747a,
    ${xWalk * -1}px ${yWalk}px 3px #2196F3,
    ${yWalk}px ${xWalk * -1}px 3px #8bc34a,
    ${yWalk * -1}px ${xWalk}px 3px #9C27B0
    `;


}

hero.addEventListener("mousemove", shadow);