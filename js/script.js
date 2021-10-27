let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

let skillsSection = document.getElementById("row-2");
let progressBar = document.querySelectorAll(".bar");

function showProgress() {
  progressBar.forEach((progressBar) => {
    let value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBar.forEach((h3) => {
    h3.style.opacity = 0;
    h3.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  let sectionPos = skillsSection.getBoundingClientRect().top;
  let screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

function sendMail(params) {
  let temParams = {
    from_name: document.getElementById("from_name").value,
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_x2ag1e6","template_z2s8dqt", temParams)
  .then(function(res){
    console.log("sucess", res.status);
  })
}
