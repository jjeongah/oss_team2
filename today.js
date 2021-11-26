/*functions for popup start*/
function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector("#enterbtn").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);

function movetomainpage(){
  location.href = "index.html";
}

let conts = [];
let rewards = [];
let days = [];
let emolists = [];
let selected;
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 0;
let dat = today.getDate();
let stored_arr = {};

let emolist = {
  e1: "",
  e2: "",
  e3: "",
  e4: "",
  e5: "",
  e6: "",
  e7: "",
};

let memo = {
  emo: emolist, //나중에 스티커판이랑 연계해서 추가 로드 시 당일 내용 #memo에 적어주기
  value: "",
  reward: "",
};

let cont = {
  id: selected,
  memos: memo,
};

window.addEventListener("load", () => {
  selected = localStorage.getItem("selected");
  let ss = JSON.parse(selected);
  days = JSON.parse(localStorage.getItem("start_date"));
  setDay(days);

  stored_arr = JSON.parse(localStorage.getItem("arr"));
  let setHead = document.getElementById("heading");
  setHead.innerText = stored_arr[ss];

  //stored_arr.forEach((s) => {
  //  ss = s.key(JSON.parse(localStorage.getItem("start_date")));
  //  console.log(ss);
  //});

  conts = JSON.parse(localStorage.getItem("memo")); //메모에 넣은 conts가져오기
  conts.forEach((p) => {
    //가져온 conts 돌면서 id가 selected와 같은 요소 찾고, 반환
    if (p.id === selected) {
      cont = p;
      setEmo(cont);
      setText(cont);
    }
  });
});

function movetomanagepage() {
  location.href = "manage.html";
  localStorage.removeItem("selected");
}

document.querySelectorAll(".feel").forEach((feel) => {
  feel.addEventListener("click", (feel) => {
    for (const [key, value] of Object.entries(days)) {
      if (key === selected) {
        let stDay = new Date(value["year"], value["month"], value["date"]);
        let endDay = new Date(year, month, dat);
        let btMs = endDay.getTime() - stDay.getTime();
        let btDay = btMs / (1000 * 60 * 60 * 24);
        let emoIn;

        switch (btDay) {
          case 0:
            emoIn = document.getElementById("d_1");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e1 = feel.target.innerHTML;
            break;
          case 1:
            emoIn = document.getElementById("d_2");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e2 = feel.target.innerHTML;
            break;
          case 2:
            emoIn = document.getElementById("d_3");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e3 = feel.target.innerHTML;
            break;
          case 3:
            emoIn = document.getElementById("d_4");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e4 = feel.target.innerHTML;
            break;
          case 4:
            emoIn = document.getElementById("d_5");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e5 = feel.target.innerHTML;
            break;
          case 5:
            emoIn = document.getElementById("d_6");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e6 = feel.target.innerHTML;
            break;
          case 6:
            emoIn = document.getElementById("d_7");
            emoIn.innerHTML = feel.target.innerHTML;
            cont.memos.emo.e7 = feel.target.innerHTML;
            break;
          default:
            break;
        }
      }
    }
  });
});

let todaySubmit = document.querySelector("#submitT");

todaySubmit.addEventListener("click", () => {
  let input = document.querySelector("#memo");
  cont.memos.value = input.value;
  let check = 0;

  for (let j = 0; j < conts.length; j++) {
    if (conts[j].id === selected) {
      conts[j] = cont;
      check = 1;
      break;
    }
  }

  if (check === 0) {
    cont.id = selected;
    conts.push(cont);
    //그냥 push?
  }

  localStorage.setItem("memo", JSON.stringify(conts));
});

function setDay(days) {
  for (const [ke, val] of Object.entries(days)) {
    if (ke === selected) {
      //selected 설정된 습관 날짜 불러오기
      let stFillDay = new Date(val["year"], val["month"], val["date"]);
      stFillDay.setDate(stFillDay.getDate());
      document.getElementById("day_1").innerHTML = stFillDay.getDate();
      for (let i = 2; i < 8; i++) {
        stFillDay.setDate(stFillDay.getDate() + 1);
        document.getElementById("day_" + `${i}`).innerHTML =
          stFillDay.getDate();
      }
    }
  }
}

function setEmo(cont) {
  let setEmoIn;
  for (let k = 1; k < 8; k++) {
    setEmoIn = document.getElementById("d_" + `${k}`);
    setEmoIn.innerHTML = cont.memos.emo["e" + `${k}`];
  }
}

function setText(cont) {
  let textAr = document.querySelector("#memo");
  textAr.innerText = cont.memos.value;
}
