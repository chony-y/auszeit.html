// window.addEventListener("scroll", () => {   
// 	let mouse = document.getElementsByClassName('mouse-scroll2');

// 	if(window.scrollY < 0) {
// 		document.getElementsByClassName('mouse-scroll2').style.display = 'none';
// 	}
// });


// window.addEventListener("scroll", () => {   

// 	const scrolled = window.scrollY;
	
// 	var explain = document.getElementById('wunsch-top');
// 	var write = document.querySelector('main');

// 	if(scrolled < 0) {
// 		explain.style.display = 'block';
// 		write.style.display = 'none';
// 	}
// 	else {
// 		explain.style.display = 'none';
// 		write.style.display = 'block';
// 	}

// });
//window.scrollTo(x, y); 얘는 어떻게 쓰지

window.addEventListener('load', () => {  //새로고침 했을 때 맨 위로 올리는거. 좀 늦춰져야 잘 동작해서 setTimeout으로 함수 만들어준거 
	setTimeout(() => scrollTo(0, 0), 100);
});
