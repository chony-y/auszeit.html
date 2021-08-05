var lob_ex = new Array(
    'Es ist so erfrischend, mit Ihnen zu arbeiten.', 
    'Wie toll! Ich bin immer wieder beeindruckt von deinen Ergebnissen!',
    'Das haben Sie super gemacht!',
    'Ich weiß, wie schwer dieses Projekt ist, aber ich kann mir gar nicht vorstellen, ohne dich zu arbeiten.',
    'Du hast richtig gute Augen.',
    'Wow, du hast wirklich immer einen sehr guten Überblick!',
    'Niemand ist ohne Fehler.',
    'Kein Mensch ist unfehlbar.',
    'Du weißt, dass deine Rolle für unseren Erfolg wichtig ist. Ohne dich können wir uns nicht weiter verbessern.',
    'Du bist einfach Klasse.',
    'Ich möchte Ihnen einfach wissen lassen, wie viel Sie unserem Team bedeuten.',
    'Du hast hier wirklich einen gewaltigen Unterschied gemacht, und ich bin dankbar, dass du Teil dieses Teams bist.',
    'Du bist perfekt so wie du bist.',
    'Keine Sorge, das Leben geht weiter.',
    'Sie haben diese Woche mehr als genug getan.',
    'Ich bin richtig Stolz auf Sie!',
    'Du bist einer der zuverlässigsten Mitarbeiter, die ich je hatte.',
    'Sie haben eine Gabe dafür, Vorgaben konkret zu formulieren.',
    'Alles wird gut :)',
    'Alles in Butter.',
    'Du bist wirklich ein klasse Team!',
    'Danke, dass du so flexibel bist. Ohne dich hätte ich es nicht geschafft.',
    'Das Leben geht weiter.',
    'Mach dir keine Sorge. Ich vertraue bei deiner Entscheidung.',
    'Ich glaube an dich.',
    'Ich bewundere deine tolle Einstellung – auch in dieser harten Phase.'
);

// Writing a name
const form = document.querySelector('.name'), //  name 이라는 class를 가져와 form 이라는 변수로 선언
      input = form.querySelector ('.nameInput'), //  nameInput 이라는 class를 가져와 input 이라는 변수로 선언
      compliment = document.querySelector ('.js-compliment') // js-compliment 라는 class를 가져와 compliment 이라는 변수로 선언

const showNM = 'showing'; // css에만 만들어져 있는 showing 이라는 class를 showNM 이라는 변수로 선언
const userLS = 'currentUser'; // 해당 페이지에 있는 local storage 안에 들어갈 value 이름 (user가 입력한 이름)

function submitName(event){ // 이름이 입력되어 제출되면 이벤트를 발생시킬 함수
	event.preventDefault(); // 이벤트의 default 값으로 인해 input에 이름을 입력한 후 enter를 누르면 input의 값이 노출되지 않고 화면이 초기화 되는데 그걸 없애기 위한 기능
	const inputName = input.value; // input의 value 값을 inputName 이라는 변수로 선언
	showName(inputName); // showName 이라는 함수에 들어갈 argument를 input.value 값으로 설정
}

function askName(){ // 이름을 입력받아 submitName 함수로 전달하기 위한 함수
	form.classList.add(showNM); // 이름을 입력받기 위해 form의 class list에 .showing 이라는 class를 추가
    form.addEventListener ('submit', submitName); // input에서 입력된 이름을 submitName 이라는 함수로 제출하는 이벤트를 실행
}

function showName(text){ // 입력받은 이름을 화면에 노출하는 함수
	form.classList.remove(showNM); // input이 보이면 안되기 때문에 form의 class list에서 .showing 이라는 class를 제거
	compliment.classList.add(showNM); // 입력된 이름을 노출하기 위헤 compliment의 class list 에 .showing 이라는 class를 추가
	compliment.innerText = `${text}, `; // compliment (h4 class = "js-compliment") 에 입력될 텍스트를 작성
    `${text}` + typeWriter(lob_ex);
}

// random 
function randomItem(a) {
    return a[Math.floor(Math.random() * lob_ex.length)];
}
// document.write(randomItem(lob), ' ');

// Typing effect 
var i = 0;
var txt = randomItem(lob_ex);
var speed = 90;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("lob").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function core() { //askName과 showName 함수가 실행될 조건을 설정
	const currentUser = localStorage.getItem (userLS); // 해당 페이지의 local storage 에서 가져온 userLS 를 currentUser 라는 변수로 선언
    return currentUser === null ? askName() : showName(currentUser)
}
core(); 

// Buttons



// 배경색 변경
function bgColor() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
    var num = Math.floor(Math.random() * color.length);
    var bodyTag = document.getElementById("lobs");
    bodyTag.style.backgroundColor = color[num];
}

