const btns = document.querySelectorAll('.nav__item');

for (let btn of btns) {
    btn.addEventListener('click', (event) => {
        const target = event.target;
        const current = document.querySelector('.current');
        if (current) {
            current.classList.remove('current')
        } 
        target.classList.add('current');
        const containers = document.querySelectorAll('.container');
        for (let container of containers) {
            if(container.getAttribute('data-number') === btn.getAttribute('data-number')) {
                container.style.display = 'flex'
            } else {
                container.style.display = 'none'
            }
        }
    })
}

const menuBtn =document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});