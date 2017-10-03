var gallery = document.querySelector(".item-gallery");
var header = gallery.querySelector(".item-pic");
var left = gallery.querySelector(".item-preview-left");
var center = gallery.querySelector(".item-preview-center");
var right = gallery.querySelector(".item-preview-right");

left.addEventListener("click", function(event) {
	header.classList.remove("item-preview-center-click");
	header.classList.remove("item-preview-right-click");
  header.classList.add("item-preview-left-click");
});

center.addEventListener("click", function(event) {
	header.classList.remove("item-preview-left-click");
	header.classList.remove("item-preview-right-click");
  header.classList.add("item-preview-center-click");
});

right.addEventListener("click", function(event) {
	header.classList.remove("item-preview-center-click");
	header.classList.remove("item-preview-right-click");
  header.classList.add("item-preview-right-click");
});
