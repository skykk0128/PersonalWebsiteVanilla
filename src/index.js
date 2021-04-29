// Show / Hide Popup
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

// Send Subscription to Email
const subscribeEmail = () => {
    const link = "mailto:" + encodeURIComponent(document.getElementById('email').value)
             + "?cc=skykk0128@gmail.com"
             + "&subject=" + encodeURIComponent("Subscribe Newletters from Steven Wang")
             + "&body=" + encodeURIComponent("Subscribe Newletters from Steven Wang");
    window.location.href = link;
}
