const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "100vh";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0";
}
