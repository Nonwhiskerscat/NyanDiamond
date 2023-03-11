window.addEventListener('load', () => {

    let bighead=document.querySelector('.bighead');
    let mf=document.createElement('div');
    mf.appendChild(bighead);
    mf.classList.add('main_frame');

    let main_frame=document.querySelector('.main_frame');
    
    function createFrame() {

        const el = document.createElement('img');
        el.src="./img/main_page/back_frame.png";
        // main_frame.insertBefore(el, main_frame.firstChild);
    }

    for(let i = 0; i<4; i++) {
        createFrame();
    }
    


});