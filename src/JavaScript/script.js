
const burger = document.getElementById('burger__menu')
const ul = document.querySelector('.lis')
if (window.width <= 750) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-open')
  })
}
