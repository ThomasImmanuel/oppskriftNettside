//Dropdown Meny

const beritsGryte = document.querySelector('#beritsGryte');
const BGOppskrift = document.querySelector('#BGOppskrift');
const BGImg = document.querySelector('#BGImg');



beritsGryte.onclick = () => {
    if (getComputedStyle(BGOppskrift).height == '0px') {
        BGOppskrift.setAttribute('style','visibility: visible; height: 300px; overflow: scroll;');
        BGImg.setAttribute('style', 'transform: scaleY(-1); bottom: 20px;')
    } else if (getComputedStyle(BGOppskrift).height == '300px') {
        BGOppskrift.setAttribute('style','visibility: hidden;');
        BGImg.setAttribute('style', 'transform: scaleY(1); bottom: 10px;')
    }
};

const steik = document.querySelector('#steik');
const steikOppskrift = document.querySelector('#steikOppskrift');
const steikImg = document.querySelector('#steikImg');


steik.onclick = () => {
    if (getComputedStyle(steikOppskrift).height == '0px') {
        steikOppskrift.setAttribute('style','visibility: visible; height: 300px; overflow: scroll;');
        steikImg.setAttribute('style', 'transform: scaleY(-1); bottom: 20px;')
    } else if (getComputedStyle(steikOppskrift).height == '300px') {
        steikOppskrift.setAttribute('style','visibility: hidden;');
        steikImg.setAttribute('style', 'transform: scaleY(1); bottom: 10px;')
    }
};