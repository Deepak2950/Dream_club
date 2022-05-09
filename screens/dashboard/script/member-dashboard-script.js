function removeActiveClassFromPlayerTabs() {
  const playerCardList = document
    .getElementById("player-card-list")
    .getElementsByTagName("a");
  console.log(playerCardList.length);
  for (let i = 0; i < playerCardList.length; i++) {
    const aTag = playerCardList.item(i);

    if (aTag.classList.contains("active")) {
      aTag.classList.remove("active");
    }
  }
}

function handlePlayerTabChange(tab) {
  removeActiveClassFromPlayerTabs();
}

function addOnClickToPlayerTabs() {
  const playerCardList = document
    .getElementById("player-card-list")
    .getElementsByTagName("li");

  for (let i = 0; i < playerCardList.length; i++) {
    const item = playerCardList.item(i);
    item.setAttribute("onclick", "handlePlayerTabChange(this)");
  }
}

window.onload = function () {
  addOnClickToPlayerTabs();
};
