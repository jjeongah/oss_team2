let memos = [];
let rewards = [];
let days = [];
let selected;
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 0;
let dat = today.getDate();

const emoList = {
  laugh: "&#128518",
  sad: "&#128557",
  angry: "&#128545",
  mental: "&#128561",
  proud: "&#128526",
  happy: "&#129392",
};

window.addEventListener("load", () => {
  selected = localStorage.getItem("selected");
  days = JSON.parse(localStorage.getItem("start_date"));
  console.log(days);
  memos = JSON.parse.localStorage.getItem("memo");
});

function movetomanagepage() {
  location.href = "manage.html";
  localStorage.removeItem("selected");
}

document.querySelectorAll(".feel").forEach((feel) => {
  feel.addEventListener("click", (feel) => {
    for (const [key, value] of Object.entries(days)) {
      if (key === selected) {
        value["year"];
        let stDay = new Date(value["year"], value["month"], value["date"]);
        let endDay = new Date(year, month, dat);
        let btMs = endDay.getTime() - stDay.getTime();
        let btDay = btMs / (1000 * 60 * 60 * 24);
        let emoIn;
        switch (btDay) {
          case 0:
            emoIn = document.getElementById("d_1");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 1:
            emoIn = document.getElementById("d_2");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 2:
            emoIn = document.getElementById("d_3");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 3:
            emoIn = document.getElementById("d_4");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 4:
            emoIn = document.getElementById("d_5");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 5:
            emoIn = document.getElementById("d_6");
            emoIn.innerHTML = feel.target.innerHTML;
            break;
          case 6:
            emoIn = document.getElementById("d_7");
            emoIn.innerHTML = feel.target.innerHTML;
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
  let memo = {
    sbId: selected, //관리하기에서 어떤 습관인지 알 수 있게 각 습관별 id필요할듯
    day: day, //나중에 스티커판이랑 연계해서 추가 로드 시 당일 내용 #memo에 적어주기
    value: input.value,
  };
  memos.forEach((m) => {
    if (m.day == memo.day) {
    }
  });
  memos.push(memo);
  localStorage.setItem("memo", JSON.stringify(memos));
});

let rewardSubmit = document.querySelector("#submitR");
rewardSubmit.addEventListener("click", () => {
  let inputR = document.querySelector("#rewardContent");
  let reward = {
    sbId: sbId,
    day: day, //나중에 스티커판이랑 연계해서 추가 로드 시 당일 내용 #memo에 적어주기
    value: inputR.value,
  };
  rewards.push(reward);
});
