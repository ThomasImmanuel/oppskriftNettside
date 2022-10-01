//Dropdown Meny

const beritsGryte = document.querySelector('#beritsGryte');
const BGOppskrift = document.querySelector('#BGOppskrift');
const BGImg = document.querySelector('#BGImg');

function dropDown(oppskrift, pil) {
    if (getComputedStyle(oppskrift).height == '0px') {
        oppskrift.setAttribute('style','visibility: visible; height: 300px; overflow: scroll;');
        pil.setAttribute('style', 'transform: scaleY(-1); bottom: 17px;');
    } else if (getComputedStyle(oppskrift).height == '300px') {
        oppskrift.setAttribute('style','visibility: hidden;');
        pil.setAttribute('style', 'transform: scaleY(1); bottom: 7px;');
    }
}

beritsGryte.onclick = function () {
    dropDown(BGOppskrift,BGImg);
};

const steik = document.querySelector('#steik');
const steikOppskrift = document.querySelector('#steikOppskrift');
const steikImg = document.querySelector('#steikImg');


steik.onclick = function() {
    dropDown(steikOppskrift,steikImg);
};