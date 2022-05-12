function getVacancy(sport, nVacancy) {
  return { sport, nVacancy };
}

function getPlayer(name, age, role, pImage) {
  return { name, age, role, pImage };
}

function getSports(name, players) {
  return { name, players };
}

function getClubByClubName(clubName) {
  return clubs.find((club) => {
    return club.clubName == clubName;
  });
}

function getClubJson(
  clubName,
  clubWebsite,
  clubAddress,
  clubImage,
  clubDescription,
  vacancy,
  sports
) {
  return {
    clubName,
    clubWebsite,
    clubAddress,
    clubImage,
    clubDescription,
    vacancy,
    sports,
  };
}

let clubs = [
  getClubJson(
    "club1",
    "website1",
    "address of club1",
    "./../../img/solid.png",
    "this is good club1",
    [
      getVacancy("Football", 9),
      getVacancy("Golf", 12),
      getVacancy("Cricket", 3),
    ],
    [
      getSports("Cricket", [
        getPlayer(
          "Akshar",
          "18",
          "Batsman",
          "./../../img/profile/cricket/cricket_profile.jpg"
        ),
        getPlayer(
          "Harish",
          "20",
          "Bowler",
          "./../../img/profile/cricket/bowler.webp"
        ),
        getPlayer(
          "Raj",
          "17",
          "Batsman",
          "./../../img/profile/cricket/cricket_profile3.jpeg"
        ),
        getPlayer(
          "Dinesh",
          "16",
          "All Rounder",
          "./../../img/profile/cricket/cricket_profile2.jpg"
        ),
        getPlayer(
          "Anuj",
          "23",
          "Bowler",
          "./../../img/profile/cricket/bowler2.jpeg"
        ),
        getPlayer(
          "Siddarth",
          "18",
          "Wicket Keeper",
          "./../../img/profile/cricket/cricket_profile4.jpeg"
        ),
      ]),
      getSports("Football", [
        getPlayer("player1ff", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1ff", "18", "Role2", "./../../img/solid.png"),
      ]),
    ]
  ),
  getClubJson(
    "club2",
    "website2",
    "address of club2",
    "./../../img/solid.png",
    "this is good club2",
    [getVacancy("Football", 2), getVacancy("Cricket", 3)],
    [
      getSports("Cricket", [
        getPlayer("player1ccc", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1ccc", "18", "Role2", "./../../img/solid.png"),
      ]),
      getSports("Football", [
        getPlayer("player1", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role2", "./../../img/solid.png"),
      ]),
    ]
  ),
  getClubJson(
    "club3",
    "website3",
    "address of club3",
    "./../../img/solid.png",
    "this is good club3",
    [
      getVacancy("Football", 2),
      getVacancy("Golf", 12),
      getVacancy("Cricket", 3),
    ],
    [
      getSports("Cricket", [
        getPlayer("player1ccscww", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1cwcwcwc", "18", "Role2", "./../../img/solid.png"),
      ]),
      getSports("Football", [
        getPlayer("player1", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role2", "./../../img/solid.png"),
      ]),
    ]
  ),
  getClubJson(
    "club4",
    "website4",
    "address of club4",
    "./../../img/solid.png",
    "this is good club4",
    [
      getVacancy("Football", 2),
      getVacancy("Golf", 12),
      getVacancy("Cricket", 3110),
    ],
    [
      getSports("Cricket", [
        getPlayer("player1", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role2", "./../../img/solid.png"),
      ]),
      getSports("Football", [
        getPlayer("player1", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role2", "./../../img/solid.png"),
      ]),
    ]
  ),
];
