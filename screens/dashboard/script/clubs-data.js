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
    "Kengeri Football Club",
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
        getPlayer("player1", "18", "Role1", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role2", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role3", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role4", "./../../img/solid.png"),
        getPlayer("player1", "18", "Role5", "./../../img/solid.png"),
        getPlayer("player1", "118", "Role6", "./../../img/solid.png"),
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
