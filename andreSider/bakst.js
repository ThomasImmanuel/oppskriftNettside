const brod = document.querySelector('#brod');
const brodOppskrift = document.querySelector('#brodOppskrift');
const brodImg = document.querySelector('#brodImg');

const rundstykker = document.querySelector('#rundstykker');
const rundstykkerOppskrift = document.querySelector('#rundstykkerOppskrift');
const rundstykkerImg = document.querySelector('#rundstykkerImg');

const eplekake = document.querySelector('#eplekake');
const eplekakeOppskrift = document.querySelector('#eplekakeOppskrift');
const eplekakeImg = document.querySelector('#eplekakeImg');

function dropDown(oppskrift, pil) {
    if (getComputedStyle(oppskrift).height == '0px') {
        oppskrift.setAttribute('style','visibility: visible; height: 300px; overflow: scroll;');
        pil.setAttribute('style', 'transform: scaleY(-1); bottom: 17px;');
    } else if (getComputedStyle(oppskrift).height == '300px') {
        oppskrift.setAttribute('style','visibility: hidden;');
        pil.setAttribute('style', 'transform: scaleY(1); bottom: 7px;');
    }
}

brod.onclick = function() {
    dropDown(brodOppskrift,brodImg);
};
rundstykker.onclick = function() {
    dropDown(rundstykkerOppskrift,rundstykkerImg);
};
eplekake.onclick = function() {
    dropDown(eplekakeOppskrift,eplekakeImg);
};