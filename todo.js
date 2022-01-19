const form = document.querySelector("form");
const content = document.querySelector(".content");
const input = document.querySelector("input");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
            <div class="task">
            <span class="icon-star"></span>
            <p lang="ar" class="task-content"  > ${input.value} </p>
            <div class="motion">
                <span class="icon-trash"></span>
                <span class="icon-angry2"></span>
            </div>
          </div>
`;
  content.innerHTML += task;
  input.value="";
});
content.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon-angry2":
      eo.target.classList.add("dn");
      const love = `<span class="icon-heart"></span>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-content")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += love;

      break;
    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-content")[0]
        .classList.remove("finish");

      eo.target.parentElement
        .getElementsByClassName("icon-angry2")[0]
        .classList.remove("dn");
      eo.target.remove();
      break;
    case "icon-star":
  eo.target.classList.add("colored");
  content.prepend(eo.target.parentElement);
  break;
  case "icon-star colored":
    eo.target.classList.remove("colored");
    content.append(eo.target.parentElement);
    break;
  }
});
// const container=document.querySelector(".container");
// const title=document.querySelector(".title");
// container.addEventListener("click",(eo) => {

//       switch(eo.target.className){
//           case "btn btn-primary":
//               title.style.marginTop="10px";
//             title.innerText="primary"
//           break;
//           case "btn btn-secondary":
//             title.innerText="secondary"
//           break;
//           default:
//             title.innerText="error"
//               break;

//       }

// })
