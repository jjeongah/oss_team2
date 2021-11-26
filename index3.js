let val = 0;
/*functions for popup start*/
function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

//document.querySelector("#addbtn").addEventListener('click', show);
document.querySelector("#close").addEventListener("click", close);

window.addEventListener("load", () => {
  console.log("index3 js");
  console.log(localStorage.getItem("val"));
  if (localStorage.getItem("val") == 1) {
    console.log("health clicked");
    document.getElementById("category_name").innerHTML = "운동/다이어트";
    document.getElementById("recommend1").innerHTML = "1시간 요가하기";
    document.getElementById("recommend2").innerHTML = "스쿼트 100개하기";
    document.getElementById("recommend3").innerHTML = "스트레칭 하기";
    document.getElementById("recommend4").innerHTML = "1만보 걷기";
    document.getElementById("recommend5").innerHTML = "헬스장 가기";
  } else if (localStorage.getItem("val") == 2) {
    //study
    document.getElementById("category_name").innerHTML = "공부하기";
    document.getElementById("recommend1").innerHTML =
      "하루에 백준 한 문제씩 풀기";
    document.getElementById("recommend2").innerHTML = "책 5장 읽기";
    document.getElementById("recommend3").innerHTML = "영어 단어 30개 암기하기";
    document.getElementById("recommend4").innerHTML =
      "뉴스레터 밀리지 않고 읽기";
    document.getElementById("recommend5").innerHTML = "고사성어, 사자성어 쓰기";
  } else if (localStorage.getItem("val") == 3) {
    //hobby
    document.getElementById("category_name").innerHTML = "취미활동";
    document.getElementById("recommend1").innerHTML = "음악 듣기";
    document.getElementById("recommend2").innerHTML = "드로잉 연습";
    document.getElementById("recommend3").innerHTML = "뜨개질 하기";
    document.getElementById("recommend4").innerHTML = "베이킹하기";
    document.getElementById("recommend5").innerHTML = "비즈 공예하기";
  } else if (localStorage.getItem("val") == 4) {
    document.getElementById("category_name").innerHTML = "감정관리";
    document.getElementById("recommend1").innerHTML = "긍정 확신의 말 쓰기";
    document.getElementById("recommend2").innerHTML = "감사일기 쓰기";
    document.getElementById("recommend3").innerHTML = "하루 5분 명상";
    document.getElementById("recommend4").innerHTML = "휴대폰 5시간 이하 쓰기";
    document.getElementById("recommend5").innerHTML = "하루 2번 셀프 칭찬하기";
  } else if (localStorage.getItem("val") == 5) {
    document.getElementById("category_name").innerHTML = "알아서 추가";
    document.getElementById("recommend1").innerHTML = "반려동물과 산책하기 ";
    document.getElementById("recommend2").innerHTML = "제로 웨이스트 실천하기";
    document.getElementById("recommend3").innerHTML = "담배 끊기";
    document.getElementById("recommend4").innerHTML = "반려식물 물 주기";
    document.getElementById("recommend5").innerHTML = "커피 끊기";
  }
});

let date = new Date();
const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const prevDay = new Date(viewYear, viewMonth, 0);
  const thisDay = new Date(viewYear, viewMonth + 1, 0);
  const Pdate = prevDay.getDate();
  const Pday = prevDay.getDay();
  const Tdate = thisDay.getDate();
  const Tday = thisDay.getDay();
  const prevDates = [];
  const thisDates = [...Array(Tdate + 1).keys()].slice(1);
  const nextDates = [];

  document.querySelector(".year-month").textContent = `${viewYear}년 ${
    viewMonth + 1
  }월`;

  if (Pday !== 6) {
    for (let i = 0; i < Pday + 1; i++) {
      prevDates.unshift(Pdate - i);
    }
  }

  for (let i = 1; i < 7 - Tday; i++) {
    nextDates.push(i);
  }
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(Tdate);
  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

    dates[
      i
    ] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });

  document.querySelector(".dates").innerHTML = dates.join("");
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};

renderCalendar();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

const goToday = () => {
  date = new Date();
  renderCalendar();
};

/*store to localStorage*/
let conts = [];

let cont = {
  id: "",
  memos: "",
};

let arr = {};
let stored_arr = {};
let num = 0; // number of habits
let start_date = {};
$("#addbtn").click(function () {
  console.log($("#exampleFormControlTextarea1").val());
  if ($("#exampleFormControlTextarea1").val() == "") {
    alert("습관을 입력하세요!");
  } else {
    /*bring previous values*/
    num = localStorage.getItem("num");
    num++;
    localStorage.setItem("num", num);
    const today = new Date();

    let start_day = {
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate(),
    };
    start_date = JSON.parse(localStorage.getItem("start_date"));
    if (start_date == null) {
      start_date = {};
    }
    start_date[num] = start_day;

    localStorage.setItem("start_date", JSON.stringify(start_date));
    //console.log(localStorage.getItem("num"));
    arr = JSON.parse(localStorage.getItem("arr"));
    if (arr == null) {
      arr = {};
    }
    console.log(arr);
    //console.log(JSON.parse(localStorage.getItem("arr")));
    console.log(JSON.parse(localStorage.getItem("num")));
    arr[num] = $("#exampleFormControlTextarea1").val();

    cont.id = num;
    conts = JSON.parse(localStorage.getItem("memo"));
    if (conts === null || conts === "undefined" || conts === "") {
      conts = [];
      conts.push(cont);
    } else {
      conts.push(cont);
    }
    localStorage.setItem("memo", JSON.stringify(conts));
    localStorage.setItem("arr", JSON.stringify(arr));
    show();
  }

  //localStorage.setItem("arr2", JSON.stringify(arr));
  //console.log(JSON.parse(localStorage.getItem("arr")));
  //localStorage.setItem("arr2", JSON.stringify(arr));
  //stored_arr= JSON.parse(localStorage.getItem("arr2"));
  //console.log(stored_arr);
});
/*store to localStorage end*/

/*move pages*/
function movetomainpage() {
  location.href = "index.html";
}

function movetodetailpage_health() {
  localStorage.setItem("val", 1);
  location.href = "detail.html";
  //console.log(document.getElementById('recommend1').innerHTML );
  //document.getElementById('recommend1').innerHTML = "ja";
}

function movetodetailpage_study() {
  localStorage.setItem("val", 2);
  location.href = "detail.html";
}

function movetodetailpage_hobby() {
  localStorage.setItem("val", 3);
  console.log("hobby");
  location.href = "detail.html";
}

function movetodetailpage_emotion() {
  localStorage.setItem("val", 4);
  location.href = "detail.html";
}

function movetodetailpage_foryou() {
  localStorage.setItem("val", 5);
  location.href = "detail.html";
}

function movetoaddpage() {
  //  localStorage.setItem("val", 0);
  location.href = "add.html";
}

let term = 0;
let num_2 = 0;
let p_arr = {};
let p_stored_arr = {};
let s_arr = {};

/*choosing term*/
function sev_days() {
  console.log("7 days");
  term = 7;
  /*bring previous values*/
  num_2 = localStorage.getItem("num2");
  num_2++;
  localStorage.setItem("num2", num_2);

  p_arr = JSON.parse(localStorage.getItem("p_arr"));
  if (p_arr == null) {
    p_arr = {};
  }

  s_arr = JSON.parse(localStorage.getItem("s_arr"));
  if (s_arr == null) {
    s_arr = {};
  }
  today = new Date();
  s_arr[num_2] = today;
  console.log(s_arr[num_2]);
  localStorage.setItem("s_arr", JSON.stringify(s_arr));
  //console.log(p_arr);
  //console.log(JSON.parse(localStorage.getItem("num2")));
  p_arr[num_2] = term;
  console.log(p_arr[num_2]);
  localStorage.setItem("p_arr", JSON.stringify(p_arr));
}
function thr_days() {
  console.log("30 days");
  term = 30;
  console.log("7 days");
  /*bring previous values*/
  num_2 = localStorage.getItem("num2");
  num_2++;
  localStorage.setItem("num2", num_2);

  p_arr = JSON.parse(localStorage.getItem("p_arr"));
  if (p_arr == null) {
    p_arr = {};
  }
  /*store start date*/
  s_arr = JSON.parse(localStorage.getItem("s_arr"));
  if (s_arr == null) {
    s_arr = {};
  }
  today = new Date();
  s_arr[num_2] = today;
  console.log(s_arr[num_2]);
  localStorage.setItem("s_arr", JSON.stringify(s_arr));

  console.log(p_arr);
  console.log(JSON.parse(localStorage.getItem("num2")));
  p_arr[num_2] = term;
  console.log(p_arr[num_2]);
  localStorage.setItem("p_arr", JSON.stringify(p_arr));
}
function hun_days() {
  console.log("100 days");
  term = 100;
  console.log("7 days");
  /*bring previous values*/
  num_2 = localStorage.getItem("num2");
  num_2++;
  localStorage.setItem("num2", num_2);

  p_arr = JSON.parse(localStorage.getItem("p_arr"));
  if (p_arr == null) {
    p_arr = {};
  }
  /*store start date*/
  s_arr = JSON.parse(localStorage.getItem("s_arr"));
  if (s_arr == null) {
    s_arr = {};
  }
  today = new Date();
  s_arr[num_2] = today;
  console.log(s_arr[num_2]);
  localStorage.setItem("s_arr", JSON.stringify(s_arr));

  console.log(p_arr);
  console.log(JSON.parse(localStorage.getItem("num2")));
  p_arr[num_2] = term;
  console.log(p_arr[num_2]);
  localStorage.setItem("p_arr", JSON.stringify(p_arr));
}
