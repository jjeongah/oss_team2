let val = 0;

window.addEventListener("load", () => {
  console.log("index3 js");
  console.log(localStorage.getItem("val") );
  if(localStorage.getItem("val") == 1){
    console.log("health clicked");
    document.getElementById('recommend1').innerHTML = "1시간 요가하기";
    document.getElementById('recommend2').innerHTML = "스쿼트 100개하기";
    document.getElementById('recommend3').innerHTML = "스트레칭 하기";
    document.getElementById('recommend4').innerHTML = "1만보 걷기";
    document.getElementById('recommend5').innerHTML = "헬스장 가기";
  }
  else if(localStorage.getItem("val") == 2){
    //study
    document.getElementById('recommend1').innerHTML = "하루에 백준 한 문제씩 풀기";
    document.getElementById('recommend2').innerHTML = "책 5장 읽기";
    document.getElementById('recommend3').innerHTML = "영어 단어 30개 암기하기";
    document.getElementById('recommend4').innerHTML = "뉴스레터 밀리지 않고 읽기";
    document.getElementById('recommend5').innerHTML = "고사성어, 사자성어 쓰기";
  }
  else if(localStorage.getItem("val") == 3){
    //hobby
    document.getElementById('recommend1').innerHTML = "음악 듣기";
    document.getElementById('recommend2').innerHTML = "드로잉 연습";
    document.getElementById('recommend3').innerHTML = "뜨개질 하기";
    document.getElementById('recommend4').innerHTML = "베이킹하기";
    document.getElementById('recommend5').innerHTML = "비즈 공예하기";
  }
  else if(localStorage.getItem("val") == 4){
    document.getElementById('recommend1').innerHTML = "긍정 확신의 말 쓰기";
    document.getElementById('recommend2').innerHTML = "감사일기 쓰기";
    document.getElementById('recommend3').innerHTML = "하루 5분 명상";
    document.getElementById('recommend4').innerHTML = "휴대폰 5시간 이하 쓰기";
    document.getElementById('recommend5').innerHTML = "하루 2번 셀프 칭찬하기";
  }
  else if(localStorage.getItem("val") == 5){
    document.getElementById('recommend1').innerHTML = "반려동물과 산책하기 ";
    document.getElementById('recommend2').innerHTML = "제로 웨이스트 실천하기";
    document.getElementById('recommend3').innerHTML = "담배 끊기";
    document.getElementById('recommend4').innerHTML = "반려식물 물 주기";
    document.getElementById('recommend5').innerHTML = "커피 끊기";
  }
});

const date = new Date();
const viewYear = date.getFullYear();
const viewMonth = date.getMonth();
const prevDay = new Date(viewYear, viewMonth,0);
const thisDay = new Date(viewYear, viewMonth + 1, 0);
const Pdate = prevDay.getDate();
const Pday = prevDay.getDay();
const Tdate = thisDay.getDate();
const Tday = thisDay.getDay();
const prevDates = [];
const thisDates = [...Array(Tdate + 1).keys()].slice(1);
const nextDates= [];

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

if (Pday !== 6) {
    for (let i = 0; i < Pday + 1; i++){
        prevDates.unshift(Pdate-i);
    }
}

for (let i = 1; i < 7 - Tday; i++){
    nextDates.push(i);
}
const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');

/*move pages*/
function movetomainpage(){
  location.href = "main.html";
}

function movetodetailpage_health(){
  localStorage.setItem("val", 1);
  location.href = "detail.html";
  //console.log(document.getElementById('recommend1').innerHTML );
  //document.getElementById('recommend1').innerHTML = "ja";
}

function movetodetailpage_study(){
  localStorage.setItem("val", 2);
  location.href = "detail.html";
}

function movetodetailpage_hobby(){
  localStorage.setItem("val", 3);
  console.log("hobby");
  location.href = "detail.html";
}

function movetodetailpage_emotion(){
  localStorage.setItem("val", 4);
  location.href = "detail.html";
}

function movetodetailpage_foryou(){
  localStorage.setItem("val", 5);
  location.href = "detail.html";
}

function movetoaddpage(){
//  localStorage.setItem("val", 0);
  location.href = "add.html";
}
