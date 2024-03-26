const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
    
}

// esta seria a maneira reduzida
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; // como estou usando ternário e aerofunction, não precisa de chaves

// esta seria outra maneira de fazer, usando if
// const nextIndex = () => { 
//     if(
//         colorIndex < 2) {
//             colorIndex++
//         }else{
//             colorIndex = 0;
//         }
//     }


 const changecolor = () => {
    // console.log('teste de cor'); *** este foi um teste pra checar se o botão automático estava funcionando.
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
 const stopAutomatic = () => {
    clearInterval(intervalId);
 };

const turnOn = { 
    'red': () => img.src = './img/semáforo-vermelho.png',
    'yellow': () => img.src = './img/semáforo-amarelo.png',
    'green': () => img.src = './img/semáforo-verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000) 
}

buttons.addEventListener('click', trafficLight);

