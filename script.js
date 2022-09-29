const kjott = document.querySelector('#kjott');



kjott.onmouseover = function() {
    const p = document.createElement('p');
    p.textContent = 'Hei!!!';
    kjott.appendChild(p);
}

console.log('hei')