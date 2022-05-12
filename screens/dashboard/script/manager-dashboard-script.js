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
  if (tab.dataset.index === -1) {
    return;
  }
  currentSportsIndex = tab.dataset.index;
  setClub();
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

///// GLOBAL DATA
let currentClubName = clubs[0].clubName;
let currentClub;
let currentSportsIndex = 0;

function setCurrentSports(sportName) {
  const club = getClubByClubName(currentClubName);
  if (club !== undefined) {
    getSportsByClub();
  }
}

///// DATA
function getClubPlayersAsHtml(players) {
  let content = "";
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const { name, age, role, pImage } = player;

    const cardContent = `
    <div class="card m-2 text-light" style="width: 200px; background-color: rgb(118, 122, 118); border-radius: 10px;" >
      <img
        class="img-responsive rounded-circle"
        src="${pImage}"
      />
      <h4>${name}</h4>
      <p>Age : ${age}</p>
      <p>Role : ${role}</p>
    </div>
    `;

    content = content + cardContent;
  }

  content =
    content +
    `
  <div class="card m-2 text-light" style="width: 200px; background-color: rgb(118, 122, 118); border-radius: 10px;" >
    <div class="my-auto">
      <h2>Add Player</h2>
      <i class="fa fa-plus-circle display-4" aria-hidden="true"></i>
    </div>
  </div>
  `;

  return `
  <div id="scroll" class="container">
    <div class="row">
      ${content}
    </div>
  </div>
  `;
}

function getClubTagsAsHtml(sports) {
  let content = "";
  for (let i = 0; i < sports.length; i++) {
    let liContent =
      sports[i].name == sports[currentSportsIndex].name
        ? `
    <li class="nav-item" data-index="${i}" >
      <a class="nav-link bg-dark text-light active" aria-current="page" href="#">${sports[i].name}</a>
    </li>
    `
        : `<li class="nav-item" data-index="${i}" >
    <a class="nav-link text-dark" aria-current="page" href="#">${sports[i].name}</a>
  </li>
  `;
    content = content + liContent;
  }

  content =
    content +
    `
  <li class="nav-item" data-index="-1" >
    <a class="mx-4 nav-link text-light bg-secondary" aria-current="page" href="#">
      Add
      <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
    </a>
  </li>
  `;

  return `
  <ul id="player-card-list" class="nav nav-tabs">
    ${content}
  </ul>
  `;
}

function getClubCardAsHtml(club) {
  const currentSports = club.sports[currentSportsIndex];

  const content = `
  <div class="card mt-5 pt-3 mx-auto " style="max-width: 80%; background-color: rgb(167, 173, 168);" >
      <div class="card-header">
        <h3>${club.clubName}</h3>
        <p class="mt-3">${club.clubDescription}</p>
      </div>
      <div class="card-body">
        ${getClubTagsAsHtml(club.sports)}
        <h5 class="card-title mt-4">Players: ${currentSports.name}</h5>
        <!-- scroll  -->
        ${getClubPlayersAsHtml(currentSports.players)}
      </div>
    </div>
  `;
  return content;
}

function setClub() {
  const clubCard = document.getElementById("club-card");

  const club = getClubByClubName(currentClubName);
  currentClub = club;

  const { clubName, clubAddress, clubImage, clubDescription, clubWebsite } =
    club;

  clubCard.innerHTML = getClubCardAsHtml(club);

  addOnClickToPlayerTabs();
}

window.onload = function () {
  setClub();
};
