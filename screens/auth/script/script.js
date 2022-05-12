function handleTabClick() {
  const registerAs = document.getElementById("register-as");
  let playerTab = document.getElementById("player-tab");
  let managerTab = document.getElementById("member-tab");
  console.log(playerTab.classList);

  if (playerTab.classList.contains("active")) {
    registerAs.innerHTML = "Register as Player";
    playerTab.classList.add("text-dark");
    playerTab.classList.remove("text-light");
  } else {
    playerTab.classList.add("text-light");
    playerTab.classList.remove("text-dark");
  }

  if (managerTab.classList.contains("active")) {
    registerAs.innerHTML = "Register as Manager";
    managerTab.classList.add("text-dark");
    managerTab.classList.remove("text-light");
  } else {
    managerTab.classList.add("text-light");
    managerTab.classList.remove("text-dark");
  }
}

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function handleAuthLogin(form) {
  const email = form.email.value;
  const password = form.password.value;

  if (!isValidEmail(email)) {
    alert("Please enter valid email");
  } else if (!password) {
    alert("Please enter password");
  } else if (email === "manager@gmail.com") {
    window.location.pathname = "/screens/dashboard/manager-dashboard.html";
  } else if (email === "player@gmail.com") {
    window.location.pathname = "/screens/dashboard/player-dashboard.html";
  } else {
    alert("Email is not registered");
  }
}

function handleAuthSignUp() {
  console.log("Sign up");
  let playerTab = document.getElementById("player-tab");
  let managerTab = document.getElementById("member-tab");

  if (playerTab.classList.contains("active")) {
    window.location.pathname = "/screens/dashboard/player-dashboard.html";
  }
  if (managerTab.classList.contains("active")) {
    window.location.pathname = "/screens/dashboard/manager-dashboard.html";
  }
}
