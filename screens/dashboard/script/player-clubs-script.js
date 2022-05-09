function getVacancy(sport, nVacancy) {
  return { sport, nVacancy };
}

function getClubJson(
  clubName,
  clubWebsite,
  clubAddress,
  clubImage,
  clubDescription,
  vacancy
) {
  return {
    clubName,
    clubWebsite,
    clubAddress,
    clubImage,
    clubDescription,
    vacancy,
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
    ]
  ),
  getClubJson(
    "club2",
    "website2",
    "address of club2",
    "./../../img/solid.png",
    "this is good club2",
    [getVacancy("Football", 2), getVacancy("Cricket", 3)]
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
    ]
  ),
];
