//Henter inn kjøtt-div, -bilde og -p
const kjott = document.querySelector('#kjott');
const kjottP = document.querySelector('#kjottP');
const kjottImg = document.querySelector('#kjottImg');

//funksjon lytter til musover og blurer bilde og viser p
kjott.onmouseover = () => {
    kjottP.setAttribute('style','visibility: visible;');
    kjottImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
kjott.onmouseout = () => {
    kjottP.setAttribute('style','visibility: hidden;');
    kjottImg.setAttribute('style','filter: none; transition: 0.7s;')
}


//Henter inn sjomat-div, -bilde og -p
const sjomat = document.querySelector('#sjomat');
const sjomatP = document.querySelector('#sjomatP');
const sjomatImg = document.querySelector('#sjomatImg');

//funksjon lytter til musover og blurer bilde og viser p
sjomat.onmouseover = () => {
    sjomatP.setAttribute('style','visibility: visible;');
    sjomatImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
sjomat.onmouseout = () => {
    sjomatP.setAttribute('style','visibility: hidden;');
    sjomatImg.setAttribute('style','filter: none; transition: 0.7s;')
}



//Henter inn vegetar-div, -bilde og -p
const vegetar = document.querySelector('#vegetar');
const vegetarP = document.querySelector('#vegetarP');
const vegetarImg = document.querySelector('#vegetarImg');

//funksjon lytter til musover og blurer bilde og viser p
vegetar.onmouseover = () => {
    vegetarP.setAttribute('style','visibility: visible;');
    vegetarImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
vegetar.onmouseout = () => {
    vegetarP.setAttribute('style','visibility: hidden;');
    vegetarImg.setAttribute('style','filter: none; transition: 0.7s;')
}




//Henter inn suppe-div, -bilde og -p
const suppe = document.querySelector('#suppe');
const suppeP = document.querySelector('#suppeP');
const suppeImg = document.querySelector('#suppeImg');

//funksjon lytter til musover og blurer bilde og viser p
suppe.onmouseover = () => {
    suppeP.setAttribute('style','visibility: visible;');
    suppeImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
suppe.onmouseout = () => {
    suppeP.setAttribute('style','visibility: hidden;');
    suppeImg.setAttribute('style','filter: none; transition: 0.7s;')
}


//Henter inn suppe-div, -bilde og -p
const bakst = document.querySelector('#bakst');
const basktP = document.querySelector('#bakstP');
const bakstImg = document.querySelector('#bakstImg');

//funksjon lytter til musover og blurer bilde og viser p
bakst.onmouseover = () => {
    basktP.setAttribute('style','visibility: visible;');
    bakstImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
bakst.onmouseout = () => {
    basktP.setAttribute('style','visibility: hidden;');
    bakstImg.setAttribute('style','filter: none; transition: 0.7s;')
}


//Henter inn suppe-div, -bilde og -p
const dessert = document.querySelector('#dessert');
const dessertP = document.querySelector('#dessertP');
const dessertImg = document.querySelector('#dessertImg');

//funksjon lytter til musover og blurer bilde og viser p
dessert.onmouseover = () => {
    dessertP.setAttribute('style','visibility: visible;');
    dessertImg.setAttribute('style','filter: brightness(50%); transition: 0.7s;')
}
//funksjon lytter til musut og fjerner blur på bildet og skjuler p
dessert.onmouseout = () => {
    dessertP.setAttribute('style','visibility: hidden;');
    dessertImg.setAttribute('style','filter: none; transition: 0.7s;')
}



