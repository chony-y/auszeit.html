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
Click event 
*/
const lTitle = document.querySelector('.left-title');
const rTitle = document.querySelector('.right-title');
const video = document.querySelector('video');
const vVideo = document.getElementById('video-vor');
const nVideo = document.getElementById('video-nach');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');

lTitle.addEventListener('click', () => {
	container.classList.add('click-left');
	vVideo.classList.toggle('active');
	video.currentTime = 0;
	video.pause();
});
rTitle.addEventListener('click', () => {
	container.classList.add('click-right');
	nVideo.classList.toggle('active');
	video.currentTime = 0;
	video.pause();
});
close1.addEventListener('click', () => {
	vVideo.classList.toggle('active');
	vVideo.remove();
	// window.location.reload();
});
close2.addEventListener('click', () => {
	window.location.reload();
});
close3.addEventListener('click', () => {
	nVideo.classList.toggle('active');
	nVideo.remove();
	// window.location.reload();
});
close4.addEventListener('click', () => {
	window.location.reload();
});


/**
 * getDay() 로컬 시간의 주를 구하는
 * 일요일 0, 월요일 1, 화요일 2, 수요일 3, 목요일 4, 금요일 5, 토요일 6
 */


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