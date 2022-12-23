const toggleBtn = document.querySelector('.switch button')
const body = document.querySelector('body');
const img = document.querySelector('.profile img');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        img.setAttribute('src', "./assets/Avatar-light.png")
    } else {
        img.setAttribute('src', "./assets/Avatar.png")
    }
})