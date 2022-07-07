let hamburger = document.getElementsByClassName('hamburger')[0];
hamburger.onclick = () => {
	document.body.classList.toggle('enter-hover-final');
}

let enter = document.getElementsByClassName('enter-link')[0];
enter.onclick = () => {
	document.body.classList.toggle('login-final');
}
let exit_login = document.getElementsByClassName('exit-login')[0];
exit_login.onclick = () => {
	document.body.classList.remove('login-final');
}
let login_ul = document.getElementsByClassName('login-in-enter-hover')[0];
login_ul.onclick = () =>{
	document.body.classList.remove('enter-hover-final');
	document.body.classList.add('login-final');
}
let login_nav_bar = document.getElementById('login-nav-bar');
login_nav_bar.onclick = () => {
	document.body.classList.toggle('login-content-full-size-final');
}
