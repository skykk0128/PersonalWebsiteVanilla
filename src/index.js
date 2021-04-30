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

// Load Random Avatar
const getRandomAvatar = () => {
	var avatars = ["aquaman.svg", "atom.svg", "batman-dark.svg", "batman.svg", "catwoman-dark.svg", "catwoman.svg",
	"cyborg-dark.svg", "cyborg.svg", "green-arrow-dc.svg", "green-lantern-dc-dark.svg", "green-lantern-dc.svg", 
	"harley-quinn-dc.svg", "hawkgirl-dark.svg", "hawkgirl.svg", "hawkman.svg", "isis.svg", "joker-dc-dark.svg", 
	"joker-dc.svg", "lex-luthor-dark.svg", "lex-luthor.svg", "nightwing.svg", "penguin-dc.svg", "superman-dc-dark.svg",
	"superman-dc.svg", "the-flash-dark.svg", "the-flash.svg", "zatanna.svg"];
	return avatars[Math.floor(Math.random() * avatars.length)];
}

const randomAvatar = () => {
	document.getElementById("avatar").src = "/src/assets/svgs/icon_avatar/" + getRandomAvatar();
}
