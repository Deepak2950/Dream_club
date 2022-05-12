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
    "Kengeri Sports Club",
    "website1",
    "Kengeri, Bangalore",
    "../../img/profile/club1_logo.jpeg",
    "A student organization recognized by the Physical Education and Athletic Department. Formed by individuals with common interests to participate in a sport activity. Governed by same rules and regulations as all student organizations.",
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
        getPlayer(
          "Karan",
          "18",
          "Goalkeeper",
          "./../../img/profile/football_profile.png"
        ),
        getPlayer(
          "Kunal",
          "20",
          "Centre half back",
          "./../../img/profile/football_profile2.png"
        ),
      ]),
    ]
  ),
  getClubJson(
    "Builders Club",
    "website2",
    "Hebbal, Bangalore, Karnataka",
    "../../img/profile/club_logo2.jpeg",
    "a registered student organization that exists to promote and develop interest in a particular sport or physical activity",
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
    "Yalahanka Champions Club",
    "website3",
    "Yalhanka, Bangalore, Karnataka",
    "../../img/profile/club_logo3.jpeg",
    "Establishments primarily engaged in operating and promoting professional and semiprofessional athletic clubs; promoting athletic events, including amateur; and managing individual professional athletes",
    [
      getVacancy("Football", 2),
      getVacancy("Kabbaddi", 4),
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
    "Jayanagar Blasters",
    "website4",
    "Jayanagar, Bangalore, Karnataka",
    "../../img/profile/club_logo5.png",
    "Good Sports helps clubs build a welcoming, family-friendly environment – so you can attract more members. Good Sports will keep you updated on current funding opportunities and give you tips on how to write a winning grant application. In fact, funders often look favourably at Good Sports clubs.",
    [
      getVacancy("Volleyball", 2),
      getVacancy("Badminton", 3),
      getVacancy("Cricket", 3),
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
