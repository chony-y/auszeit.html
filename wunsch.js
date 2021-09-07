window.addEventListener("scroll", function(){   
	
	var explain = document.getElementById('wunsch-top');
	var write = document.querySelector('main');

	if(window.scrollY < 0) {
		explain.style.display = 'block';
		write.style.display = 'none';
	}
	else {
		explain.style.display = 'none';
		write.style.display = 'block';
	}

});


window.addEventListener('load', () => {  //새로고침 했을 때 맨 위로 올리는거. 좀 늦춰져야 잘 동작해서 setTimeout으로 함수 만들어준거 
	setTimeout(() => scrollTo(0, 0), 100);
});

