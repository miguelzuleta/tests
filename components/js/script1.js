//https://www.htmlgoodies.com/html5/css/display-iframe-contents-without-scrollbars.html

let iframe = document.querySelector('iframe');

iframe.onload = () => {
	console.log('iframe loaded!')
	scrollIframe();
}

let scrollIframe = () => {
	window.addEventListener('scroll', () => {
		iframe.contentWindow.scrollTo(0, window.pageYOffset);
	})
}
