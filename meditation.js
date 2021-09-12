const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
	container.classList.remove('hover-left');
});
right.addEventListener('mouseenter', () => {
	container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
	container.classList.remove('hover-right');
});


const up = document.querySelector('.up');
const down = document.querySelector('.down');
// const container = document.querySelector('.container');

up.addEventListener('mouseenter', () => {
	container.classList.add('hover-up');
});
up.addEventListener('mouseleave', () => {
	container.classList.remove('hover-up');
});
down.addEventListener('mouseenter', () => {
	container.classList.add('hover-down');
});
down.addEventListener('mouseleave', () => {
	container.classList.remove('hover-down');
});