const form = document.querySelector("form");
const val = document.getElementById("val");
const btns = document.querySelectorAll(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

for (const btn of btns) {
  let btnValue = btn.value;
  if (["AC", "DE", "="].includes(btnValue)) {
    btn.style.color = "lime";
  }
  btn.addEventListener("click", () => {
    if (["AC", "DE", "="].includes(btnValue)) {
      if (btnValue === "AC") {
        val.value = "0";
      } else if (btnValue === "DE") {
        val.value = val.value.slice(0, -1);

        if (val.value == "") {
          val.value = "0";
        }
      } else if (btnValue === "=") {
        val.value = eval(val.value);
      }
    } else {
      if (val.value === "0") {
        val.value = btnValue;
      } else {
        val.value += btnValue;
      }
    }
  });
}
