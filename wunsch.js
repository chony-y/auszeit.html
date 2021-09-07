window.addEventListener("scroll", function(){     

	const explain = document.getElementById('wunschmain');
	explain.classList.wunschmain('show', window.scrollY > 0);

	console.log('스크롤');
});