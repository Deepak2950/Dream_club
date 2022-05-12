function setCustomFooter() {
  const content = `
    <!-- about us modal -->
<div
  class="modal fade"
  id="about-us-modal"
  tabindex="-1"
  aria-labelledby="about-us-modal-label"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="about-us-modal-label">
          About Dream Club
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col">
            <img
              src="./../../img/solid.png"
              class="img-fluid rounded-circle mx-auto my-auto d-block"
              alt="Club logo"
              style="max-width: 100px"
            />
          </div>
          <div class="col my-auto">
            <h5>Dream Club</h5>
          </div>
        </div>
        <div class="">
          <h3 class="mt-4">Team Members:</h3>
          <h6 class="mt-4">Deepak M B, MCA, RVCE</h6>
          <p>
            deepakmb.mca21@rvce.edu.in
            <span>
              <button
                id="deepak-email-btn"
                class="btn btn-sm btn-outline-primary mx-3"
                onclick="copyToClipBoard('deepakmb.mca21@rvce.edu.in')"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Copy"
              >
                <i class="fa-solid fa-copy"></i>
              </button>
            </span>
          </p>
          <h6 class="mt-4" id="deepak-email">Akash Punagin, MCA, RVCE</h6>
          <p>
            akashep.mca21@rvce.edu.in
            <span>
              <button
                id="akash-email-btn"
                class="btn btn-sm btn-outline-primary mx-3"
                onclick="copyToClipBoard('akashep.mca21@rvce.edu.in')"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-trigger="click"
                title="Copy"
              >
                <i class="fa-solid fa-copy"></i>
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- contact us modal -->
<div
  class="modal fade"
  id="contact-us-modal"
  tabindex="-1"
  aria-labelledby="contact-us-modal-label"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="contact-us-modal-label">
          Contact Dream Club Team
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"
              >Feedback</label
            >
            <textarea
              class="form-control"
              id="message-text"
              placeholder="Enter your feedback here"
              rows="6"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary btn-sm">Submit</button>
      </div>
    </div>
  </div>
</div>

<footer class="footer-basic">
  <div class="social">
    <a href="#"><i class="icon ion-social-facebook"></i></a>
    <a href="#"><i class="icon ion-social-instagram"></i></a>
    <a href="#"><i class="icon ion-social-twitter"></i></a>
  </div>
  <ul class="list-inline">
    <li class="list-inline-item">
      <a href="#" data-bs-toggle="modal" data-bs-target="#about-us-modal"
        >About Us</a
      >
    </li>
    <li class="list-inline-item">
      <a href="#" data-bs-toggle="modal" data-bs-target="#contact-us-modal"
        >Contact Us</a
      >
    </li>
  </ul>
  <p class="copyright">Dream Club © 2022</p>
</footer>
    `;

  document.getElementById("custom-footer").innerHTML = content;
}
setCustomFooter();
