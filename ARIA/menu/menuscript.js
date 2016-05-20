 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myGoodFunction() {
	var value = document.getElementById("mybutton").getAttribute("aria-expanded");
	if (value == 'false') {
		document.getElementById("mybutton").setAttribute("aria-expanded", true);
	} else {
		document.getElementById("mybutton").setAttribute("aria-expanded", false);
	}
	document.getElementById("myDropdown").classList.toggle("show");
}

// Simple switch
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
