function copyToClipBoard(copyText) {
  document.addEventListener(
    "copy",
    function (e) {
      e.clipboardData.setData("text/plain", copyText);
      e.preventDefault();
    },
    true
  );

  document.execCommand("copy");
}

function getVacancyContentAsHtml(vacancy) {
  let vacancyFull = "";
  for (var i = 0; i < vacancy.length; i++) {
    var vacancyContent = `<button type="button" class="btn btn-secondary mx-1">
                    ${vacancy[i].sport}
                    <span class="badge bg-primary text-light mx-2 my-1">${vacancy[i].nVacancy}</span>
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
    <div class="card mt-5 mx-auto" style="max-width: 80%; background-color: rgb(167, 173, 168);">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3 my-auto px-3">
          <img
            src="${clubImage}"
            class="img-fluid rounded-circle mx-auto my-auto d-block"
            alt="Club logo"
            style="max-width: 100px"
          />
            <button class="mt-3 btn btn-primary btn-sm d-flex mx-auto text-light">View Club</button>
            <button class="mt-3 btn btn-primary btn-sm d-flex mx-auto text-light">Visit Website</button>
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h3 class="card-title my-3">${clubName}</h3>
            <h6 class="card-title pt-2">Address</h6>
            <p>
              ${clubAddress}
            </p>
            <h6 class="card-title pt-2">Description</h6>
            <p>
              ${clubAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- card footer -->
    <div class="card-footer">
      <div class="accordion" id="vacancy_accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="vacancy_head">
            <button
              class="accordion-button collapsed text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVacancy${index}"
              aria-expanded="true"
              aria-controls="collapseVacancy${index}"
              style="background-color: rgb(118, 122, 118);"
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
            <div class="accordion-body" style="background-color: rgb(167, 173, 168);">
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

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
};
