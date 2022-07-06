console.log('herro');

function hideForm() {
    form.classList.add('hideForm');
    form.classList.remove('showForm');
    fadeOut.classList.add('hideForm');
    fadeOut.classList.remove('showFade');

    setTimeout(() => {
        fadeOut.style.display = 'none';
        form.style.display = 'none';
    }, 450)
}

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
        }
    } else {
        for (element of IDs){
            element.classList.add('show');
            element.classList.remove('hide');
            portfolio.classList.remove('show');
        } 
    }

    if (y === 0) {
        hideForm();
    }

    arrow.classList.add('hide')
    scrollSet = true;
}

window.addEventListener("scroll", scrollStart);

const btn = document.getElementById('btn');
const form = document.getElementById('formContainer');
const fadeOut = document.getElementById('fadeOut');

// Show
btn.addEventListener('click', () => {

    fadeOut.style.display = 'block';
    form.style.display = 'block';

    setTimeout(() => {

        form.classList.add('showForm');
        form.classList.remove('hideForm');
        fadeOut.classList.add('showFade');
        fadeOut.classList.remove('hideForm');

    }, 10)

})

const cancel = document.getElementById('cancel');
const fadeCancel = document.getElementById('fadeOut');

// Hide
cancel.addEventListener('click', function(event){
    hideForm();
    event.stopPropagation();
    event.preventDefault();
}, false)

fadeOut.addEventListener('click', () => {
    hideForm();
})

// Get the flash message and dismiss it
const flash = document.querySelector('.flash-container');

setTimeout(() => {
    flash.classList.add('flash-container-gone');
}, 750)

// Eff Spammers
//document.getElementById('send').disabled = true;
