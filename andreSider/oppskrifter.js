//Dropdown Meny

const beritsGryte = document.querySelector('#beritsGryte');
const BGOppskrift = document.querySelector('#BGOppskrift');



beritsGryte.onclick = () => {
    if (getComputedStyle(BGOppskrift).height == '0px') {
        BGOppskrift.setAttribute('style','visibility: visible; height: 200px; overflow: scroll;');
    } else if (getComputedStyle(BGOppskrift).height == '200px') {
        BGOppskrift.setAttribute('style','visibility: hidden;');
    }
};

const steik = document.querySelector('#steik');
const steikOppskrift = document.querySelector('#steikOppskrift');


steik.onclick = () => {
    if (getComputedStyle(steikOppskrift).height == '0px') {
        steikOppskrift.setAttribute('style','visibility: visible; height: 200px; overflow: scroll;');
    } else if (getComputedStyle(steikOppskrift).height == '200px') {
        steikOppskrift.setAttribute('style','visibility: hidden;');
    }
};