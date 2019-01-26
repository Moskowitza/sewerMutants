const hamberder = document.querySelector('.hamberder');
const closebtn = document.querySelector('.closebtn');

function openNav() {
  console.log('open');
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  console.log('close');
  document.getElementById('mySidenav').style.width = '0';
}

hamberder.addEventListener('click', openNav);
closebtn.addEventListener('click', closeNav);

// window.addEventListener('resize', removeActive);
