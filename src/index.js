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
	document.getElementById("email__error").style.visibility = "hidden";
	document.getElementById("login__email__error").style.visibility = "hidden";
	document.getElementById("login__password__error").style.visibility = "hidden";
	document.getElementById("register__name__error").style.visibility = "hidden";
	document.getElementById("register__username__error").style.visibility = "hidden";
	document.getElementById("register__email__error").style.visibility = "hidden";
	document.getElementById("register__password__error").style.visibility = "hidden";
	document.getElementById("confirm__password__error").style.visibility = "hidden";
}

// Send Subscription to Email
const subscribeEmail = () => {
	const emailValue = document.subscription.email.value;
	if (emailValue === "") {
		document.getElementById("email__error").style.visibility = "visible";
		return false;
	} else {
		document.getElementById("email__error").style.visibility = "hidden";
		const link = "mailto:" + encodeURIComponent(document.getElementById('email').value)
             + "?cc=skykk0128@gmail.com"
             + "&subject=" + encodeURIComponent("Subscribe Newletters from Steven Wang")
             + "&body=" + encodeURIComponent("Subscribe Newletters from Steven Wang");
    	window.location.href = link;
		return true;
	}
}

// Login Empty Input Handler
const handleLoginEmpty = () => {
	const loginEmailValue = document.login.loginemail.value;
	const loginPasswordValue = document.login.loginpassword.value;
	if (loginEmailValue === "") {
		document.getElementById("login__email__error").style.visibility = "visible";
	} else {
		document.getElementById("login__email__error").style.visibility = "hidden";
	}
	if (loginPasswordValue === "") {
		document.getElementById("login__password__error").style.visibility = "visible";
	} else {
		document.getElementById("login__password__error").style.visibility = "hidden";
	}
}

// Register Empty Input Handler
const handleRegisterEmpty = () => {
	const registerNameValue = document.register.registername.value;
	const registerUsernameValue = document.register.registerusername.value;
	const registerEmailValue = document.register.registeremail.value;
	const registerPasswordValue = document.register.registerpassword.value;
	const confirmPasswordValue = document.register.confirmpassword.value;
	if (registerNameValue === "") {
		document.getElementById("register__name__error").style.visibility = "visible";
	} else {
		document.getElementById("register__name__error").style.visibility = "hidden";
	}
	if (registerUsernameValue === "") {
		document.getElementById("register__username__error").style.visibility = "visible";
	} else {
		document.getElementById("register__username__error").style.visibility = "hidden";
	}
	if (registerEmailValue === "") {
		document.getElementById("register__email__error").style.visibility = "visible";
	} else {
		document.getElementById("register__email__error").style.visibility = "hidden";
	}
	if (registerPasswordValue === "") {
		document.getElementById("register__password__error").style.visibility = "visible";
	} else {
		document.getElementById("register__password__error").style.visibility = "hidden";
	}
	if (confirmPasswordValue === "") {
		document.getElementById("confirm__password__error").style.visibility = "visible";
	} else {
		document.getElementById("confirm__password__error").style.visibility = "hidden";
	}
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
