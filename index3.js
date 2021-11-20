window.addEventListener("load", () => {
  console.log("index3 js");
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

function movetodetailpage(){
  location.href = "detail.html";
}

function movetoaddpage(){
  location.href = "add.html";
}
