// modal
let modals = document.querySelectorAll('.modal');

document.addEventListener('click', e => {
    // data-open
    if (e.target.getAttribute('data-open')) {
        let targetValue = e.target.getAttribute('data-open');
        let element = Array.from(modals).find(el => el.id === targetValue);
        if (element) {
            element.classList.add('show');
            document.body.classList.add('scroll-none');                                  
        }
    }

    // data-close
    if (e.target.getAttribute('data-close')) {
        let targetValue = e.target.getAttribute('data-close');        
        let element = Array.from(modals).find(el => el.id === targetValue);
        if (element) {
            element.classList.add('animation');
            setTimeout(() => element.classList.remove('show'), 200);
            setTimeout(() => element.classList.remove('animation'), 200);
            document.body.classList.remove('scroll-none');                                                
        }
    }
});

