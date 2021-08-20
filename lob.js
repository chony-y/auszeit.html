var lob_ex = new Array(
    'es ist so erfrischend, mit dir zu arbeiten.', 
    'wie toll! Ich bin immer wieder beeindruckt von deinen Ergebnissen!',
    'das hast du super gemacht!',
    'ich weiß, wie schwer dieses Projekt ist, aber ich kann mir gar nicht vorstellen, ohne dich zu arbeiten.',
    'wow, du hast wirklich immer einen sehr guten Überblick!',
    'niemand ist ohne Fehler.',
    'kein Mensch ist unfehlbar und es wird schon richtig sein.',
    'du weißt, dass deine Rolle für unseren Erfolg wichtig ist. Ohne dich können wir uns nicht weiter verbessern.',
    'du bist einfach Klasse.',
    'du hast hier wirklich einen gewaltigen Unterschied gemacht, und ich bin dankbar, dass du Teil dieses Teams bist.',
    'du bist perfekt so wie du bist.',
    'keine Sorge, das Leben geht weiter.',
    'du hast diese Woche mehr als genug getan.',
    'ich bin richtig Stolz auf dich!',
    'du bist einer der zuverlässigsten Mitarbeiter, die ich je hatte.',
    'du hast eine Gabe dafür, Vorgaben konkret zu formulieren.',
    'alles wird gut :)',
    'alles in Butter.',
    'kein Ding, alles wird schon gehen.',
    'das wird dir eine Lehre sein.',
    'du verdienst jetzt eine Umarmung',
    'du bist wirklich ein klasse Team!',
    'danke, dass du so flexibel bist. Ohne dich hätte ich es nicht geschafft.',
    'ich möchte dich einfach wissen lassen, wie viel du unserem Team bedeuten.',
    'mach dir keine Sorge. Ich vertraue auf deine Entscheidung.',
    'du bereicherst unser Team stets mit deiner Mitarbeit und deinen Ideen.',
    'du bist mit deiner Zielstrebigkeit und deiner zuverlässigen Arbeit ein Vorbild für uns.',
    'ich glaube an dich.',
    'ich bin sicher, du wirst’s schon überstehen!',
    'deine nette und sympathische Art wird besonders von neuen Kolleg*innen geschätzt, die sich dadurch sehr schnell in ihrer neuen Position wohl fühlen.',
    'dein selbstständiges und aufgabenorientiertes arbeiten beeinflusst und motiviert uns positiv.',
    'wir schätzen besonders deine offene, sympathische Art und arbeiten gerne mit dir zusammen.',
    'deine stets offene Art für neue Ideen sind hoch angesehen in unserem Team.',
    'ich bewundere deine tolle Einstellung – auch in dieser harten Phase.'
);


// Writing a name
const form = document.querySelector('.name'), //  name 이라는 class를 가져와 form 이라는 변수로 선언
      input = form.querySelector ('.nameInput'), //  nameInput 이라는 class를 가져와 input 이라는 변수로 선언
      compliment = document.querySelector ('.js-compliment') // js-compliment 라는 class를 가져와 compliment 이라는 변수로 선언

const showNM = 'showing'; // css에만 만들어져 있는 showing 이라는 class를 showNM 이라는 변수로 선언
const userLS = 'currentUser'; // 해당 페이지에 있는 local storage 안에 들어갈 value 이름 (user가 입력한 이름)

function submitName(event) { // 이름이 입력되어 제출되면 이벤트를 발생시킬 함수
	event.preventDefault(); // 이벤트의 default 값으로 인해 input에 이름을 입력한 후 enter를 누르면 input의 값이 노출되지 않고 화면이 초기화 되는데 그걸 없애기 위한 기능
	const inputName = input.value; // input의 value 값을 inputName 이라는 변수로 선언
	showName(inputName); // showName 이라는 함수에 들어갈 argument를 input.value 값으로 설정
}

function askName() { // 이름을 입력받아 submitName 함수로 전달하기 위한 함수
	form.classList.add(showNM); // 이름을 입력받기 위해 form의 class list에 .showing 이라는 class를 추가
    form.addEventListener ('submit', submitName); // input에서 입력된 이름을 submitName 이라는 함수로 제출하는 이벤트를 실행
}

function showName(text) { // 입력받은 이름을 화면에 노출하는 함수
	form.classList.remove(showNM); // input이 보이면 안되기 때문에 form의 class list에서 .showing 이라는 class를 제거
	compliment.classList.add(showNM); // 입력된 이름을 노출하기 위헤 compliment의 class list 에 .showing 이라는 class를 추가
	compliment.innerText = `${text}, `; // compliment (h4 class = "js-compliment") 에 입력될 텍스트를 작성
    `${text}` + typeWriter(lob_ex);
}

/**
 * Random
 */
function randomItem(a) {
    return a[Math.floor(Math.random() * lob_ex.length)];
}
// document.write(randomItem(lob), ' ');

/**
 * Typing effect
 */
var i = 0;
var txt =  randomItem(lob_ex);
var speed = 100;

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

/**
 * Buttons
 */
var buttons = document.getElementById('btn');

document.querySelector('.name').onsubmit = function() {
    window.setTimeout(showButtons, 7000);
}
 
function showButtons() {
    buttons.style.display = 'block';
}
// var buttons = document.getElementById('btn');
// document.querySelector('.name').onsubmit = function buttonShow() {
//     buttons.style.display = 'block';
// }


// Button_weiter
document.getElementById('btn1').onclick = function weiter() {
    alert('weiter');
    typeWriter();
}


// Button_save
function save(){
    html2canvas(document.querySelector('#대상'), {}).then(function (canvas) {
        saveAs(canvas.toDataURL(), 'name.png');
    });    
}

function saveAs(uri, filename) {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		link.href = uri;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		window.open(uri);
	}
}

/**
 * Changing bgcolors
 */
function bgColor() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
    var num = Math.floor(Math.random() * color.length);
    var bodyTag = document.getElementById("lobs");
    bodyTag.style.backgroundColor = color[num];
}

