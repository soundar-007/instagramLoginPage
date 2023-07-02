const input_2 = document.querySelector(".input-2");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  input_2.getAttribute("type") === "password"
    ? input_2.setAttribute("type", "text")
    : input_2.setAttribute("type", "password");

  if (input_2.getAttribute("type") == "text") {
    icon.innerHTML = `<i class="fi fi-rr-eye"></i>`;
  } else {
    icon.innerHTML = ` <i class="fi fi-bs-eye-crossed"></i>`;
  }
});
