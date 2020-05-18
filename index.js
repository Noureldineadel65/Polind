// let searchNav = false;
// document
// 	.querySelector(".searching-nav")
// 	.addEventListener("click", function (e) {
// 		if (e.target.classList.contains("img") && !searchNav) {
// 			this.querySelector("img").classList.toggle("up");
// 			searchNav = true;
// 			setTimeout(
// 				function () {
// 					this.classList.toggle("active-search");
// 				}.bind(this),
// 				400
// 			);
// 		} else if (e.target.classList.contains("img") && searchNav) {
// 			this.classList.toggle("active-search");

// 			searchNav = false;
// 			setTimeout(
// 				function () {
// 					this.querySelector("img").classList.toggle("up");
// 				}.bind(this),
// 				400
// 			);
// 		}
// 	});
// 575
// 870
// 1145
// 1450
$(".gallery").slick({
	slidesToShow: 5,
	responsive: [
		{
			breakpoint: 1450,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1145,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 870,
			settings: {
				centerPadding: "60px",
				centerMode: true,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 575,
			settings: {
				centerPadding: "60px",
				centerMode: true,
				slidesToShow: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
var waypoint = new Waypoint({
	element: document.querySelector("h1"),
	handler: function () {
		document.querySelector(".orange").classList.toggle("activated");
	},
});
document.querySelector(".gallery").addEventListener("click", function (e) {
	console.log("eoe");
});
