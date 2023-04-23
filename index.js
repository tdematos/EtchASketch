const container = document.querySelector('.container');
const body = document.querySelector('body');
const div = document.createElement('div');

body.appendChild(div);
div.classList.add('container');

const griddiv = document.createElement('div')
griddiv.classList.add('grid');
div.appendChild(griddiv);

const div1 = document.createElement('div');
div1.classList.add('cell');
griddiv.appendChild(div1);
div1.setAttribute('id', '1');
const div2 = document.createElement('div');
div2.classList.add('cell');
griddiv.appendChild(div2);
div2.setAttribute('id', '2');
const div3 = document.createElement('div');
div3.classList.add('cell');
griddiv.appendChild(div3);
div3.setAttribute('id', '3');
const div4 = document.createElement('div');
div4.classList.add('cell');
griddiv.appendChild(div4);
div4.setAttribute('id', '4');
const div5 = document.createElement('div');
div5.classList.add('cell');
griddiv.appendChild(div5);
div5.setAttribute('id', '5');
const div6 = document.createElement('div');
div6.classList.add('cell');
griddiv.appendChild(div6);
div6.setAttribute('id', '6');
const div7 = document.createElement('div');
div7.classList.add('cell');
griddiv.appendChild(div7);
div7.setAttribute('id', '7');
const div8 = document.createElement('div');
div8.classList.add('cell');
griddiv.appendChild(div8);
div8.setAttribute('id', '8');
const div9 = document.createElement('div');
div9.classList.add('cell');
griddiv.appendChild(div9);
div9.setAttribute('id', '9');
const div10 = document.createElement('div');
div10.classList.add('cell');
griddiv.appendChild(div10);
div10.setAttribute('id', '10');
const div11 = document.createElement('div');
div11.classList.add('cell');
griddiv.appendChild(div11);
div11.setAttribute('id', '11');
const div12 = document.createElement('div');
div12.classList.add('cell');
griddiv.appendChild(div12);
div12.setAttribute('id', '12');
const div13 = document.createElement('div');
div13.classList.add('cell');
griddiv.appendChild(div13);
div13.setAttribute('id', '13');
const div14 = document.createElement('div');
div14.classList.add('cell');
griddiv.appendChild(div14);
div14.setAttribute('id', '14');
const div15 = document.createElement('div');
div15.classList.add('cell');
griddiv.appendChild(div15);
div15.setAttribute('id', '15');
const div16 = document.createElement('div');
div16.classList.add('cell');
griddiv.appendChild(div16);
div16.setAttribute('id', '16');
const div17 = document.createElement('div');
div17.classList.add('cell');
griddiv.appendChild(div17);
div17.setAttribute('id', '17');
const div18 = document.createElement('div');
div18.classList.add('cell');
griddiv.appendChild(div18);
div18.setAttribute('id', '18');
const div19 = document.createElement('div');
div19.classList.add('cell');
griddiv.appendChild(div19);
div19.setAttribute('id', '19');
const div20 = document.createElement('div');
div20.classList.add('cell');
griddiv.appendChild(div20);
div20.setAttribute('id', '20');
const div21 = document.createElement('div');
div21.classList.add('cell');
griddiv.appendChild(div21);
div21.setAttribute('id', '21');
const div22 = document.createElement('div');
div22.classList.add('cell');
griddiv.appendChild(div22);
div22.setAttribute('id', '22');
const div23 = document.createElement('div');
div23.classList.add('cell');
griddiv.appendChild(div23);
div23.setAttribute('id', '23');
const div24 = document.createElement('div');
div24.classList.add('cell');
griddiv.appendChild(div24);
div24.setAttribute('id', '24');
const div25 = document.createElement('div');
div25.classList.add('cell');
griddiv.appendChild(div25);
div25.setAttribute('id', '25');

const cell = document.getElementsByClassName('cell')

div.style.background = 'black';
div.style.border = '5px solid black';
div.style.display = 'inline-block';

griddiv.style.display = 'grid';
griddiv.gridTemplateColumns = "repeat, (3, 80px)";
griddiv.gridTemplateRows = "repeat, (3, 80px)";
griddiv.gridGap = '5px';




console.log(cell);