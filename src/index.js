// Popup
const handlePopup = (element) => {
	const popupWindow = document.getElementsByClassName(element)[0];
	popupWindow.classList.add("show");
	popupWindow.classList.remove("hidden");
};

const handleClose = (element) => {
	const popupWindow = document.getElementsByClassName(element)[0];
	popupWindow.classList.add("hidden");
	popupWindow.classList.remove("show");
}