console.log('herro');
IDs = document.querySelectorAll('.toggle');
portfolio = document.querySelector('.portfolio');
title = document.querySelector('h1');

/* mobile screen */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//	title.style.color = 'purple';
}

arrow = document.querySelector('#down-arrow');

let scrollSet = false;

setTimeout(() => {

    if (scrollSet === false){

        arrow.classList.remove('hide');
        arrow.classList.remove('animate-frame-one');
        arrow.classList.add('animate-frame-two');

        setTimeout(() => {
            arrow.classList.remove('animate-frame-two');
            arrow.classList.add('animate-frame-three');
        }, 400)

        setTimeout(() => {
            arrow.classList.remove('animate-frame-three');
            arrow.classList.add('animate-frame-four');
        }, 600)

    }
}, 10000)

const scrollStart = function() {
    let y = window.scrollY;
    if (y > 0) {
        for (element of IDs){
            element.classList.add('hide');
            element.classList.remove('show');
            portfolio.classList.add('show');
            //document.body.classList.add('hideImg');
        }
    } else {
        for (element of IDs){
            element.classList.add('show');
            element.classList.remove('hide');
            portfolio.classList.remove('show');
            //document.body.classList.remove('hideImg');
        } 
    }

    arrow.classList.add('hide')
    scrollSet = true;
}

window.addEventListener("scroll", scrollStart);
