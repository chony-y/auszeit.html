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
    'nur Mut, du bist immer gut vorbereitet und es wird endlich gehen.',
    'mach dir keine Sorgen, das war doch nur ein geringer Fehler und du verbesserst ja jedes Mal Fehler.',
    'keine Sorge, das Leben geht weiter.',
    'du hast diese Woche mehr als genug getan.',
    'ich bin richtig Stolz auf dich!',
    'du bist einer der zuverlässigsten Mitarbeiter, die ich je hatte.',
    'du hast eine Gabe dafür, Vorgaben konkret zu formulieren.',
    'alles wird gut :)',
    'alles in Butter.',
    'dank deiner Vorbereitung war die Aufgebe nicht so anstrengend.',
    'ich bin beeindruckt von deiner Leidenschaft für diese Aufgabe.',
    'du weißt genau, wie man die Sache anpacken soll. Du hast eine vorzügliche Auffassungsgabe.',
    'kein Ding, alles wird schon gehen.',
    'irren ist menschlich. Das wird dir eine Lehre sein.',
    'heute ist es ziemlich anstrengend, oder? Du kannst es nicht merken, aber ich kann sehen, dass du immer bessere Aufgaben erledigst.',
    'du verdienst jetzt eine Umarmung',
    'du bist wirklich ein klasse Team!',
    'danke, dass du so flexibel bist. Ohne dich hätte ich es nicht geschafft.',
    'ich möchte dich einfach wissen lassen, wie viel du unserem Team bedeuten.',
    'mach dir keine Sorge. Ich vertraue auf deine Entscheidung.',
    'du bereicherst unser Team stets mit deiner Mitarbeit und deinen Ideen.',
    'dich in diesem Team zu haben, macht einen riesigen Unterschied.',
    'du bist mit deiner Zielstrebigkeit und deiner zuverlässigen Arbeit ein Vorbild für uns.',
    'ich glaube an dich.',
    'ich bin sicher, du wirst’s schon überstehen!', 
    'deine nette und sympathische Art wird besonders von neuen Kolleg*innen geschätzt, die sich dadurch sehr schnell in ihrer neuen Position wohl fühlen.',
    'dein selbstständiges und aufgabenorientiertes arbeiten beeinflusst und motiviert uns positiv.',
    'wir schätzen besonders deine offene, sympathische Art und arbeiten gerne mit dir zusammen.',
    'deine stets offene Art für neue Ideen sind hoch angesehen in unserem Team.',
    'dank deiner warmherzigen und offenen Art, macht das arbeiten in unserem Team viel mehr Spaß.',
    'du sorgst mit deiner netten und kollegialen Einstellungen für ein besseres Arbeitsklima.',
    'es ist für unser Team sehr bereichernd, dass du immer ein offenes Ohr bei Problemen für uns hast.',
    'ich bewundere deine tolle Einstellung – auch in dieser harten Phase.'
);


// Writing a name
const form = document.querySelector('.name'), 
      input = form.querySelector ('.nameInput'), 
      compliment = document.querySelector ('.js-compliment') 

const showNM = 'showing'; // css에만 만들어져 있는 showing 이라는 class를 showNM 이라는 변수로 선언
const userLS = 'currentUser'; // user가 입력한 이름

var nameForLob = '';

function submitName(event) { 
	event.preventDefault(); // 이벤트 default 값 때문에 화면이 초기화되는거 없애려고
	const inputName = input.value; 
	showName(inputName); 
}

function askName() { // 이름을 받아서 submitName한테 전달
	form.classList.add(showNM); // 이름을 입력받기 위해 form의 class list에 .showing 이라는 class를 추가
    form.addEventListener ('submit', submitName); // input에서 입력된 이름을 submitName로 제출
}

function showName(text) { // 입력받은 이름을 화면에 노출
	nameForLob = text;
    form.classList.remove(showNM); // input된 이름 안 보이게 제거
	compliment.classList.add(showNM); // 칭찬메세지에서 다시 이름보이게 추가
	compliment.innerText = `${text}, `; // compliment (h4 class = "js-compliment") 에 입력될 텍스트를 작성
    `${text}` + typeWriter(lob_ex);
}

function mehrLob() { 
    hideButtons();
    i = 0;
    txt =  randomItem(lob_ex);
    speed = 100;
    inputName = nameForLob;
    form.classList.remove(showNM);
	compliment.classList.add(showNM); 
	compliment.innerText = `${nameForLob}, `; 
    `${nameForLob}` + typeWriter(lob_ex);
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
    if (i == (txt.length)){
        setTimeout(showButtons, 1000);
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
function showButtons() {
    buttons.style.display = 'block';
}

function hideButtons() {
    buttons.style.display = 'none';
}

// Button_weiter
document.getElementById('btn1').onclick = function weiter() {
    mehrLob();
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

