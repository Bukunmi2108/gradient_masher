//define hex

const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

//define gradient & text

const gradient = document.querySelector('.gradient');

const text = document.querySelector('.text');

const lin = document.querySelector('.lin');

const flip = document.querySelector('.flip');

//target the flip button

flip.addEventListener('click', function () {
  let c1 = x();
  let c2 = x();

  text.textContent = `${c1} || ${c2}`

  gradient.style.background = `linear-gradient(
    45deg,
    ${c1},
    ${c2}
  )`;

  lin.style.background = `linear-gradient(
    45deg,
    ${c1},
    ${c2}
  )`;

  flip.style.background = `linear-gradient(
    45deg,
    ${c1},
    ${c2}
  )`;
})

function x () {
  let hexCode ='#';

  for (let i = 0; i<6;i++) {
    let ranNum = Math.floor(Math.random() * hex.length);

    hexCode = hexCode + hex[ranNum]
  }
  return hexCode
}