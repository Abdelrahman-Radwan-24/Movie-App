/// <reference types="../../@types/jquery"/>

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");
const repasswordInput = document.getElementById("repassword");
const btnSubmit = document.getElementById("btn-submit");
const form = document.querySelector("form");
const gridData = document.getElementById("gridData");
const searchInput = document.querySelector("input[type='search']");
const heightWindow = $(window).outerHeight(true);
const arrowUp = $(".arrow-up");

// *?==========> aside *

$("aside ul").fadeOut();
function openSideBar() {
  $("aside").animate({ left: "0px" }, 700, () => {
    $("aside ul").fadeIn(300);
  });
  $(".open-close-icon").addClass("fa-x");
}

function closeSideBar() {
  $("aside").animate({ left: "-280px" }, 700);
  $("aside ul").fadeOut(300);

  $(".open-close-icon").removeClass("fa-x");
}

$(".open-close-icon").on("click", () => {
  if ($("aside").css("left") === "-280px") {
    openSideBar();
  } else {
    closeSideBar();
  }
});

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    closeSideBar();
  });
});

function checkWidth() {
  if ($(window).width() < 990) {
    $(".sideNav img").css("opacity", "0");
    $(".sideNav").css("backgroundColor", "transparent");
    $(".sideNav").css("transition", "1s");
    $(".sideNav .icons").css("opacity", "0");
    $(".open-close-icon").css("color", "white");
  } else {
    $(".sideNav img").css("opacity", "1");
    $(".sideNav").css("backgroundColor", "white");
    $(".sideNav .icons").css("opacity", "1");
    $(".open-close-icon").css("color", "black");
  }
}

checkWidth();
$(window).resize(checkWidth);

// *?==========> aside *

// *?==========> contact us *

form.addEventListener("submit", function (e) {
  if (!validatonsInputs()) {
    e.preventDefault();
  }
});

form.addEventListener("input", () => {
  validatonsInputs();
});

function validatonsInputs() {
  if (
    nameValidation() &&
    emailValidation() &&
    numberValidation() &&
    ageValidation() &&
    passwordValidation() &&
    rePasswordValidation()
  ) {
    btnSubmit.style.backgroundColor = "#000";
    btnSubmit.style.color = "#fff";
    btnSubmit.classList.remove("animate__animated", "animate__shakeX");
    return true;
  } else {
    btnSubmit.style.backgroundColor = "red";
    btnSubmit.style.color = "#fff";
    btnSubmit.classList.add("animate__animated", "animate__shakeX");
    return false;
  }
}

function nameValidation() {
  let regex = /^[a-zA-Z ]+$/gi;
  if (regex.test(nameInput.value)) {
    document.getElementById("errorName").classList.add("hidden");
    nameInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorName").classList.remove("hidden");
    nameInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

function emailValidation() {
  let regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (regex.test(emailInput.value)) {
    document.getElementById("errorEmail").classList.add("hidden");
    emailInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorEmail").classList.remove("hidden");
    emailInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

function numberValidation() {
  let regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (regex.test(numberInput.value)) {
    document.getElementById("errorNumber").classList.add("hidden");
    numberInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorNumber").classList.remove("hidden");
    numberInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

function ageValidation() {
  let regex = /^([1-7][0-9]|80)$/;
  if (regex.test(ageInput.value)) {
    document.getElementById("errorAge").classList.add("hidden");
    ageInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorAge").classList.remove("hidden");
    ageInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

function passwordValidation() {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(passwordInput.value)) {
    document.getElementById("errorPassword").classList.add("hidden");
    passwordInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorPassword").classList.remove("hidden");
    passwordInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

function rePasswordValidation() {
  if (repasswordInput.value == passwordInput.value) {
    document.getElementById("errorRepassword").classList.add("hidden");
    repasswordInput.style.borderColor = "#fff";
    return true;
  } else {
    document.getElementById("errorRepassword").classList.remove("hidden");
    repasswordInput.style.borderColor = "rgb(214, 46, 51)";
    return false;
  }
}

$(passwordInput).on("focus", () => {
  $(".icon-eye").animate({ opacity: "1", bottom: "33px" }, 500);
});

$(passwordInput).on("blur", function () {
  setTimeout(() => {
    if (!$(document.activeElement).is(".icon-eye")) {
      $(".icon-eye").animate({ opacity: "0", bottom: "-20px" }, 500);
    }
  }, 0);
});

$(".icon-eye").on("mousedown", function (e) {
  e.preventDefault();
});

$(repasswordInput).on("focus", () => {
  $(".icon-re-eye").animate({ opacity: "1", bottom: "33px" }, 500);
});

$(repasswordInput).on("blur", function () {
  setTimeout(() => {
    if (!$(document.activeElement).is(".icon-re-eye")) {
      $(".icon-re-eye").animate({ opacity: "0", bottom: "-20px" }, 500);
    }
  }, 0);
});

$(".icon-re-eye").on("mousedown", function (e) {
  e.preventDefault();
});

$(".icon-eye").on("click", function () {
  if ($(".icon-eye").hasClass("fa-eye-slash")) {
    $(".icon-eye").removeClass("fa-eye-slash").addClass("fa-eye");
    $(passwordInput).attr("type", "text");
  } else {
    $(".icon-eye").removeClass("fa-eye").addClass("fa-eye-slash");
    $(passwordInput).attr("type", "password");
  }
});

$(".icon-re-eye").on("click", function () {
  if ($(".icon-re-eye").hasClass("fa-eye-slash")) {
    $(".icon-re-eye").removeClass("fa-eye-slash").addClass("fa-eye");
    $(repasswordInput).attr("type", "text");
  } else {
    $(".icon-re-eye").removeClass("fa-eye").addClass("fa-eye-slash");
    $(repasswordInput).attr("type", "password");
  }
});

// *?==========> contact us *

// *?==========> NowPlaying *

async function getNowPlaying() {
  const api = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e6fc538c9eaceb0cb799142f59a9bc61"
  );
  const response = await api.json();
  displayData(response.results);
}

getNowPlaying();

function displayData(data) {
  let dataBox = ``;
  for (let i = 0; i < data.length; i++) {
    const starsCount = Math.floor(data[i].vote_average / 2);
    const halfStar = (data[i].vote_average / 2) % 1 >= 0.5;
    let starsHTML = ``;

    for (let j = 0; j < starsCount; j++) {
      starsHTML += `<i class="fa-solid fa-star" style="color: #ffd43b"></i>`;
    }

    if (halfStar) {
      starsHTML += `<i class="fa-solid fa-star-half-stroke" style="color: #ffd43b"></i>`;
    }

    dataBox += `
      <div
          class="card relative overflow-hidden animate__animated animate__fadeIn"
        >
          <img
            class="animate__animated animate__fadeIn w-full  transition duration-500"
            src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}"
            alt="${data[i].title}"
          />
          <div
            class="card-body absolute top-0 start-0 bottom-0 end-0 w-full h-full p-4 animate__animated animate__fadeIn opacity-0 invisible"
          >
            <h1
              class="text-center  text-4xl mb-2 animate__animated animate__slideOutLeft"
            >
              ${data[i].title ? data[i].title : ''}
            </h1>
            <p
              class="phara line-clamp-4 text-base text-justify mb-4 animate__animated animate__slideOutLeft"
            >
            ${data[i].overview}
            </p>
            <p class="date mb-4 animate__animated animate__slideOutLeft">
              <span>Release Date <span> : ${data[i].release_date}</span></span>
            </p>
            <h3 class="stars mb-2 animate__animated animate__slideOutLeft">
            ${starsHTML}
            </h3>
            <h3
              class="release-date mb-2 w-10 h-10 border border-green-600 rounded-full flex justify-center items-center animate__animated animate__slideOutLeft"
            >
              ${Number(data[i].vote_average.toFixed(1))} 
            </h3>
          </div>
        </div>
    `;
  }

  gridData.innerHTML = dataBox;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => mouseEnter(card));
    card.addEventListener("mouseleave", () => mouseLeave(card));
  });
}

function mouseEnter(card) {
  const img = card.querySelector("img");
  const cardBody = card.querySelector(".card-body");

  img.style.cssText = `
  transform:rotate(6deg) scale(1.25);
  filter: blur(4px);
  `;
  cardBody.style.cssText = `
  opacity : 1;
  visibility: visible;
  `;
  cardBody.querySelector("h1").classList.remove("animate__slideOutLeft");
  cardBody.querySelector("h1").classList.add("animate__fadeInDown");

  cardBody.querySelector(".phara").classList.remove("animate__slideOutLeft");
  cardBody.querySelector(".phara").classList.add("animate__flipInX");

  cardBody.querySelector(".date").classList.remove("animate__slideOutLeft");
  cardBody.querySelector(".date").classList.add("animate__fadeInUp");

  cardBody.querySelector(".stars").classList.remove("animate__slideOutLeft");
  cardBody.querySelector(".stars").classList.add("animate__fadeInUp");

  cardBody
    .querySelector(".release-date")
    .classList.remove("animate__slideOutLeft");
  cardBody.querySelector(".release-date").classList.add("animate__fadeInUp");
}

function mouseLeave(card) {
  const img = card.querySelector("img");
  const cardBody = card.querySelector(".card-body");

  img.style.cssText = `
  transform:rotate(unset) scale(unset);
  filter: blur(0);
  `;

  cardBody.querySelector("h1").classList.remove("animate__fadeInDown");
  cardBody.querySelector("h1").classList.add("animate__slideOutLeft");

  cardBody.querySelector(".phara").classList.remove("animate__flipInX");
  cardBody.querySelector(".phara").classList.add("animate__slideOutLeft");

  cardBody.querySelector(".date").classList.remove("animate__fadeInUp");
  cardBody.querySelector(".date").classList.add("animate__slideOutLeft");

  cardBody.querySelector(".stars").classList.remove("animate__fadeInUp");
  cardBody.querySelector(".stars").classList.add("animate__slideOutLeft");

  cardBody.querySelector(".release-date").classList.remove("animate__fadeInUp");
  cardBody
    .querySelector(".release-date")
    .classList.add("animate__slideOutLeft");
}

// *?==========>  NowPlaying *

// *?==========>  Popular *

async function getPopular() {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e6fc538c9eaceb0cb799142f59a9bc61`
  );
  const response = await api.json();
  displayData(response.results);
}

// *?==========>  Popular *

// *?==========>  TopRated *

async function getTopRated() {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=e6fc538c9eaceb0cb799142f59a9bc61`
  );
  const response = await api.json();
  displayData(response.results);
}

// *?==========>  TopRated *

// *?==========>  Trending *

async function getTrending() {
  const api = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=e6fc538c9eaceb0cb799142f59a9bc61`
  );
  const response = await api.json();
  displayData(response.results);
}

// *?==========>  Trending *

// *?==========>  Upcoming *

async function getUpcoming() {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e6fc538c9eaceb0cb799142f59a9bc61`
  );
  const response = await api.json();
  displayData(response.results);
}

// *?==========>  Upcoming *

// *?==========>  inputSearch *

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  searchMovies(query);
});

async function searchMovies(query) {
  if (!query) {
    gridData.innerHTML = getNowPlaying();
    return;
  }
  const api = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e6fc538c9eaceb0cb799142f59a9bc61&query=${encodeURIComponent(
      query
    )}`
  );
  const response = await api.json();
  displayData(response.results);
}

// *?==========>  inputSearch *

// *?==========>  arrowUp *

$(window).on("scroll", () => {
  if ($(window).scrollTop() > heightWindow) {
    arrowUp.fadeIn(500).css("display", "flex");
  } else {
    arrowUp.fadeOut(500);
  }
});

arrowUp.on("click", () => {
  $(window).scrollTop(0);
});

// *?==========>  arrowUp *

// *?==========>  loading *

(function () {
  $(".loading").fadeOut(2000, function () {
    $("body").css("overflow", "visible");
  });
})();

// *?==========>  loading *
