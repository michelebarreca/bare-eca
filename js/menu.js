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

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('head').style.backgroundColor = 'rgba(221, 65, 36, .5)';
    document.getElementById('overlay-content').style.backgroundColor = 'rgba(221, 65, 36, .5)';
  } else {
    document.getElementById('head').style.backgroundColor = 'rgb(221, 65, 36)';
    document.getElementById('overlay-content').style.backgroundColor = 'rgb(221, 65, 36)';
  }
}
