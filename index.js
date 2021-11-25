
/*for calendar in main.html */
let date = new Date();
const renderCalendar = () => {
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
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(Tdate);
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  })
  document.querySelector('.dates').innerHTML = dates.join('');
  const today = new Date();
  // if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
  //   for (let date of document.querySelectorAll('.this')) {
  //     if (+date.innerText === today.getDate()) {
  //       date.classList.add('today');
  //       break;
  //     }
  //   }
  // }
  let stored_date = {};
  let span_choice = {};
  let num_called;
  stored_date = JSON.parse(localStorage.getItem("start_date"));
  span_choice = JSON.parse(localStorage.getItem("p_arr"));
  num_called = localStorage.getItem("num");
  
  for (let k=1; k<=num_called; k++){
    let current_month = stored_date[k].month;
    let current_year = stored_date[k].year;
    let current_date = stored_date[k].date;
    if (viewMonth === current_month && viewYear === current_year){
      for (let date of document.querySelectorAll('.this')) {
        
        if (+date.innerText >=current_date && +date.innerText <current_date+span_choice[k]){
          for (let j=0;j<span_choice[k];j++)
          date.classList.add('add_habbit');
        }
      }
    }
  
  }




}

renderCalendar();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}
/*for calendar in main.html end */

/*move pages*/
function movetoaddpage(){
  location.href = "add.html";
}

function movetomanagepage(){
  location.href = "manage.html";
}

function movetomainpage(){
  location.href = "index.html";
}

function movetotodaypage(){
  location.href = "today.html";
}

function movetorewardpage(){
  location.href = "reward.html";
}

let stored_arr = {};
let num_called;
window.addEventListener("load", () => {
  stored_arr= JSON.parse(localStorage.getItem("arr"));
  num_called = localStorage.getItem("num");
  console.log(num_called);
  if(num_called>0){
    for(k=1; k<=num_called; k++){
      $(".habits").append("<li>"+ stored_arr[k]+ "</li>");
    }
    //document.getElementById('li1').innerHTML = stored_arr[num_called];
  }
});
