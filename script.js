var heeftSub = document.querySelectorAll('.submenu > a');

for(var i = 0; i < heeftSub.lenght; i++) {
    heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
