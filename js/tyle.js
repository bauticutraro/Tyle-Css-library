// modal
let modals = document.querySelectorAll('.modal');

document.addEventListener('click', e => {
    // data-open
    if (e.target.getAttribute('data-open-modal')) {
        let targetValue = e.target.getAttribute('data-open-modal');
        let element = Array.from(modals).find(el => el.id === targetValue);
        if (element) {
            element.classList.add('show');
            document.body.classList.add('scroll-none');                                  
        }
    }

    // data-close
    if (e.target.getAttribute('data-close-modal')) {
        let targetValue = e.target.getAttribute('data-close-modal');        
        let element = Array.from(modals).find(el => el.id === targetValue);
        if (element) {
            element.classList.add('animation');
            setTimeout(() => element.classList.remove('show'), 200);
            setTimeout(() => element.classList.remove('animation'), 200);
            setTimeout(() => document.body.classList.remove('scroll-none'), 200);                                                
        }
    }
});

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
toggle('nav-input', 'search', 'show-input', closeInput, 'show-close-input');



// cricle progress
function progress(percent){
    let deg = percent / 100 * 180;
    return deg + "deg";
}

Array.from(document.querySelectorAll(".progress-circle-percent"), (el) => {
    let progressCircle = el.getAttribute('data-value');
    let rotate = progress(progressCircle);
    el.style.transform=`rotate(calc(-180deg + ${rotate}))`   
});
