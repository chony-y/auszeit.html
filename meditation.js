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

// /*
// Handy Hover
// */
// const up = document.querySelector('.up');
// const down = document.querySelector('.down');
// // const container = document.querySelector('.container');

// up.addEventListener('mouseenter', () => {
// 	container.classList.add('hover-up');
// });
// up.addEventListener('mouseleave', () => {
// 	container.classList.remove('hover-up');
// });
// down.addEventListener('mouseenter', () => {
// 	container.classList.add('hover-down');
// });
// down.addEventListener('mouseleave', () => {
// 	container.classList.remove('hover-down');
// });

/*
Click event 클릭하면 아예 밀려서 덮어버리는거 안되나 
*/
const lTitle = document.querySelector('.left-title');
const rTitle = document.querySelector('.right-title');
const vVideo = document.getElementById('video-vor');
const nVideo = document.getElementById('video-nach');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');

lTitle.addEventListener('click', () => {
	container.classList.add('click-left');
	vVideo.classList.toggle('active');
});
rTitle.addEventListener('click', () => {
	container.classList.add('click-right');
	nVideo.classList.toggle('active');
});
close1.addEventListener('click', () => {
	vVideo.classList.toggle('active');
	vVideo.remove();
	// window.location.reload();
});
close2.addEventListener('click', () => {
	nVideo.classList.toggle('active');
	nVideo.remove();
	// window.location.reload();
});




// /* 
// 자막 
// */

// let textTrackElem = document.getElementById("texttrack");

// textTrackElem.addEventListener("cuechange", (event) => {
//   let cues = event.target.track.activeCues;
// });

// textTrackElem.oncuechange = (event) => {
//   let cues = event.target.track.activeCues;
// });