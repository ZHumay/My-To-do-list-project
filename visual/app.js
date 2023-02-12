const button = document.querySelector(".fa-solid");
const input = document.querySelector(".notlar");
const form = document.querySelector(".form2");
const clear = document.querySelector(".cleardiv");
const clearbtn = document.querySelector(".clear");
button.addEventListener("click", createNot);

function createNot(e) {
  e.preventDefault();
  let newInput = document.createElement("div");
  newInput.style.backgroundColor = "white";
  newInput.style.width = "505px";
  newInput.style.height = "30px";
  newInput.style.marginBottom = "30px";
  newInput.style.fontStyle = "italic ";
  newInput.style.fontFamily = "'Barlow', sans-serif";
  newInput.innerHTML = ` ${input.value} <div class="seclogo2"><i class="fa-regular fa-square-check"></i></div> 
   <div class="seclogo"> <i class="fa-regular fa-trash-can"></i>   </div> `;
  form.append(newInput);

  const check = document.querySelectorAll(".fa-square-check");
  const remove = document.querySelectorAll(".fa-trash-can");

  for (i = 0; i < check.length; i++) {
    check[i].onclick = function (e) {
      e.target.parentElement.parentElement.style.backgroundColor = "#CCF7B4";
      e.target.parentElement.parentElement.style.textDecoration = "line-through";
      e.target.parentElement.parentElement.style.opacity="0.5"
    };
    remove[i].onclick = function (e) {
      e.target.parentElement.previousElementSibling.parentElement.remove();
    };
  }
  clear.style.display = "block";
  clear.style.display = "flex";
  clear.style.justifyContent = "center";
  clear.style.alignItems = "center";

  clearbtn.addEventListener("click", function (e) {
    form.innerHTML = "";
    clear.style.display = "none";
  });
}
