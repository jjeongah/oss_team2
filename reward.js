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
  setReDay(days);

  stored_arr = JSON.parse(localStorage.getItem("arr"));
  let setHead = document.getElementById("heading");
  setHead.innerText = stored_arr[ss];

  conts = JSON.parse(localStorage.getItem("memo")); //메모에 넣은 conts가져오기
  conts.forEach((p) => {
    //가져온 conts 돌면서 id가 selected와 같은 요소 찾고, 반환
    if (p.id === selected) {
      cont = p;
      setEmo(cont);
      setReText(cont);
    }
  });
});

function movetomanagepage() {
  location.href = "manage.html";
  localStorage.removeItem("selected");
}

let rewardSubmit = document.querySelector("#submitR");
rewardSubmit.addEventListener("click", () => {
  let inputR = document.querySelector("#rewardContent");
  cont.memos.reward = inputR.value;
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

function setEmo(cont) {
  let setEmoIn;
  for (let k = 1; k < 8; k++) {
    setEmoIn = document.getElementById("d_" + `${k}`);
    setEmoIn.innerHTML = cont.memos.emo["e" + `${k}`];
  }
}

function setReText(cont) {
  let textAr = document.querySelector("#rewardContent");
  textAr.innerText = cont.memos.reward;
}

function setReDay(days) {
  for (const [ke, val] of Object.entries(days)) {
    if (ke === selected) {
      let stFillDay = new Date(val["year"], val["month"], val["date"]);
      stFillDay.setDate(stFillDay.getDate());

      if (stFillDay.getDate() + 7 - today.getDate() <= 0) {
        document.getElementById("dayday").innerHTML =
          stFillDay.getDate() - stFillDay.getDate();
      } else {
        document.getElementById("dayday").innerHTML =
          stFillDay.getDate() + 7 - today.getDate();
      }

      document.getElementById("day_1").innerHTML = stFillDay.getDate();
      for (let i = 2; i < 8; i++) {
        stFillDay.setDate(stFillDay.getDate() + 1);
        document.getElementById("day_" + `${i}`).innerHTML =
          stFillDay.getDate();
      }
    }
  }
}
