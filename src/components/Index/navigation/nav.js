const menuBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
let isActive = false;

menuBtn.addEventListener('click', function() {
  const icon = this.querySelector('i');
  isActive = !isActive;
  icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
  nav.classList.toggle('active');
});
