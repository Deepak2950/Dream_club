function handleTabClick() {
  let playerTab = document.getElementById("player-tab");
  let memberTab = document.getElementById("member-tab");
  console.log(playerTab.classList);

  if (playerTab.classList.contains("active")) {
    playerTab.classList.add("text-dark");
    playerTab.classList.remove("text-light");
  } else {
    playerTab.classList.add("text-light");
    playerTab.classList.remove("text-dark");
  }

  if (memberTab.classList.contains("active")) {
    memberTab.classList.add("text-dark");
    memberTab.classList.remove("text-light");
  } else {
    memberTab.classList.add("text-light");
    memberTab.classList.remove("text-dark");
  }
}
