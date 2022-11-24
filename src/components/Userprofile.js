import React from "react";
import team1 from "../assets/img/team/team-1.jpg";

const Userprofile = () => {
  return (
    <>
      <section id="team" class="team">
        <div class="container">
          <div class="row gy-4">
            {/* this div can be repeated down */}
            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos-delay="100"
            >
              <div class="member">
                <div class="member-img">
                  <img src={team1} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="*">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="*">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="*">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="*">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </div>
            </div>
            {/* this div can be repeated  above*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Userprofile;
