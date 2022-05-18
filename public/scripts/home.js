console.log('herro');
IDs = document.querySelectorAll('.toggle');
portfolio = document.querySelector('.portfolio')

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
}

window.addEventListener("scroll", scrollStart);
