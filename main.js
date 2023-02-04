/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	const x = document.getElementById("side-nav");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }


let clip = document.getElementById("vid");
clip.playbackRate = 4;

clip.addEventListener("mouseover", function () {
	this.play();
});

clip.addEventListener("mouseleave", function () {
	this.pause();
});

