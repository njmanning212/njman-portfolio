/*------------ Constants ------------*/
const roles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Husband', 'Father'];

/*------------ Variables ------------*/
let index = 0;
let deleting = false;

/*---- Cached Element References ----*/
const rolesEl = document.getElementById('roles');
const scrollEl = document.querySelectorAll('.scroll');
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

/*------------ Event Listeners ------------*/
scrollEl.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

menuBtn.addEventListener('click', (e) => {
  nav.classList.toggle('full-nav')
  nav.classList.toggle('dropdown-nav')
  e.currentTarget.classList.toggle('open')
  if (e.currentTarget.classList.contains('open')) {
    e.currentTarget.innerHTML = 'X'
  } else {
    e.currentTarget.innerHTML = '≡'
  }
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('full-nav')
    nav.classList.toggle('dropdown-nav')
    menuBtn.classList.toggle('open')
    menuBtn.innerHTML = '≡'
  })
})

/*------------ Functions ------------*/
init();

function init() {
  typeText()
}

function typeText() {
  const role = roles[index % roles.length];
  const currentRole = rolesEl.textContent;

  if (deleting) {
    if (currentRole.length > 0) {
      rolesEl.textContent = currentRole.slice(0, -1);
      setTimeout(typeText, 100);
    } else {
      deleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeText, 500);
    }
  } else {
    if (currentRole !== role) {
      if (currentRole.length < role.length) {
        rolesEl.textContent = role.slice(0, currentRole.length + 1);
        setTimeout(typeText, 100);
      } else {
        deleting = true;
        setTimeout(typeText, 1000);
      }
    } else {
      deleting = true;
      setTimeout(typeText, 1000);
    }
  }
}
