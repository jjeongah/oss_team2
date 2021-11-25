let stored_arr = {};
let num_called;

function movetomainpage() {
  location.href = "index.html";
}

function movetotodaypage() {
  location.href = "today.html";
}

function movetorewardpage() {
  location.href = "reward.html";
}

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
        console.log(stored + " selected!");
        contentChild.css = { color: "blue" };
      });
      document.getElementById("temp").appendChild(contentChild);
    }
    //document.getElementById('li1').innerHTML = stored_arr[num_called];

    //document.querySelectorAll(".habit").forEach((p) => {
    //  p.addEventListener("click", (p) => {
    //    console.log($(this) + " selected!");
    //  });
    //});
  }
});
