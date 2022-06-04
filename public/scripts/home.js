console.log('herro');
IDs = document.querySelectorAll('.toggle');
portfolio = document.querySelector('.portfolio');
title = document.querySelector('h1');

/* mobile screen */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('h1').innerText = 'Andre Ortega Software Developer';
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
}, 13000)

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

const btn = document.getElementById('btn');
const form = document.getElementById('formContainer');
const fadeOut = document.getElementById('fadeOut');

btn.addEventListener('click', () => {

    if(form.style.display === 'block') {
        form.style.display = 'none';
        fadeOut.style.display = 'none';
        form.style.opacity = '0.0';
    } else {
        form.style.display = 'block';
        fadeOut.style.display = 'block';
        form.style.opacity = '1.0';
    }

})

const cancel = document.getElementById('cancel');

cancel.addEventListener('click', () => {
    form.style.display = 'none';
    fadeOut.style.display = 'none';
    form.style.opacity = '0.0';
})
