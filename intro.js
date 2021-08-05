(() => {
    const balloonsElems = document.querySelectorAll('.balloons');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; //현재 활성화 된 (visible 클래스가 붙은) .graphic-item을 지정
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {  //IntersectionObserver는 현재 화면에 보이는 영역 
        ioIndex = entries[0].target.dataset.index * 1; // 원래 index가 문자열이었는데 이게 숫자로 쓰는 게 좀 더 유용해서 곱하기 1로 간단하게 숫자열로 바꿔준거 
        console.log(ioIndex);
    });

    for (let i = 0; i < balloonsElems.length; i++) {
        io.observe(balloonsElems[i]);
        //balloonsElems[i].setAttribute('data-index', i);
        balloonsElems[i].dataset.index = i; //말풍선 순서대로 data-index 선언해주려고
        graphicElems[i].dataset.index = i; //이미지에도
    }

    function activate(action) {
        currentItem.classList.add('visible')
        if(action) {
            actions[action](true);
        }
    }

    function inactivate(action) {
        currentItem.classList.remove('visible');
        if(action) {
            actions[action](false);
        }
    }

    window.addEventListener('scroll', () => {
        let balloons;
        let boundingRect;
        let temp = 0;
        
        //for (let i = 0; i < balloonsElems.length; i++) {
        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
            balloons = balloonsElems[i];
            if (!balloons) continue; //balloons에 값이 없다면 패스해주고 계속해서 돌려주세요 의미
            boundingRect = balloons.getBoundingClientRect();

            temp++; //루프가 돌 때마다 1씩 추가되도록 위에 변수 추가하고 이거 적은거 
            
            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {

                inactivate();
                currentItem = graphicElems[balloons.dataset.index];
                activate(currentItem.dataset.action);
            }
        }
    });

    window.addEventListener('load', () => {  //새로고침 했을 때 맨 위로 올리는거. 좀 늦춰져야 잘 동작해서 setTimeout으로 함수 만들어준거 
        setTimeout(() => scrollTo(0, 0), 100);
    });

    activate();

})(); //안전하게 보호하려고 한거고 뒤에 ();는 실행까지 시켜준거