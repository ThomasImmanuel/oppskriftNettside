const brod = document.querySelector('#brod');
const brodOppskrift = document.querySelector('#brodOppskrift');
const brodImg = document.querySelector('#brodImg');


brod.onclick = () => {
    if (getComputedStyle(brodOppskrift).height == '0px') {
        brodOppskrift.setAttribute('style','visibility: visible; height: 300px; overflow: scroll;');
        brodImg.setAttribute('style', 'transform: scaleY(-1); bottom: 20px;')
    } else if (getComputedStyle(brodOppskrift).height == '300px') {
        brodOppskrift.setAttribute('style','visibility: hidden;');
        brodImg.setAttribute('style', 'transform: scaleY(1); bottom: 10px;')
    }
};