/*
Computer Hover
*/
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

/*
Handy Hover
*/
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

/*
Click event 클릭하면 아예 밀려서 덮어버리는거 안되나 
*/
const vor = document.querySelector('.left-title');
const nach = document.querySelector('.right-title, .right-text');

vor.addEventListener('click', () => {
	container.classList.add('click-left');
	// nach.style.display = 'none';
});
nach.addEventListener('click', () => {
	container.classList.add('click-right');
	// left.style.display = 'none';
});

