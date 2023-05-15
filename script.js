// Redirect immediately to https://mizu.is-a.dev
// window.location.replace("https://mizu.is-a.dev");
setTimeout(function () {
	window.location.href = "https://mizu.is-a.dev";
}, 500000); // Redirect to https://mizu.is-a.dev after 5s

// can't inspect element
document.addEventListener("keydown", function (e) {
	if (e.keyCode == 123) {
		e.preventDefault();
	}
});

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});
