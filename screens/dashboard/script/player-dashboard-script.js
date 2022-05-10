function getVacancyContentAsHtml(vacancy) {
  let vacancyFull = "";
  for (var i = 0; i < vacancy.length; i++) {
    var vacancyContent = `<button type="button" class="btn btn-secondary mx-1">
                    ${vacancy[i].sport}
                    <span class="badge bg-light text-dark">${vacancy[i].nVacancy}</span>
                  </button>`;
    vacancyFull = vacancyFull + vacancyContent;
  }
  return vacancyFull;
}

function getClubCardAsHtml(
  clubName,
  clubWebsite,
  clubAddress,
  clubImage,
  clubDescription,
  vacancy,
  index
) {
  const vacancyFull = getVacancyContentAsHtml(vacancy);

  console.log(vacancyFull);

  const content = `
    <div class="card mt-5 mx-auto" style="max-width: 80%">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2" style="background-color: ">
          <img
            src="${clubImage}"
            class="img-fluid rounded-circle mx-auto my-auto d-block"
            alt="Club logo"
            style="max-width: 100px"
          />
          <button class="mt-3 btn btn-secondary btn-sm d-flex mx-auto">View Club</button>
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">${clubName}</h5>
            <a class="card-title">${clubWebsite}</a>
            <h6 class="card-title pt-2">Address</h6>
            <p>
              ${clubAddress}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <p class="card-text">
            ${clubDescription}
        </p>
      </div>
    </div>
    <!-- card footer -->
    <div class="card-footer">
      <div class="accordion" id="vacancy_accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="vacancy_head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVacancy${index}"
              aria-expanded="true"
              aria-controls="collapseVacancy${index}"
            >
              Vacancy
            </button>
          </h2>
          <div
            id="collapseVacancy${index}"
            class="accordion-collapse collapse"
            aria-labelledby="vacancy_head"
            data-bs-parent="#vacancy_accordion"
          >
            <div class="accordion-body">
             ${vacancyFull} 
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card body end  -->
  </div>
    `;

  return content;
}

function setClubs() {
  const clubsSection = document.getElementById("clubs-section");
  let clubsSectionContent = "";

  for (let index = 0; index < clubs.length; index++) {
    const currentClub = clubs[index];

    const cardHTML = getClubCardAsHtml(
      currentClub.clubName,
      currentClub.clubWebsite,
      currentClub.clubAddress,
      currentClub.clubImage,
      currentClub.clubDescription,
      currentClub.vacancy,
      index
    );
    clubsSectionContent = clubsSectionContent + cardHTML;
  }

  clubsSection.innerHTML = clubsSectionContent;
}

window.onload = function () {
  setClubs();
};