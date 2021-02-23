import {openOrCloseLeftBar} from './main-buttons-dom'

function addEventToMenuBtn() {
    let menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', openOrCloseLeftBar);
}

export {addEventToMenuBtn}



