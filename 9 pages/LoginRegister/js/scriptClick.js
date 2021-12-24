window.addEventListener("DOMContentLoaded", () => {
	const headLink = document.querySelectorAll("dropDown");
	const tagA = headLink.getElementsByTagName("a");

	tagA.addEventListener("click",() => {
		console.log('erogierg');
	});
});