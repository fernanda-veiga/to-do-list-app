function openOrCloseLeftBar() {
    const leftBar = document.getElementById('left-bar');
    const mainContent = document.getElementById('main-content');

    if (leftBar.className === 'left-bar-open') {
        leftBar.classList.remove('left-bar-open');
        leftBar.classList.add('left-bar-closed');
        mainContent.style.marginLeft = '0';
    }
    else {
        leftBar.classList.add('left-bar-open');
        leftBar.classList.remove('left-bar-closed');
        mainContent.style.marginLeft = '290px';
    }
}

export {openOrCloseLeftBar}