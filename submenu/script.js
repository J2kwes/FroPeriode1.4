var heeftSub = document.querySelectorAll('.sub > a');

for(var i = 0; i < heeftSub.lenght; i++) {
    heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
