let stored_arr = {};
let num_called;

let conts = [];
let rewards = [];
let days = [];
let emolists = [];
let selected;
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 0;
let dat = today.getDate();

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

function movetomainpage() {
  location.href = "index.html";
}

function movetotodaypage() {
  location.href = "today.html";
}

function movetorewardpage() {
  location.href = "reward.html";
}

days = JSON.parse(localStorage.getItem("start_date"));

window.addEventListener("load", () => {
  stored_arr = JSON.parse(localStorage.getItem("arr"));
  num_called = localStorage.getItem("num");
  console.log(num_called);
  if (num_called > 0) {
    for (k = 1; k <= num_called; k++) {
      //$(".contents").append("<li>" + stored_arr[k] + "</li>");
      let contentChild = document.createElement("div");
      contentChild.className = "habit border p-2";
      contentChild.innerHTML = "<li>" + stored_arr[k] + "</li>";
      let stored = stored_arr[k];
      let storeNum = k;
      contentChild.addEventListener("click", () => {
        localStorage.removeItem("selected");
        localStorage.setItem("selected", storeNum);
        selected = localStorage.getItem("selected");
        let setHead = document.getElementById("heading");
        setHead.innerText = contentChild.innerText;
        //setHeading(stored_arr[k]);
        conts = JSON.parse(localStorage.getItem("memo"));
        let loadCheck = 0;
        conts.forEach((p) => {
          //가져온 conts 돌면서 id가 selected와 같은 요소 찾고, 반환
          if (p.id === selected) {
            cont = p;
            setEmo(cont);
            loadCheck = 1;
          }
        });
        if (loadCheck === 0) {
          setIniEmo();
        }
        setDay(days);
      });
      document.getElementById("temp").appendChild(contentChild);
    }
  }
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

function setIniEmo() {
  for (let k = 1; k < 8; k++) {
    setEmoIn = document.getElementById("d_" + `${k}`);
    setEmoIn.innerHTML = " ";
  }
}

function setHeading(stored_arr) {
  let setHead = document.getElementById("heading");
  setHead.innerText = stored_arr;
}
