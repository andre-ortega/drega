console.log('herro');
IDs = document.querySelectorAll('.toggle');

const myScrollFunc = function() {
    let y = window.scrollY;
    if (y > 0) {
        for (element of IDs){
            element.classList.add('hide');
            element.classList.remove('show');
        }
    }
}

window.addEventListener("scroll", myScrollFunc);
