let stored_arr = {};
let num_called;

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
      contentChild.addEventListener("click", () => {
        console.log(stored + " selected!");
      });
      document.getElementById("temp").appendChild(contentChild);
    }
    //document.getElementById('li1').innerHTML = stored_arr[num_called];
  }
});
