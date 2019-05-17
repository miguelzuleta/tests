let bod = document.querySelector('body');
let btn = document.querySelector('button');
let dir = ['forwards', 'backwards'];
let count = 0;

btn.addEventListener('click', () => {
	bod.classList.toggle('reverse');
	btn.innerHTML = `animate ${dir[count % 2]}`;
	count ++;
})
