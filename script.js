//Button scroll

const btn = document.querySelector('#spiseIdag');

btn.onclick = () => {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth',
    });
};

//funksjon lytter til musover og blurer bilde og viser p
function textOverImage(p, img) {
    p.setAttribute('style','visibility: visible;');
    img.setAttribute('style','filter: brightness(50%); transition: 0.7s;');
};

//funksjon lytter til musut og fjerner blur på bildet og skjuler p
function backToImage(p, img) {
    p.setAttribute('style','visibility: hidden;');
    img.setAttribute('style','filter: none; transition: 0.7s;');
};

//Henter inn kjøtt-div, -bilde og -p
const kjott = document.querySelector('#kjott');
const kjottP = document.querySelector('#kjottP');
const kjottImg = document.querySelector('#kjottImg');

kjott.onmouseover = function() {
    textOverImage(kjottP, kjottImg);
};

kjott.onmouseout = function() {
    backToImage(kjottP, kjottImg);
};

//Henter inn sjomat-div, -bilde og -p
const sjomat = document.querySelector('#sjomat');
const sjomatP = document.querySelector('#sjomatP');
const sjomatImg = document.querySelector('#sjomatImg');

sjomat.onmouseover = function() {
    textOverImage(sjomatP,sjomatImg);
};

sjomat.onmouseout = function() {
    backToImage(sjomatP,sjomatImg);
};




//Henter inn vegetar-div, -bilde og -p
const vegetar = document.querySelector('#vegetar');
const vegetarP = document.querySelector('#vegetarP');
const vegetarImg = document.querySelector('#vegetarImg');

vegetar.onmouseover = function() {
    textOverImage(vegetarP,vegetarImg);
}
vegetar.onmouseout = function() {
    backToImage(vegetarP,vegetarImg);
}




//Henter inn suppe-div, -bilde og -p
const suppe = document.querySelector('#suppe');
const suppeP = document.querySelector('#suppeP');
const suppeImg = document.querySelector('#suppeImg');

suppe.onmouseover = function() {
    textOverImage(suppeP,suppeImg);
}
suppe.onmouseout = function() {
    backToImage(suppeP,suppeImg);
}


//Henter inn suppe-div, -bilde og -p
const bakst = document.querySelector('#bakst');
const basktP = document.querySelector('#bakstP');
const bakstImg = document.querySelector('#bakstImg');

bakst.onmouseover = function() {
    textOverImage(basktP,bakstImg);
}
bakst.onmouseout = function() {
    backToImage(basktP,bakstImg);
}


//Henter inn suppe-div, -bilde og -p
const dessert = document.querySelector('#dessert');
const dessertP = document.querySelector('#dessertP');
const dessertImg = document.querySelector('#dessertImg');

dessert.onmouseover = function() {
    textOverImage(dessertP,dessertImg);
}
dessert.onmouseout = function() {
    backToImage(dessertP,dessertImg);
}






