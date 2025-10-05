let secuencia = [];

document.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0; 
    audio.play();

    key.classList.add('playing');
    setTimeout(() => {key.classList.remove('active')}, 100);
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla){
    secuencia.push(codigoTecla);
    console.log("Secuencia actual:", secuencia);
}

function reproducirSecuencia(){
    if (secuencia.length === 0) {
        alert("No hay ninguna secuencia guardada.");
        return;
    }

    secuencia.forEach((codigo, i) => {
        setTimeout(() => {
            const audio = document.querySelector(`audio[data-key="${codigo}"]`);
            const key = document.querySelector(`.key[data-key="${codigo}"]`);
            if (audio) {
                audio.currentTime = 0;
                audio.play();
                key.classList.add('active');
                setTimeout(() => key.classList.remove('active'), 200);
            }
        }, i * 500); 
    });
}


function borrarSecuencia(){
    secuencia = [];
    alert("Secuencia borrada.");
}

document.querySelector('.BtnPlay').addEventListener('click', reproducirSecuencia);
document.querySelector('.BtnClear').addEventListener('click', borrarSecuencia);