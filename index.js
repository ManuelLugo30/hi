const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que te iba a gustar bebe, Yo se todo obio')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    alert('Pos vayase con otro, like')
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProponerty('top',randomY+'%');
    noBtn.style.setProponerty('left',randomX+'%');
    noBtn.style.setProponerty('transform',`translate(-${randomX}%,-${randomY}%)`);
});