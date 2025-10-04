const hero = document.querySelector('.hero');
text = hero.querySelector('h1');
let texto = document.querySelector('h1');

const walk = 40;

hero.addEventListener('mousemove', function(e){
    let {offsetX : x, offsetY : y } = e;

    const {offsetWidth: width, offsetHeight: height} = hero;

    console.log(e.target);

    if(this !== e.target){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;    
    }

    const xWalk = Math.round((x/width*walk) - (walk/2));
    const yWalk = Math.round((y/height*walk) - (walk/2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(255,0,255,0.7)`
});