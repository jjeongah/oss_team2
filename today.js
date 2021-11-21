let memos = [];
let rewards = [];

function movetomanagepage() {
  location.href = "manage.html";
}

let todaySubmit = document.querySelector("#submitT");

todaySubmit.addEventListener("click", () => {
  let input = document.querySelector("#memo");
  let memo = {
    sbId: sbId, //관리하기에서 어떤 습관인지 알 수 있게 각 습관별 id필요할듯
    day: day, //나중에 스티커판이랑 연계해서 추가 로드 시 당일 내용 #memo에 적어주기
    value: input.value,
  };
  memos.push(memo);
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
