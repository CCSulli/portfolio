// Menu Slider
const toggleMenu = () => {    
	if (sideNav.style.marginLeft === "" || sideNav.style.marginLeft === "-96px") { 
	  sideNav.style.marginLeft = "0";
	} else { 
	  sideNav.style.marginLeft = "-96px";
	}
  };
  
  const sideNav = document.querySelector('#side-nav');
  const logoMenu = document.querySelector('#logo-menu');
  const navLinks = document.querySelectorAll(".nav-link");
  
  logoMenu.addEventListener('click', toggleMenu);
  navLinks.forEach(link => link.addEventListener("click", toggleMenu));
	
  
  // Scroll Animation
  const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('show');
	  } else {
		entry.target.classList.remove('show');
	  }
	});
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));
  
  
  // Cursor
  const circle = document.getElementById('circle-cursor');
  
  const onMouseMove = e => {
	circle.style.left = e.pageX + 'px';
	circle.style.top = e.pageY + 'px';  
  };
  
  document.addEventListener('mousemove', onMouseMove);
  