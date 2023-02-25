
// Menu Slider
function toggleMenu() {    
	if(sideNav.style.marginLeft === "" || sideNav.style.marginLeft === "-96px") { 
	  sideNav.style.marginLeft = "0";
	}
	else { 
	  sideNav.style.marginLeft = "-96px";
	}
  };

const sideNav = document.querySelector('#side-nav');
const logoMenu = document.querySelector('#logo-menu');

  
logoMenu.addEventListener('click', toggleMenu);
  

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		 } 
		else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Videos
// document.getElementById('vid-1').playbackRate = 3;
// document.getElementById('vid-2').playbackRate = 3;
// document.getElementById('vid-3').playbackRate = 3;

// Cursor
let circle = document.getElementById('circle-cursor');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  
}
document.addEventListener('mousemove', onMouseMove);


