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
            setTimeout(() => document.body.classList.remove('scroll-none'), 200);                                                
        }
    }
});

// Nav
let navList = document.querySelectorAll('.nav-list-container');

document.addEventListener('click', e => {
    // data-open-nav
    if (e.target.getAttribute('data-open-nav')) {
        let targetValue2 = e.target.getAttribute('data-open-nav');
        let navElement = Array.from(navList).find(el => el.id === targetValue2);
        if (navElement) {
            navElement.classList.add('show-nav');
            document.body.classList.add('scroll-none');                                                
            
        }
    }

    // data-open-nav
    if (e.target.getAttribute('data-close-nav')) {
        let targetValue2 = e.target.getAttribute('data-close-nav');
        let navElement = Array.from(navList).find(el => el.id === targetValue2);
        if (navElement) {
            navElement.classList.remove('show-nav');
            document.body.classList.remove('scroll-none');                                                
            
        }
    }
});

let icon = document.getElementById('icon-search');
let closeInput = document.getElementById('close-input');
let input = document.getElementById('nav-input');

icon.addEventListener('click', () => {
    input.classList.add('show-input'); 
    closeInput.classList.add('translate-0');   
});

closeInput.addEventListener('click', () => {
    input.classList.remove('show-input');    
    closeInput.classList.remove('translate-0');
});