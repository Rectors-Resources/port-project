let banners = document.getElementById('uwu');
let yeah = document.body;
let tops = document.getElementById('bod')
let button = document.getElementById('randomize');

const colors = ['red', 'green', 'blue', 'cyan', 'yellow', 'purple', 'orange', 'indigo', 'violet', 'oliveDrab', 'gold', 'hotPink', 'powderBlue', 'orchid', 'aqua', 'bisque', 'lawnGreen', 'lavender', 'lightSalmon', 'lightPink', 'crimson', 'plum']

const randomNumber = () => {
    let random = Math.floor(Math.random() *  colors.length);
    return random;
}




function changeColors() {
    banners.style.backgroundColor = colors[randomNumber()]
    yeah.style.backgroundColor = colors[randomNumber()]
    tops.style.backgroundColor = colors[randomNumber()]
}
/*
function change() {
    document.body.style.backgroundColor = 'green'
}
*/

button.addEventListener('click', changeColors)