var lob_ex = new Array(
    'es ist so erfrischend, mit dir zu arbeiten.', 
    'wie toll ! Ich bin immer wieder beeindruckt von deinen Ergebnissen !',
    'das hast du super gemacht !',
    'ich weiß, wie schwer dieses Projekt ist, aber ich kann mir gar nicht vorstellen, ohne dich zu arbeiten.',
    'wow, du hast wirklich immer einen sehr guten Überblick !',
    'niemand ist ohne Fehler.',
    'kein Mensch ist unfehlbar und es wird schon richtig sein.',
    'du weißt, dass deine Rolle für unseren Erfolg wichtig ist. Ohne dich können wir uns nicht weiter verbessern.',
    'du bist einfach Klasse.',
    'du hast hier wirklich einen gewaltigen Unterschied gemacht, und ich bin dankbar, dass du Teil dieses Teams bist.',
    'du bist perfekt so wie du bist.',
    'nur Mut, du bist immer gut vorbereitet und es wird alles wird gut gehen.',
    'mach dir keine Sorgen, das war doch nur ein kleiner Fehler und mit jedem Fehler lernst du dazu.',
    'keine Sorge, das Leben geht weiter.',
    'du hast diese Woche mehr als genug getan.',
    'ich bin richtig Stolz auf dich !',
    'du bist einer der zuverlässigsten Mitarbeiter, die ich je hatte.',
    'du hast eine Gabe dafür, Vorgaben konkret zu formulieren.',
    'alles wird gut :)',
    'alles in Butter.',
    'dank deiner Vorbereitung war die Aufgabe nicht so anstrengend.',
    'ich bin beeindruckt von deiner Leidenschaft für diese Aufgabe.',
    'du weißt genau, wie man die Sache anpacken soll ! Du hast eine schnelle Auffassungsgabe.',
    'kein Ding, alles wird schon gehen.',
    'heute ist es ziemlich anstrengend, oder? Du kannst es nicht merken, aber ich kann sehen, dass du die Aufgaben immer besser bewältigst.',
    'du verdienst jetzt eine Umarmung',
    'du bist wirklich ein klasse Team !',
    'danke, dass du so flexibel bist. Ohne dich hätte ich es nicht geschafft.',
    'ich möchte dich einfach wissen lassen, wie viel du unserem Team bedeuten.',
    'mach dir keine Sorge. Ich vertraue auf deine Entscheidung.',
    'du bereicherst unser Team stets mit deiner Mitarbeit und deinen Ideen.',
    'dich in diesem Team zu haben, macht einen riesigen Unterschied.',
    'du bist mit deiner Zielstrebigkeit und deiner zuverlässigen Arbeit ein Vorbild für uns.',
    'ich glaube an dich.',
    'ich bin sicher, du wirst’s schon überstehen !', 
    'deine nette und sympathische Art wird besonders von neuen Kolleg*innen geschätzt, die sich dadurch sehr schnell in ihrer neuen Position wohl fühlen.',
    'dein selbstständiges und aufgabenorientiertes arbeiten beeinflusst und motiviert uns positiv.',
    'wir schätzen besonders deine offene, sympathische Art und arbeiten gerne mit dir zusammen.',
    'deine stets offene Art für neue Ideen sind hoch angesehen in unserem Team.',
    'dank deiner warmherzigen und offenen Art, macht das arbeiten in unserem Team viel mehr Spaß.',
    'du sorgst mit deiner netten und kollegialen Einstellungen für ein besseres Arbeitsklima.',
    'es ist für unser Team sehr bereichernd, dass du immer ein offenes Ohr bei Problemen für uns hast.',
    'ich bewundere deine tolle Einstellung – auch in dieser harten Phase.',
    'die aktuellen Schwierigkeiten werden die Grundlage für deinen Erfolg sein. Bleib stark und noch einen tollen Tag !',
    'nicht alles läuft immer nach Plan. Arbeite stetig in deinem eigenen Tempo weiter, dann wird es morgen besser laufen als heute.',
    'erfolg kommt nur durch das Machen von Fehlern und Rückschlägen. Glaub an dich selbst und sei wieder mutig !',
    'du weißt immer, wie du dir selbst helfen kannst.',
    'setz dir keine Grenzen, du machst deine Arbeit sehr gut.',
    'deine Art und Weise, Probleme zu lösen, ist sehr kreativ und wissenschaftlich !',
    'unser Team benötigte eine andere Sicht- und Denkweise. Deine Ideen und Anmerkungen haben uns sehr geholfen. Vielen Dank.',
    'du hast mich auf den richtigen Trichter gebracht ! Danke für deine Hilfe.',
    'du erledigst jede Angelegenheit zuverlässig und sorgfältig. ',
    'du bist immer sehr aktiv in allem, was du tust, und das motiviert uns im Projekt. Lasst uns zusammen das Projekt erfolgreich abschließen.',
    'du brauchst keine Zweifel zu haben, da du deine Arbeit sehr gut machst. Du bist detail orientiert und möchtest stets ein perfektes Ergebnis erzielen. Ohne dich hätten wir dieses Ergebnis nicht erreicht.',
    'du erledigst deine Arbeit stets sehr ordentlich.',
    'ich möchte mir dich zum Vorbild nehmen, da du die verschiedensten Probleme durch unterschiedliche Sicht- beziehungsweise Denkweisen löst.'
);


// Writing a name
const form = document.querySelector('.name'), 
      input = form.querySelector ('.nameInput'), 
      compliment = document.querySelector ('.js-compliment') 

const showNM = 'showing'; // css에만 있는 showing class를 showNM 이라는 변수로 선언
const userLS = 'currentUser'; // user 이름

var nameForLob = '';

function submitName(event) { 
	event.preventDefault(); // 이벤트 default 값 때문에 화면이 초기화되는거 없애려고
	const inputName = input.value; 
	showName(inputName); 
}

function askName() { 
	form.classList.add(showNM); // 이름을 입력받기 위해 .showing 이라는 class를 추가
    form.addEventListener ('submit', submitName); // input에서 입력된 이름을 submitName로 제출
}

function showName(text) { // 화면 노출
	nameForLob = text;
    form.classList.remove(showNM); // input된 이름 제거
	compliment.classList.add(showNM); // 칭찬메세지에서 다시 이름 추가
	compliment.innerText = `${text}, `;
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
var speed = 120;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("lob").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i == (txt.length)){
        setTimeout(showButtons, 2000);
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
document.querySelector('.btn1').onclick = function weiter() {
    mehrLob(); 
}

// Button_Beifall
var beifall1 = document.querySelector('.beifall1');
var beifall2 = document.querySelector('.beifall2');
var beifall3 = document.querySelector('.beifall3');
document.querySelector('.btn3').onclick = function clap() {
    beifall1.play();
    beifall2.play();
    beifall3.play();
}

// document.getElementById('btn3').onclick = function clap() {
//     for (let i = 0; i<=2; i++) {
//         if (i == 0) {
//             beifall1.play();
//         }
//         else if (i == 1) {
//             beifall2.play();
//         } else {
//             beifall3.play();
//         }
//     }
// }


//Button_speichern (npm install --save html2canvas)
// // 홈페이지에 나온 방법
// document.getElementById('btn3').onclick = function screenshot(){
//     html2canvas(document.querySelector("#capture")).then(canvas => {
//         document.body.appendChild(canvas)
//     });
// }

// document.getElementById('btn3').onclick = function screenshot(e){
//     var startX, startY;
//     var width = window.innterWidth;
//     var height = window.innerHeight;

//     //마우스 이동하면서 선택한 영역 보여주기 위한 div생성
//     var $screenShot = document.createElement('div');
//     $screenShot.id = "screenshot";

//     document.querySelector('body').appendChild($screenBg);
//     document.querySelector('body').appendChild($screenShot);

//     var selectArea = false;
//     var body = document.querySelector('body');

//     // 마우스 누르는 이벤트
//     var mousedown = function(e) {
//         e.preventDefault();
//         selectArea = true;
//         startX = e.clientX;
//         startY = e.clientY;
//         body.removeEventListner('mousedown', mousedown); //이벤트 한번만 동작하게 삭제
//     }
//     body.addEventListener('mousedown', mousedown); //마우스 누르는 이벤트
    
//     // 마우스 떼는 이벤트 
//     var mouseup = function(e) {
//         selectArea = false; 
//         body.removeEventListner('mousedown', mousedown); //초기화. 마우스 떼면서 마우스무브 삭제

//         //스크린샷 위해 생성한 객체 삭제
//         $screenShot.parentNode.removeChild($screenShot); 
//         $screenBg.parentNode.removeChild($screenBg);
//         var x = e.clientX;
//         var y = e.clientY;
//         var top = Math.min(y, startY);
//         var left = Math.min(x, startX);
//         var width = Math.max(x, startX) - left;
//         var height = Math.max(y, startY) - top;
//         html2canvas(document.body).then(
//             function(canvas) { //전체 화면 캡쳐
//                 //선택 영역만큼 자르기
//                 var img = canvas.getContext('2d').getImageData(left, top, width, height);
//                 var c = document.createElement('canvas');
//                 c.width = width;
//                 c.height = height;
//                 c.getContext('2d').putImageData(img, 0, 0);
//                 save(c); //crop한 이미지 저장
//             }
//         );
//         body.removeEventListener('mouseup', mouseup); 
//     }
//     body.addEventListener('mouseup', mouseup); 

//     // 캡쳐한 이미지 저장
//     function save(canvas) {
//         if(navigator.msSaveBlob) {
//             var blob = canvas.msToBlob();
//             return navigator.msSaveBlob(blob, 'lob.png');
//         } else {
//             var el = document.getElementById('target');
//             el.href = canvas.toDataURL('image/png');
//             el.download = 'lob.png';
//             el.click();
//         }
//     }
// }



// const screenshotTarget = document.body;
// html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     window.location.href = base64image;
// });


/**
 * Changing bgcolors
 */
function bgColor() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
    var num = Math.floor(Math.random() * color.length);
    var bodyTag = document.getElementById("lobs");
    bodyTag.style.backgroundColor = color[num];
}

