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


/*
    getElementById -> Selecciona el primer id encontrado (UNO)
    getElementsByClassName -> Selecciona TODOS los elementos con la clase buscada
    querySelector() -> Multi-Seleccionador (Puede buscar cualquier cosa), Pero retorna SOLO UNO
    querySelectorAll -> ''                                                             TODOS
*/

let closeInput = document.querySelector('.close-input');

function toggle(className, attribute, toggleClass, secondElement, secondToggleClass) { 
    let target = document.querySelectorAll(`.${className}`);

    document.addEventListener('click', e => { 
        // data-open
        if(e.target.getAttribute(`data-open-${attribute}`)) {
            let targetValue = e.target.getAttribute(`data-open-${attribute}`);                   
            let targetElement = Array.from(target).find(el => el.id === targetValue);               
            if (targetElement) {
                targetElement.classList.add(toggleClass);
                secondElement.classList.add(secondToggleClass);
                                                                                                                         
            }
        } // end data-open

        // data-close
        if (e.target.getAttribute(`data-close-${attribute}`)) {
            let targetValue = e.target.getAttribute(`data-close-${attribute}`);        
            let targetElement = Array.from(target).find(el => el.id === targetValue);
            if (targetElement) {
                targetElement.classList.remove(toggleClass); 
                secondElement.classList.remove(secondToggleClass);                                                                                                                                                                                                                         
            }
        } // end data-close

    });
}

// Navbar toggleable
toggle('nav-list-container', 'nav', 'show-nav', document.body, 'scroll-none');

// Nav search bar
toggle('nav-input', 'search', 'show-input', closeInput, 'translate-0');
