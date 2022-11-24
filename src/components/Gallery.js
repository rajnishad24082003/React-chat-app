import React, { useState } from "react";
import portfolio1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/img/portfolio/portfolio-6.jpg";
import portfolio7 from "../assets/img/portfolio/portfolio-7.jpg";
import portfolio8 from "../assets/img/portfolio/portfolio-8.jpg";
import portfolio9 from "../assets/img/portfolio/portfolio-9.jpg";

function Gallery() {
  let [filterIcon, setFilterIcon] = useState(["filter-active", "", "", ""]);

  let [filterWeb, setfilterWeb] = useState("flex");
  let [filterApp, setfilterApp] = useState("flex");
  let [filterCard, setfilterCard] = useState("flex");

  let filterIconfun = (i) => {
    setFilterIcon(
      filterIcon.map((val, index) => {
        if (index === i) {
          if (index === 0) {
            setfilterCard("flex");
            setfilterWeb("flex");
            setfilterApp("flex");
          }
          if (index === 1) {
            setfilterCard("none");
            setfilterWeb("none");
            setfilterApp("flex");
          }
          if (index === 2) {
            setfilterApp("none");
            setfilterWeb("none");
            setfilterCard("flex");
          }
          if (index === 3) {
            setfilterApp("none");
            setfilterCard("none");
            setfilterWeb("flex");
          }
          return "filter-active";
        } else {
          return "";
        }
      })
    );
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <header className="section-header">
            <h2>Portfolio</h2>
            <p>Check our latest work</p>
          </header>

          <div className="row" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className={`${filterIcon[0]}`}
                  onClick={() => {
                    filterIconfun(0);
                  }}
                >
                  All
                </li>
                <li
                  data-filter=".filter-app"
                  className={`${filterIcon[1]}`}
                  onClick={() => {
                    filterIconfun(1);
                  }}
                >
                  App
                </li>
                <li
                  data-filter=".filter-card"
                  className={`${filterIcon[2]}`}
                  onClick={() => {
                    filterIconfun(2);
                  }}
                >
                  Card
                </li>
                <li
                  data-filter=".filter-web"
                  className={`${filterIcon[3]}`}
                  onClick={() => {
                    filterIconfun(3);
                  }}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>

          <div className="row gy-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ display: `${filterApp}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio1}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="App 1"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{ display: `${filterWeb}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio2}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Web 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ display: `${filterApp}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio3}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="App 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ display: `${filterCard}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio4} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio4}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Card 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{ display: `${filterWeb}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio5} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio5}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Web 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{ display: `${filterApp}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio6} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio6}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="App 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ display: `${filterCard}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio7} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio7}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Card 1"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ display: `${filterCard}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio8} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio8}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Card 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{ display: `${filterWeb}` }}
            >
              <div className="portfolio-wrap">
                <img src={portfolio9} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href={portfolio9}
                      data-gallery="portfolioGallery"
                      className="portfokio-lightbox"
                      title="Web 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="*" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
